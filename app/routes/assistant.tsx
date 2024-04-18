import { LoaderFunctionArgs } from '@remix-run/node';
import { OpenAI } from 'openai';
import { eventStream } from 'remix-utils/sse/server';
import { threadIdCookie } from '~/lib/cookie';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const assistant_id = process.env.OPENAI_ASSISTANT_ID!;

export async function createNewThread(): Promise<string> {
  // Implement thread creation logic here
  // This example just returns a mock thread ID
  const thread = await openai.beta.threads.create();
  return Promise.resolve(thread.id);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookie_header = request.headers.get('Cookie');
  let thread_id = await threadIdCookie.parse(cookie_header);
  if (!thread_id) {
    thread_id = await createNewThread();
    const headers = new Headers();
    headers.append('Set-Cookie', await threadIdCookie.serialize(thread_id));
  }

  const message = new URL(request.url).searchParams.get('message');

  // Not generating a response
  if (message === undefined || message === null || message === '') {
    return eventStream(request.signal, function setup() {
      return function clear() {};
    });
  }

  // Adding a message to the thread
  await openai.beta.threads.messages.create(thread_id, {
    role: 'user',
    content:
      'Bitte antworte in Markdown. Beantworte die Frage kurz und prägnant. Beschwichtige den Studenten und verwende Emojis. Wenn es möglich ist füge ein Markdown Blockquote zu deiner Antwort hinzu. Dieses Zitat muss immer original aus der Richtlinien kommen. Wenn du ein Zitat hinzufügst, füge einen Link nach folgendem Schema hinzu: http://localhost:5173/richtlinien/unterkapitel#subkapitel; Der Name des Unterkapitel und wenn vorhanden Subkapitels müssen im Wortlaut der Richtlinien sein. Ein Unterkapitel ist immer mit der Überschrift X.Y gekennzeichnet. Ein Subkapitel ist immer mit der Überschrift X.Y.Z gekennzeichnet. Jeder Link muss in Kebab-Case sein und darf keine Nummerierung enthalten. Frage: ' +
      message,
  });

  // Creating stream
  return eventStream(request.signal, function setup(send) {
    openai.beta.threads.runs
      .stream(thread_id, {
        assistant_id: assistant_id,
      })
      .on('textDelta', (textDelta) => {
        textDelta.value &&
          send({ data: textDelta.value.replaceAll('\n', '<br />') });
      })
      .on('end', () => send({ data: '[DONE]' }));

    return function clear() {};
  });
}
