import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Formelle und strukturelle Maxime'
      breadcrumbs={{
        root: 'Inhalt, Struktur und Praxisbezug',
        rootHref: '/richtlinien/eckpfeiler-der-arbeit',
      }}
    >
      <p>
        <strong>Das Textverarbeitungssystem</strong> sollte sich durch
        professionelles Layout (Absätze, Seitennummerbruch), Silbentrennung und
        eine Rechtschreibroutine auszeichnen.
      </p>

      <p>
        <strong>Kürze und Prägnanz:</strong> Keine umständlichen Trivialitäten,
        keine Redundanz, steter Themenbezug.
      </p>

      <p>
        <strong>Einfach und konkret:</strong> Kein Jargon, keine apodiktischen
        Behauptungen, ausreichend Belege und Beispiele aus der Praxis. Jede
        Aussage soll immer durch Quellen belegt werden.
      </p>

      <p>
        <strong>Logisch strukturiert:</strong> Wichtig ist ein{' '}
        <u>Roter Faden</u>, der in der Einleitung mit einer kurzen, knappen
        Vorgehensweise aufgenommen wird, sich durch die gesamte Arbeit zieht und
        seinen Abschluss in einer ebenfalls knappen und präzisen Formulierung in
        der Schlussbetrachtung findet. Dies dient der Lesefreundlichkeit und
        auch dem Aufzeigen des <u>Roten Fadens</u>. Die Argumentation muss
        logisch aufeinander aufbauen, darf nicht diffus oder widersprüchlich
        sein.
      </p>

      <p>
        <strong>Attraktivität:</strong> Eine gut gestaltete Abbildung sagt mehr
        als tausend Worte. Versuchen Sie nicht durch eine Unzahl von
        Fremdwörtern zu imponieren, sondern durch eine klare und präzise
        Sprache.
      </p>
    </GuidelineContent>
  );
}
