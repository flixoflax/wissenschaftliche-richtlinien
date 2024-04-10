import { Link } from '@remix-run/react';

import { Small } from './typography/small';
import { ScrollArea } from './ui/scroll-area';

interface SidebarItem {
  heading?: boolean;
  title: string;
  href?: string;
}

const SIDEBARITEMS: SidebarItem[] = [
  {
    heading: true,
    title: 'Anforderungen',
  },
  {
    title: 'Anforderungen an die Aufgabenstellung',
    href: '/richtlinien',
  },
  {
    title: 'Anforderungen an die Bearbeitung',
    href: '/richtlinien/anforderungen-an-die-bearbeitung',
  },
  {
    heading: true,
    title: 'Inhalt, Struktur und Praxisbezug',
  },
  {
    title: 'Eckpfeiler der Arbeit',
    href: '/richtlinien/eckpfeiler-der-arbeit',
  },
  {
    title: 'Inhaltliche Maxime',
  },
  { title: 'Formelle und strukturelle Maxime' },
  { title: 'Aspekte zur Vorgehensweise' },
  { title: 'Quellenarten' },
  { heading: true, title: 'Formale Gestaltung' },
  { title: 'Äußere Gestaltung der Arbeiten' },
  { title: 'Gliederung und Kennzeichnung einzelner Inhaltsteile' },
  { title: 'Zitierweise' },
  { title: 'Literaturverzeichnis' },
  { title: 'Verwendung von Tabellen und Abbildungen' },
  {
    title:
      'Verwendung von (nicht-wissenschaftlichen) Internet-/ Intranetquellen',
  },
  { title: 'Gestaltung mathematischer und statistischer Teile der Arbeit' },
  { title: 'Gestaltung des Anhangs' },
  { title: 'Ehrenwörtliche Erklärung' },
  { heading: true, title: 'Bewertungskriterien' },
  { heading: true, title: 'Englischsprachige Arbeiten' },
];

function findNextItem(currentTitle: string): SidebarItem | null {
  const currentIndex = SIDEBARITEMS.findIndex(
    (item) => item.title === currentTitle
  );

  if (currentIndex === -1 || currentIndex >= SIDEBARITEMS.length - 1)
    return null;

  for (let i = currentIndex + 1; i < SIDEBARITEMS.length; i++) {
    if (SIDEBARITEMS[i].href) {
      return SIDEBARITEMS[i];
    }
  }

  return null;
}

function findPreviousItem(currentTitle: string): SidebarItem | null {
  const currentIndex = SIDEBARITEMS.findIndex(
    (item) => item.title === currentTitle
  );

  if (currentIndex <= 0) return null;

  for (let i = currentIndex - 1; i >= 0; i--) {
    if (SIDEBARITEMS[i].href) {
      return SIDEBARITEMS[i];
    }
  }

  return null;
}

const Sidebar = () => {
  return (
    <ScrollArea className='h-full'>
      <div className='flex flex-col space-y-3'>
        {SIDEBARITEMS.map((item) => {
          if (item.href) {
            return (
              <Link to={item.href} key={item.href}>
                <Small
                  className={
                    item.heading
                      ? 'leading-5 font-semibold [&:not(:first-child)]:pt-4 hover:opacity-60'
                      : 'leading-5 text-muted-foreground hover:opacity-70'
                  }
                >
                  {item.title}
                </Small>
              </Link>
            );
          }
          return (
            <Small
              key={item.title}
              className={
                item.heading
                  ? 'leading-5 font-semibold [&:not(:first-child)]:pt-4'
                  : 'leading-5 text-muted-foreground'
              }
            >
              {item.title}
            </Small>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export { Sidebar, findNextItem, findPreviousItem };
