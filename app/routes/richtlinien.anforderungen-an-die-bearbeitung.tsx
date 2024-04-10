import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function RichtlinienAnforderungenBearbeitung() {
  return (
    <GuidelineContent
      title='Anforderungen an die Bearbeitung'
      breadcrumbs={{ root: 'Anforderungen', rootHref: '/richtlinien' }}
    >
      Die Anforderungskriterien an Hausarbeiten, Praxistransferberichte (im
      Folgenden auch abge- kürzt als PTB), Studienarbeiten und Bachelorarbeiten
      lassen sich analog zu den{' '}
      <Link to={'/richtlinien/bewertungskriterien'}>Bewertungskriterien</Link>{' '}
      grob in vier Felder unterteilen:<br></br>
      <ul>
        <li>
          Die{' '}
          <Link to={'/richtlinien/inhaltliche-maxime'}>
            inhaltliche Qualität
          </Link>{' '}
          der Themenbearbeitung
        </li>
        <li>
          Die{' '}
          <Link to='/richtlinien/formelle-und-strukturelle-maxime'>
            Qualität von Struktur
          </Link>{' '}
          (Herangehensweise) <strong>und Argumentation</strong> (Logik) im
          Rahmen der Themenbearbeitung
        </li>
        <li>
          Die Qualität der Empirie bzw. des{' '}
          <Link to='/richtlinien/eckpfeiler-der-arbeit'>
            <strong>Praxisbezugs</strong>
          </Link>{' '}
          der Themenbearbeitung
        </li>
        <li>
          Die Einhaltung aller{' '}
          <Link to='/richtlinien/formale-gestaltung'>formalen Kriterien</Link>
        </li>
      </ul>
      Ausgehend von einer, bereits in PTB I hohen Erwartungshaltung wird{' '}
      <strong>
        mit zunehmender Semesterzahl die vollständige und hochqualitative
        Erfüllung aller obigen Anforderungen
      </strong>{' '}
      an wissenschaftliche Arbeiten angestrebt (vgl. Abb. 1).
      <img src='/abb1.png' alt='Abb. 1'></img>
      <small>
        Abb 1: Anspruchsniveau der Bearbeitung der Aufgabenstellung im Verlauf
        des Studiums<br></br> Quelle: Eigene Darstellung
      </small>
    </GuidelineContent>
  );
}
