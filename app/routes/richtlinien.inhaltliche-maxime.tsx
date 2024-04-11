import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Inhaltliche Maxime'
      breadcrumbs={{
        root: 'Inhalt, Struktur und Praxisbezug',
        rootHref: '/richtlinien/eckpfeiler-der-arbeit',
      }}
    >
      <p>
        <strong>Erfassung des Themas:</strong> Die Problemstellung sollte
        hinreichend detailliert werden, die Lösungsansätze sind prägnant und
        konkret zu entwickeln, <u>die Methodik der Theoriebildung</u> ist
        systematisch, aber straff (!) darzustellen. Dabei muss immer auf die
        unmittelbare Verbindung zur Themenstellung geachtet werden, denn der
        verfügbare Raum ist knapp. Das erlaubt weder Themenabweichungen noch
        langatmiges Theoretisieren.
      </p>

      <p>
        <strong>Vollständigkeit:</strong> Die Problemlage ist umfassend und
        nachvollziehbar darzustellen; sie sollte sich nicht nur auf Schlagworte
        wie <i>Globalisierung, Informationszeitalter</i> u.ä. beziehen.
      </p>

      <p>
        <strong>Eigenständigkeit:</strong> Wissenschaftlich arbeiten heißt:
        Entdeckungen machen, Neuland betreten.{' '}
        <em>
          Es reicht nicht, Quellen zusammenzustellen oder Erkenntnisse aus
          Theorie und Alltag entsprechend darzustellen.
        </em>{' '}
        Innovativ und eigenleistend kann sich zeigen in empirischen Erhebungen
        (Befragung, Test), in statistischen Auswertungen von empirischen Daten,
        in neuen Anwendungen bekannter Modelle, in einer kritischen
        Literatursynopse, in ungewöhnlichen Lösungsansätzen oder in
        überraschenden Schlussfolgerungen. Dabei spielen vor allem die
        Übertragung von Erkenntnissen auf weitere Themenfelder eine große Rolle.
        Transferleistungen und das kritische Hinterfragen von Sachverhalten und
        deren Reflexion fließen maßgeblich in die Bewertung ein.
      </p>

      <p>
        <strong>Richtigkeit:</strong> Inhaltliche Fehler zeigen sich u.a. in
        unpräziser Begriffsverwendung, verzerrter Beschreibung der Realität,
        falscher Interpretation.{' '}
        <u>
          Es sollte nichts behauptet werden, was nicht schlüssig begründet
          und/oder belegt werden kann.
        </u>
      </p>

      <p>
        <strong>Anwendungsbezug:</strong> Der Fachbereich Duales Studium der
        Hochschule für Wirtschaft und Recht Berlin steht für die Verbindung
        zwischen Theorie und Praxis. Dieser Ansatz gilt ganz besonders für die
        Abschlussarbeit (Bachelorarbeit). In ihr bearbeitet die Studierende oder
        der Studierende gemäß der Prüfungsordnung (§ 9) „
        <em>
          <u>
            praxisbezogene Problemstellungen selbstständig unter Anwendung
            praktischer und wissenschaftlicher Kenntnisse und Methoden ...“
          </u>
        </em>
        .{' '}
      </p>
      <p>
        Die Arbeit soll auch zeigen, dass die Studierende oder der Studierende
        in der Lage ist,{' '}
        <strong>
          ein Problem der Praxis mit wissenschaftlichen Methoden anzugehen und
          zu lösen. Das heißt: Die Problemstellung soll einen praktischen
          Anwendungsbezug haben, die Lösungsansätze sollen wissenschaftlich
          fundiert sein.{' '}
        </strong>
        Der Fachbereich Duales Studium der HWR Berlin akzeptiert weder
        Abschlussarbeiten (Bachelorarbeiten), die rein theoretische Abhandlungen
        darstellen, noch solche, die ausschließlich die betriebliche Praxis
        beschreiben.
      </p>
    </GuidelineContent>
  );
}
