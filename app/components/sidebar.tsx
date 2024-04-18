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
    href: '/richtlinien/inhaltliche-maxime',
  },
  {
    title: 'Formelle und strukturelle Maxime',
    href: '/richtlinien/formelle-und-strukturelle-maxime',
  },
  {
    title: 'Aspekte zur Vorgehensweise',
    href: '/richtlinien/aspekte-zur-vorgehensweise',
  },
  { title: 'Quellenarten', href: '/richtlinien/quellenarten' },
  {
    heading: true,
    title: 'Formale Gestaltung',
  },
  {
    title: 'Allgemeines',
    href: '/richtlinien/allgemeines',
  },
  {
    title: 'Äußere Gestaltung der Arbeiten',
    href: '/richtlinien/aussere-gestaltung-der-arbeiten',
  },
  {
    title: 'Gliederung und Kennzeichnung einzelner Inhaltsteile',
    href: '/richtlinien/gliederung-und-kennzeichnung-einzelner-inhaltsteile',
  },
  { title: 'Zitierweise', href: '/richtlinien/zitierweise' },
  { title: 'Literaturverzeichnis', href: '/richtlinien/literaturverzeichnis' },
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

function cleanMarkdownLinks(
  markdownText: string,
  sidebarItems: SidebarItem[] = SIDEBARITEMS
) {
  // Extract href values from the sidebar items into a Set for quick lookup
  const hrefSet = new Set(
    sidebarItems.filter((item) => item.href).map((item) => item.href)
  );

  // Regex to find markdown links e.g., [link text](/path#anchor)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  // Replace function to check each link and decide if it stays or gets removed
  const cleanedMarkdown = markdownText.replace(
    linkRegex,
    (match, text, url) => {
      // Extract the URL base part before any '#' anchor
      const urlBase = url.split('#')[0];

      // Check if the URL base is in the sidebar items
      if (hrefSet.has(urlBase)) {
        return match; // keep the markdown link
      }

      // URL base not found, replace with just the link text
      return text + ' (Broken Link:)';
    }
  );

  return cleanedMarkdown;
}

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
                  className={'leading-5 text-muted-foreground hover:opacity-70'}
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

export { Sidebar, findNextItem, findPreviousItem, cleanMarkdownLinks };
