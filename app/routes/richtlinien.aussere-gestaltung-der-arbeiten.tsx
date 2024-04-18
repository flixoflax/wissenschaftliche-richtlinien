import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Äußere Gestaltung der Arbeiten'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <h2 id='reihenfolge-der-rahmenteile-einer-arbeit'>
        Reihenfolge der Rahmenteile einer Arbeit
      </h2>
      <ul>
        <li>ggf. Sperrvermerk (siehe Kapitel 5)</li>
        <li>Titelblatt bzw. Deckblatt (Muster siehe Anhang)</li>
        <li>
          Inhaltsverzeichnis mit Seitenangaben (Sperrvermerk, Deckblatt und
          Inhaltsverzeichnis werden nicht im Inhaltsverzeichnis aufgeführt)
        </li>
        <li>Abkürzungsverzeichnis</li>
        <li>Abbildungsverzeichnis* (erst ab 5 Abbildungen)</li>
        <li>Tabellenverzeichnis* (erst ab 5 Tabellen)</li>
        <li>Haupttext</li>
        <li>Literaturverzeichnis</li>
        <li>Anhang</li>
        <li>Ehrenwörtliche Erklärung</li>
      </ul>
      <p>
        Die mit * gekennzeichneten Teile sind nur unter den angegebenen
        Bedingungen Bestandteile der Arbeit.
      </p>
      <p>
        <strong>
          Die Seiten mit den Verzeichnissen vor dem Haupttext werden fortlaufend
          mit römischen Zahlen nummeriert. Ab der ersten Textseite werden alle
          nachfolgenden Seiten mit arabischen Ziffern fortlaufend nummeriert
        </strong>{' '}
        (bis einschließlich Anhang und <i>Ehrenwörtlicher Erklärung</i>; siehe
        auch Kap. 3.12).
      </p>
      <h2 id='gestaltung-des-abkurzungs--abbildungs--und-tabellenverzeichnisses'>
        Gestaltung des Abkürzungs-, Abbildungs- und Tabellenverzeichnisses
      </h2>

      <h3>Abkürzungsverzeichnis</h3>
      <p>
        Das Abkürzungsverzeichnis ist in alphabetischer Reihenfolge zu
        erstellen. Seitenangaben für Abkürzungen entfallen.
        Bequemlichkeitsabkürzungen (BWL, insb.) sind zu unterlassen. Dies gilt
        nicht für die üblichen im Duden genannten Abkürzungen (z.B., u.a.,
        usw.), welche auch nicht im Abkürzungsverzeichnis aufzuführen sind.
      </p>
      <p>
        <u>Beispiel:</u>
      </p>
      <table className='table-auto'>
        <thead>
          <tr className='text-left'>
            <th>Abkürzung</th>
            <th>Erleuterung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EZB</td>
            <td>Europäische Zentralbank</td>
          </tr>
        </tbody>
      </table>

      <h3>Abbildungsverzeichnis</h3>
      <u>Beispiel:</u>
      <table>
        <thead className='text-left'>
          <tr>
            <th>Abb. Nr.</th>
            <th>Titel</th>
            <th>Seitenangabe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abb. 1</td>
            <td>Demografische Entwicklung</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>

      <h3>Tabellenverzeichnis</h3>
      <u>Beispiel:</u>
      <table>
        <thead className='text-left'>
          <tr>
            <th>Tab. Nr.</th>
            <th>Titel</th>
            <th>Seitenangabe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tab. 3</td>
            <td>Inflationsraten in den USA</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>

      <p>
        Dies impliziert, dass Abbildungen sowie Tabellen in der Arbeit
        fortlaufend nummeriert werden müssen. Es wird empfohlen die
        Beschriftungsfunktion und automatisierte Verzeichnisse des
        Textverarbeitungsprogrammes für Abbildungen und Tabellen zu nutzen.
      </p>

      <h2 id='gestaltung-der-textseite'>Gestaltung der Textseite</h2>
      <p>
        Die Seiten werden{' '}
        <u>von der ersten Seite an fortlaufend oben nummeriert</u>. Rechts wird
        ein Korrekturrand von 30-35 mm gelassen, links verbleibt ein Rand von
        ca. 21 mm. Der Rand oben sollte ca. 30 mm (inkl. Seitenangabe), der
        untere ca. 20 mm hoch sein.
      </p>

      <p>
        Der Text soll i.d.R. mit <u>Schriftgröße 12 pt (Times New Roman)</u> mit
        mittlerem Zeilenabstand (1 1/2-zeilig) und normaler Laufweite
        geschrieben werden. Wird eine andere Schrift gewählt, müssen
        Schriftgröße und Zeilenabstand an den vorgenannten Einheiten angelehnt
        sein.
      </p>

      <p>
        <u>Ausnahmen</u> hiervon (einzeilige Schreibweise) gelten bei Tabellen,
        längeren wörtlichen Zitaten im Text und in Fußnoten.
      </p>

      <p>
        <u>Fußnoten</u> sowie alle Angaben zu Tabellen und Abbildungen sollten
        mit Schriftgröße 10 pt (Times New Roman) geschrieben werden.
      </p>

      <p>
        Der Textteil kann sowohl linksbündig als auch in <u>Blocksatz</u>{' '}
        verfasst werden. Auf jeden Fall ist die Silbentrennung zu aktivieren.
      </p>

      <p>
        <u>Absätze</u> sollten entweder durch einen einheitlichen Abstand oder
        durch Einrücken der ersten Zeile eines neuen Absatzes kenntlich gemacht
        werden. Die erste Zeile nach einer Überschrift wird nicht eingerückt.
      </p>

      <p>
        <u>Abbildungen und Tabellen</u> sind zentriert zu platzieren.
      </p>
      <h2>Fehlerfreiheit und sauberer Text</h2>
      <p>
        Die Verfasserin oder der Verfasser ist nicht nur für die sachliche
        Richtigkeit des Inhaltes verantwortlich. Die Arbeit soll auch frei von
        Rechtschreib-, Grammatik- und Zeichensetzungsfehlern sein. Auch der
        Schreibstil wird beurteilt.
      </p>
    </GuidelineContent>
  );
}
