import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Anforderungen an die Aufgabenstellung'
      breadcrumbs={{ root: 'Anforderungen', rootHref: '/richtlinien' }}
    >
      Ziel der wissenschaftlichen Arbeiten am Fachbereich 2 der HWR ist es
      grundsätzlich, einen Beitrag zu einer betrieblichen / praktischen
      Problemlösung zu leisten. Im Optimalfall sollte dieser …<br></br>
      <ul>
        <li>
          neben einer <strong>Analyse</strong> und
        </li>
        <li>
          <strong>Bewertung</strong> der themenspezifischen Ausgangssituation
          der Unternehmung,
        </li>
        <li>
          in der Regel auch die Entwicklung konkreter{' '}
          <strong>Handlungsempfehlungen</strong> für die Unternehmung umfassen.
        </li>
      </ul>
    </GuidelineContent>
  );
}
