import inter from '@fontsource-variable/inter/wght.css?url';
import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import stylesheet from '~/tailwind.css?url';

import { themeSessionResolver } from './services/themeSession.server';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: inter },
];

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
};

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction='/action/set-theme'>
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html lang='en' className={theme ?? ''}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='font-sans'>
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
