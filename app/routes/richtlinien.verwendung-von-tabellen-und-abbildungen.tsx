import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Verwendung von Tabellen und Abbildungen'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <p>
        Tabellen und Abbildungen sind ein gutes Instrument, um Zusammenhänge zu
        veranschaulichen und die Aufmerksamkeit der Leserin oder des Lesers zu
        erhalten.{' '}
        <u>
          Für das Textverständnis wesentliche Tabellen und Abbildungen gehören
          in den Text und nicht in den Anhang.
        </u>
      </p>
      <p>
        Sie sollten prinzipiell selbsterklärend sein, d. h. Koordinatenachsen
        müssen beschriftet und Dimensionen von Zahlen aus dem Tabellenkopf
        erkennbar sein. Bei Prozentangaben ist die Berechnungsbasis (also die
        Größe, die 100 % entspricht) unbedingt mit anzugeben. Notfalls kann eine
        umfängliche Erläuterung auch in der Bildunterschrift oder einer Fußnote
        erfolgen.
      </p>
      <p>
        <strong>Tabellen</strong> müssen eine möglichst genaue Bezeichnung ihres
        Inhalts als Überschrift tragen. Am Kopf jeder Tabelle steht
        ausgeschrieben das Wort Tabelle (evtl. abgekürzt) mit der jeweiligen
        Nummer. Tabellen werden durchnummeriert und evtl. in einem
        Tabellenverzeichnis zusammengestellt (siehe Kap. 3.2.1 und 3.2.2). In
        den Überschriften zu Tabellen schreibt man <u>nicht</u> von ... bis ...,
        sondern einfach nur die Jahreszahlen, getrennt durch einen waagerechten
        Strich. Tabellen sind stets <u>ganz einzurahmen</u>.
      </p>
      <p>
        <strong>Abbildungen</strong> müssen die Bezeichnung ihres Inhalts als{' '}
        <u>Unterschrift</u>
        tragen. Zu Beginn steht ausgeschrieben das Wort Abbildung (evtl.
        abgekürzt) mit der jeweiligen Nummer. Nachfolgend wird die Quelle
        genannt. Bei der Darstellung quantitativer Merkmale sowie absoluter oder
        relativer Häufigkeiten sind die Koordinatenachsen zu beschriften.
      </p>
      <blockquote>
        <u>
          <i>Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Abb. 4: Altersstruktur deutscher Handwerksbetriebe
        <br></br>
        Quelle: Statistisches Bundesamt (Hrsg.) (2012), S. 9.
      </blockquote>
      <p>
        Wurde die ursprüngliche <strong>Tabelle oder Abbildung</strong>{' '}
        verändert, sind aber noch klare Strukturen der ursprünglichen Tabelle
        bzw. Abbildung erkennbar, so wird dies durch <u>In Anlehnung an</u>:
        hervorgehoben. Bei Verwendung selbst erstellter Abbildungen vermerken
        Sie als Quelle <u>Eigene Darstellung</u>.
      </p>
      <p>
        Auf eine genaue örtliche, zeitliche und sachliche Abgrenzung des
        Dargestellten ist zu achten. Eine hinreichende Erklärung der verwendeten
        Symbole sowie bereits vorhandene bzw. von der Verfasserin oder vom
        Verfasser hinzugefügte Anmerkungen und Quellenangaben sind unmittelbar
        unter die Abbildungen und Skizzen zu setzen. Glaubt die Verfasserin oder
        der Verfasser, auf umfangreicheres Material nicht verzichten zu können,
        so gehört dieses in einen Anhang. Hier werden auch andere ausführlichere
        Dokumentationen, wie z.B. längere Gesetzestexte, Fotokopien etc.
        aufgenommen, sofern sie in engem Zusammenhang mit dem Thema stehen.
      </p>
      <p>
        Gefaltete sowie liegende Tabellen und Abbildungen sind zu vermeiden. Wo
        dies nicht möglich ist, soll ihre Anordnung so erfolgen, dass die
        Tabelle oder die Abbildung beim Lesen im Uhrzeigersinn zu drehen ist.
      </p>
      <p>
        Verwendung von <strong>Zeichen in Tabellen</strong>:
      </p>
      <li>
        eine <strong>Null</strong> (0; 0,0 usw.) für eine Größe, die kleiner ist
        als die Hälfte der verwendeten Zählereinheit
      </li>
      <li>
        einen <strong>Strich</strong> ( - ), wenn nichts vorkommt (kein Fall,
        kein Betrag usw.) oder wenn die Eintragung aus logischen Gründen nicht
        möglich ist
      </li>
      <li>
        einen <strong>Punkt</strong> ( . ), wenn die Zahl nicht bekannt oder
        nicht erhoben worden ist
      </li>
      <li>
        ein <strong>hochgestelltes kleines p</strong> (<sup>p</sup>), wenn die
        Zahl geschätzt wurde
      </li>
      <p>
        Alle <strong>Fußnoten</strong>, die sich auf den Inhalt der Tabelle
        beziehen, werden mit a, b, c usw. bezeichnet. Sie kommen wie die
        Quellenangabe unter die Beschriftung der Tabelle.
      </p>
      <p>
        Die <strong>Fußnoten a, b, c</strong> usw. werden durch Punkt und
        Gedankenstrich voneinander getrennt, also fortlaufend und nicht
        untereinander geschrieben. Ist in einer Tabelle nur eine Einheit
        gebracht worden, z.B. € oder kg, so setzt man sie in Klammern an den
        Schluss der Überschrift. Mehrere Einheiten setzt man in den Kopf der
        betreffenden Spalte.
      </p>
      <p>
        <strong>
          Die Quellenangaben für Tabellen und Abbildungen erfolgen nach den für
          Textstellen und Zahlen geltenden Grundsätzen. Alle Quellenangaben sind
          unmittelbar unter der Tabelle bzw. Abbildung mit Voranstellung des
          Wortes <i>Quelle</i> bzw. <i>Quellen</i> anzubringen.
        </strong>
      </p>
      <p>
        Werden in einer Arbeit Zahlen aus vielen Quellen verarbeitet, dabei für
        Vergleiche neu zusammen- und umgestellt, so dass die Zitierung jeder
        einzelnen Zahl nicht mehr möglich ist, so sind zu Beginn des
        betreffenden Abschnittes alle Quellen anzugeben, und in einer Fußnote
        ist auf die Art der Verarbeitung hinzuweisen.
      </p>
    </GuidelineContent>
  );
}
