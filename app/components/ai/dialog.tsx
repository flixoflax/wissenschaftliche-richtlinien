import { TooltipProvider } from '@radix-ui/react-tooltip';
import { CornerDownLeft, Paperclip } from 'lucide-react';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { cleanMarkdownLinks } from '../sidebar';
import { AutosizeTextarea } from '../ui/autosize-textarea';
import { Button } from '../ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { ScrollArea } from '../ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

function removeGeneralCitationPattern(inputString: string) {
  // This regex matches patterns like 【anything here】
  const pattern = /【.*?】/g;

  // Replace found patterns with an empty string
  const resultString = inputString.replace(pattern, '');

  return resultString;
}

const AiDialog = () => {
  const [results, setResults] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('');

  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (viewportRef.current) {
      const scrollHeight = viewportRef.current.scrollHeight;
      const height = viewportRef.current.clientHeight;
      const scrollY = scrollHeight - height;
      viewportRef.current.scrollTo({ top: scrollY, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDisabled(true);
    setValue('');
    setResults('');

    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get('message');

    const sse = new EventSource(`/assistant?message=${query}`);

    sse.addEventListener('message', (event) => {
      if (event.data == '[DONE]') {
        setDisabled(false);
        return;
      }
      setResults(
        (prevResults) => prevResults + event.data.replaceAll('<br />', '\n')
      );
      scrollToBottom();
    });

    sse.addEventListener('error', (event) => {
      console.log('error: ', event);
      sse.close();
    });
  };

  return (
    <DialogContent className='max-w-4xl'>
      <TooltipProvider>
        <DialogHeader>
          <DialogTitle>HWR AI Assistent</DialogTitle>
          <DialogDescription>
            Dein digitaler Begleiter für alle Fragen zu den Richtlinien der HWR
            Berlin. Egal, ob es um den Aufbau deiner Hausarbeit, Details deines
            PTB, Hilfe bei der Studienarbeit oder Unterstützung für deine
            Bachelorarbeit geht – der HWR AI Assistent ist für dich da.
          </DialogDescription>
        </DialogHeader>
        <div className='h-[60vh] rounded-lg bg-muted w-full relative mt-4 p-5 mx-auto'>
          {results == '' && disabled ? (
            <div className='size-4 bg-primary animate-pulse rounded-full'></div>
          ) : (
            <ScrollArea viewportRef={viewportRef}>
              <div className='max-h-96'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  className={
                    'prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none prose-a:text-primary'
                  }
                  components={{
                    p({ children }) {
                      return <p className='mb-2 last:mb-0'>{children}</p>;
                    },
                  }}
                >
                  {cleanMarkdownLinks(removeGeneralCitationPattern(results))}
                </ReactMarkdown>
              </div>
            </ScrollArea>
          )}
          <form
            onSubmit={handleFormSubmit}
            className='absolute bottom-0 left-0 m-4 right-0 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring'
          >
            <Label htmlFor='message' className='sr-only'>
              Message
            </Label>
            <AutosizeTextarea
              disabled={disabled}
              id='message'
              name='message'
              placeholder='Stelle hier deine Frage...'
              maxHeight={200}
              minHeight={60}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className='min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0'
            />
            <div className='flex items-center p-3 pt-0'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Paperclip className='size-4' />
                    <span className='sr-only'>Arbeit hochladen</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side='top'>Arbeit hochladen</TooltipContent>
              </Tooltip>
              <Button type='submit' size='sm' className='ml-auto gap-1.5'>
                Senden
                <CornerDownLeft className='size-3.5' />
              </Button>
            </div>
          </form>
        </div>
      </TooltipProvider>
    </DialogContent>
  );
};

export { AiDialog };
