import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Zitierweise'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <h2 id='allgemeine-hinweise'>Allgemeine Hinweise</h2>
      <p>
        In die schriftlichen Arbeiten gehen in der Regel Fakten, Meinungen,
        Gedanken und sonstige Aussagen aus schriftlichen Quellen oder der
        betrieblichen Praxis ein. Es ist in wissenschaftlichen Arbeiten
        selbstverständlich, dass die einzelnen{' '}
        <u>Quellen und Fundstellen genau angegeben</u> werden, so dass deutlich
        ersichtlich ist, woher die Aussagen stammen und die Leserin oder der
        Leser diese aufgrund der von der Verfasserin oder dem Verfasser
        gemachten Angaben nachprüfen kann.
      </p>
      <p>
        Da sowohl die Auswahl der Thematik, die Herangehensweise als auch die
        Auswahl der Quellen und Zitate Ausdruck des ‚Blickwinkels der Autorin
        oder des Autors‘ ist, sind Hinweise wie{' '}
        <u>
          ‚nach Ansicht der Verfasserin‘ oder gar der ‚Ich-Stil‘ unangebracht
        </u>
        .
      </p>
      <p>
        Alternativ können{' '}
        <Link to={'#quellennachweise-in-fussnoten'}>
          Quellenbelege durch Fußnoten
        </Link>{' '}
        oder innerhalb des Textes gemacht werden (s.{' '}
        <Link to='#quellennachweis-im-text'>Quellennachweis im Text</Link>). Der{' '}
        <u>Fußnotenhinweis</u> auf die herangezogene Quelle erfolgt im laufenden
        Text durch eine hochgestellte Ziffer am Ende des Zitats. Soll jedoch nur
        auf einen Gedanken, eine Meinung oder auf nähere bzw. ergänzende
        Ausführungen in der Literatur verwiesen werden, ohne die Quelle wörtlich
        zu zitieren, ist der Fußnotenhinweis am Ende des Gedankengangs{' '}
        <u>nach</u> dem Punkt zu setzen (siehe hierzu auch{' '}
        <Link to={'#nichtwoertliche-zitate'}>Nichtwörtliche Zitate</Link>).
      </p>
      <p>
        Die Quellennachweise stehen auf der jeweiligen Seite. Sie sind für das
        ganze Werk zu nummerieren.
      </p>
      <p>
        Wird innerhalb des Textes zitiert, erfolgt der Beleg jeweils am Ende des
        Satzes vor dem Satzzeichen. Innerhalb eines Textes dürfen entweder nur
        Quellenbelege durch Fußnoten oder Quellenbelege innerhalb des Textes
        gemacht werden. Eine Mischung beider Stile innerhalb eines Textes ist
        nicht erlaubt und führt zu einer schlechteren Bewertung.
      </p>
      <p>
        <strong>
          Wenn Sie Ihre Arbeit in Englisch verfassen, ist der „Guide to the
          Harvard Style of Referencing“ der Anglia Ruskin University in der
          aktuellen Version zu verwenden.
        </strong>
      </p>
      <h2>Wörtliche Zitate</h2>
      <p>
        Wörtliche Zitate sollten nur dann verwendet werden,{' '}
        <strong>wenn der exakte Wortlaut für die Arbeit wesentlich ist</strong>{' '}
        oder die Formulierung eine außergewöhnliche Originalität aufweist.
      </p>
      <ul>
        <li>
          Ein wörtliches Zitat wird von ersten bis zum letzten Wort in{' '}
          <strong>Anführungsstriche</strong> gesetzt.
          <br />
          <blockquote>
            <u>
              <i>Beispiel:</i>
            </u>
            <br />
            „Die notwendige Konsolidierung der Kapitalstruktur der Unternehmen
            wird ohne die Verbesserung der Ertragsverhältnisse nicht gelingen.“
            <sup>1</sup>
          </blockquote>
        </li>
        <li>
          Ein <strong>Zitat im Zitat</strong> wird durch einfache
          Anführungsstriche gekennzeichnet.
          <br />
          <blockquote>
            <u>
              <i>Beispiel:</i>
            </u>
            <br />
            „Die Behauptung, es ergäbe sich &lsquo;kein anhaltender Einbruch bei
            der Renditeentwicklung&rsquo;, ist also unzutreffend.“<sup>2</sup>
          </blockquote>
        </li>
        <li>
          Ein <strong>ausgelassenes Wort</strong> wird durch zwei Punkte
          ersetzt.
          <br />
          <blockquote>
            <u>
              <i>Beispiel:</i>
            </u>
            <br />
            „Die .. Konsolidierung der Kapitalstruktur der Unternehmen wird ohne
            die Verbesserung der Ertragsverhältnisse nicht gelingen.“
            <sup>3</sup>
          </blockquote>
        </li>
        <li>
          <strong>Mehrere ausgelassene Wörter</strong> werden durch drei Punkte
          ersetzt.
          <br />
          <blockquote>
            <u>
              <i>Beispiel:</i>
            </u>
            <br />
            „Die notwendige Konsolidierung ... wird ohne die Verbesserung der
            Ertragsverhältnisse nicht gelingen.“<sup>4</sup>
          </blockquote>
        </li>
        <li>
          <strong>Zusätzliche Ergänzungen</strong> oder Erklärungen im Zitat
          durch den Verfasser werden in eckige Klammern gesetzt.
          <br />
          <blockquote>
            <u>
              <i>Beispiel:</i>
            </u>
            <br />
            „Mit Ausnahme des Jahres 2013 ist in den letzten Jahren nach Steuern
            ein starker Abfall [der Eigenkapitalrendite] auf eine Linie um ca.
            5,5 % zu registrieren.“<sup>5</sup>
          </blockquote>
        </li>
        <li>
          <strong>Wörtliche Zitate aus der Sekundärliteratur</strong> sind nach
          Möglichkeit <strong>zu vermeiden</strong>, da grundsätzlich das
          Erstschrifttum heranzuziehen ist. Soweit Primärquellen nicht
          beschaffbar sind, darf Sekundärliteratur zitiert werden.
        </li>
        <li>
          Erscheint es dem Verfasser notwendig, <strong>längere Zitate </strong>
          zu verwenden, sind sie im Text einzurücken und mit einzeiligem Abstand
          zu schreiben.
        </li>
        <li>
          Wörtliche Zitate in <strong>Fremdsprachen</strong> werden original
          übernommen und in der Fußnote in deutscher Übersetzung wiedergegeben;{' '}
          <strong>englische Zitate</strong> werden nicht übersetzt.
        </li>
      </ul>
      <h2 id='nichtwoertliche-zitate'>Nichtwörtliche Zitate</h2>
      <p>
        Bei nichtwörtlichen Zitaten hat man nur den Gedankengang aus einer oder
        mehreren Quellen übernommen, aber ihn in eigenen Worten dargestellt.
        Auch bei nichtwörtlichen Zitaten sind alle Quellen anzugeben, aus denen
        man die Überlegungen entnommen hat.
      </p>
      <p>
        Mit nichtwörtlichen Zitaten sollte nicht gespart werden. Jeder Absatz
        oder Gedankengang sollte einzeln belegt werden, sofern er aus der
        Literatur übernommen wurde. Im Text werden keine Anführungsstriche
        gesetzt.
      </p>
      <blockquote>
        <u>
          <i>Beispiel:</i>
        </u>
        <br />
        Die Eigenkapitalrendite nach Steuern ist in den letzten Jahren auf ca.
        5,5 % gefallen.<sup>5</sup>
      </blockquote>
      <h2>Zitate aus Gesetzen und ähnlichen Vorschriften</h2>
      <p>
        Gesetzliche und ähnliche Vorschriften sind regelmäßig nur abgekürzt zu
        zitieren. Dabei sind die amtlichen Abkürzungen, im Zweifelsfall auch die
        in den Beck´schen Textausgaben verwendeten, zu benutzen, z.B. § 6 Abs. 1
        Nr. 2 S. 3 EStG oder R 40 Abs. 3 S. 2 KStR.
      </p>
      <h2 id='quellennachweise-in-fussnoten'>Quellennachweise in Fußnoten</h2>
      <p>
        Es werden grundsätzlich die Verfasserin oder der Verfasser oder die
        herausgebende Institution als Herausgeber zitiert; falls diese oder
        dieser nicht ersichtlich ist, wird o.V. angegeben.
      </p>
      <ul>
        <li>
          <strong>
            Bei nichtwörtlichen (sinngemäßen) Zitaten wird der Zusatz ‚Vgl. ‘
            den Quellenangaben vorangestellt.
          </strong>
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>5</sup>Vgl. Maier, Sabine / Müller, Friedrich (2014), S. 65.
          </blockquote>
        </li>
        <li>
          <strong>Es wird die Kurzzitierweise angewendet:</strong>
          <ul>
            <li>
              Angabe des Nachnamens (<u>einheitlich</u> mit
              Vornamen/Vornamenskürzel oder ohne Vornamen) der Verfasserin oder
              des Verfassers,
            </li>
            <li>
              ab drei Autoren sollte in der Fußnote nur der erste genannte
              werden mit dem Zusatz u.a.,
            </li>
            <li>Jahr der verwendeten – möglichst letzten – Auflage,</li>
            <li>
              Seitenangabe (z.B. S. 45) bzw. Seitenangaben (z.B. S. 45 f., bei
              mehreren Seiten: S. 45-48).
            </li>
          </ul>

          <blockquote>
            <u>
              <i>Fiktives Beispiel (hier: für wörtliche Zitate):</i>
            </u>
            <br></br>
            <br></br>
            <sup>6</sup>Maier, Sabine u.a. (2014), S. 430 f.
          </blockquote>
          <p>
            Für viele juristische Kommentare finden Sie einen Zitiervorschlag
            auf der Rückseite der Titelseite.
          </p>
          <blockquote>
            <u>
              <i>Fiktive Beispiele:</i>
            </u>
            <br></br>
            <br></br>
            <sup>7</sup>Schmidt / Müller (2013), §7 RZ 32.
            <br></br>
            <sup>8</sup>Schulze / Maier-Schulze in: Beck Bil-Komm. (2012), §255
            RZ 52.
          </blockquote>
          <p>
            Grundsätzlich soll die Fußnote kurz sein und eine eindeutige
            Verbindung zum Werk im Literaturverzeichnis herstellen.
          </p>
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>9</sup>BMF vom 26.5.2012, RZ 10.
          </blockquote>
        </li>
        <li>
          Werden für eine inhaltliche Aussage mehrere Quellen als indirekte
          Zitate benutzt, so ist nur <strong>eine</strong> Fußnote zu setzen und
          in dieser alle notwendigen Quellen durch Semikolon getrennt anzugeben.
          <blockquote>
            <u>
              <i>Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>1</sup>Vgl. Holtbrügge (2015), S. 2; Berthel/Becker (2013), S.
            33.
          </blockquote>
        </li>
        <li>
          Der Quellennachweis bei <strong>Abbildungen / Tabellen</strong> muss
          ebenfalls erbracht werden, aller- dings nicht in einer Fußnote (siehe{' '}
          <Link to={'/richtlinien/verwendung-von-tabellen-und-abbildungen'}>
            Verwendung von Tabellen und Abbildungen
          </Link>
          ).
        </li>
        <li>
          Finden sich im wörtlichen Zitat <strong>Hervorhebungen</strong> durch
          Kursiv- oder Fettdruck, die von der Verfasserin oder dem Verfasser in
          seiner Arbeit weggelassen werden, wird die Fußnote durch einen
          entsprechenden Hinweis ergänzt.
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>10</sup>Müller, Paul (2011), S.38 f. (Hervorhebungen
            weggelassen).
          </blockquote>
        </li>
        <li>
          Ebenso wird ein Hinweis gegeben, wenn die Verfasserin oder der
          Verfasser selbst im wörtlichen Zitat durch Sperrung eines Wortes oder
          Unterstreichen etwas hervorhebt, was im Original nicht hervorgehoben
          war.
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>1</sup>Schmidt, Paula (2013), S. 15 (Hervorhebungen durch die
            Verfasserin).
          </blockquote>
        </li>
        <li>
          Bei <strong>Zitaten im Zitat</strong> wird nur die Sekundärliteratur
          angegeben.
        </li>
        <li>
          Bei <strong>Auslassung eines Wortes</strong> oder mehrerer Wörter in
          wörtlichen Zitaten werden in der Fußnote die gleichen Quellenangaben
          wie bei üblichen wörtlichen Zitaten gemacht. Das gleiche gilt bei
          Hinzufügungen durch die Verfasserin oder den Verfasser.
        </li>
        <li>
          Wiederholt sich eine Quelle{' '}
          <strong>in der nächsten Fußnote der gleichen Seite</strong>, so wird
          statt der Kurzzitierweise das Wort <i>Ebenda</i> verwendet.
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>2</sup>Meier, Friedrich (2014), S. 185.
            <br></br>
            <sup>3</sup>Vgl. ebenda, S. 210 f.
          </blockquote>
        </li>
        <li>
          Bei Zitaten aus der <strong>Sekundärliteratur</strong> wird in der
          Fußnote die nicht herangezogene Originalquelle in der Form – Name,
          Titel, Ort und Jahr der Veröffentlichung – aufgeführt (weil sie nicht
          im Literaturverzeichnis ausgewiesen wird), mit dem zusätzlichen
          Hinweis auf den Fundort in der Sekundärquelle.
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            <sup>4</sup>Vgl. Müller, Paul, Grundlagen des Internationalen
            Marketing, Wiesbaden, 2012, in: Maier, Horst (2014), S. 2.
          </blockquote>
        </li>
        <li>
          Das <strong>erste Wort</strong> einer Fußnote ist groß zu schreiben.
        </li>
        <li>
          Das <strong>Ende einer Fußnote</strong> bildet ein Punkt
        </li>
        <li>
          <strong>Zitate aus Internet-/Intranetquellen</strong>
          <ul>
            <li>
              In den Fußnoten im Text können Internet-Quellen in der gleichen
              Kurzform zitiert werden wie traditionelle Quellen. Dazu gehört der
              Name des Verfassers (oder wenn nicht vorhanden, der
              veröffentlichenden Institution) und die Jahresangabe im
              Literaturverzeichnis sowie die genaue Angabe der Fundstelle.
            </li>
            <li>
              In der Fußnote ist die Kurzzitierweise ohne URL (Uniform Ressource
              Locator) anzugeben.
              <blockquote>
                <u>
                  <i>Fiktives Beispiel:</i>
                </u>
                <br></br>
                <br></br>
                <sup>5</sup>Vgl. Müller, Paul, These 9.
              </blockquote>
            </li>
          </ul>
        </li>
        <li>
          Falls unternehmensinterne Dateien verwendet werden, die nicht auf
          öffentlich zugängli- chen Webservern gespeichert sind, so ist auf
          diese im Text der Fußnote bzw. Quellen- angabe wie folgt zu verweisen:
          <br></br>
          <br></br>
          &lt;Firma&gt; (&lt;Aktualisierungsdatum&gt;),&lt;Fundstelle&gt;, siehe
          digitaler Anhang.
          <br></br>
          <br></br>
          Im gedruckten Anhang sind die digitalen Dokumente dann mit folgenden
          Angaben aufzu- listen:
          <br></br>
          <br></br>
          &lt;Firma&gt;, &lt;Standort&gt;, &lt;Dokumentüberschrift&gt;,
          &lt;Aktualisierungsdatum&gt;, abgerufen am &lt;Datum&gt;,
          &lt;Dateiname&gt; (siehe &lt;Datenträger bzw. Anhang&gt;).
        </li>
      </ul>
      <h2 id='quellennachweis-im-text'>Quellennachweis im Text</h2>
      <p>
        Innerhalb des Textes erfolgt die Zitierung von Autoren durch die Nennung
        der Nachnamen, des Jahrs der Veröffentlichung und der Seitenzahl. Werden
        die Autoren im Text direkt angesprochen, so werden sie vor der Klammer
        genannt. Bei drei und mehr Autoren soll nach der Nennung des ersten
        Namens die Abkürzung u.a. verwendet werden. Wird mehr als eine Seite
        zitiert wird die Seitenzahl mit f. erweitert oder der Seitenbereich
        angegeben.
      </p>
      <blockquote>
        <u>
          <i>Fiktive Beispiele:</i>
        </u>
        <br></br>
        <br></br>
        Müller (2017, S. 123) bzw. (Müller 2017, S. 123) bzw. (Müller 2017, S.
        123-128)
        <br></br>
        <br></br>
        Meier und Müller (2017, S. 123) bzw. (Meier & Müller 2017, S. 123) bzw.
        (Meier & Müller 2017, S. 123-128)
        <br></br>
        <br></br>
        Meier u.a. (2017, S. 123) bzw. (Meier u.a. 2017, S. 123) bzw. (Meier
        u.a. 2017, S. 123- 128)
      </blockquote>
      <p>
        Werden in wörtlichen Zitaten Hervorhebungen gemacht oder weggelassen,
        wird dies nach der Seitenzahl analog zum Zitieren in Fußnoten vermerkt.
        Internet- bzw. Intranetquellen werden im Text nicht anders zitiert als
        andere Quellen.
      </p>
    </GuidelineContent>
  );
}
