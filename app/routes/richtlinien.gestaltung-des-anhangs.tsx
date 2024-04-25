import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Gestaltung des Anhangs'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <p>
        Um den Anhang übersichtlich zu gestalten, ist es möglich, ein Deckblatt
        mit den Inhaltsanga- ben und Seitenzahlen des Anhangs einzufügen. Die
        formalen Anforderungen gelten auch für den Inhalt des Anhangs. Zur
        Seitennummerierung siehe{' '}
        <Link
          to={
            '/richtlinien/aussere-gestaltung-der-arbeiten/#reihenfolge-der-rahmenteile-einer-arbeit'
          }
        >
          Reihenfolge der Rahmenteile einer Arbeit
        </Link>
      </p>
    </GuidelineContent>
  );
}
