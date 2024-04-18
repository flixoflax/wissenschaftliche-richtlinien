import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Quellenarten'
      breadcrumbs={{
        root: 'Inhalt, Struktur und Praxisbezug',
        rootHref: '/richtlinien/eckpfeiler-der-arbeit',
      }}
    >
      <h2 id='wissenschaftliche-quellen'>Wissenschaftliche Quellen</h2>
      <p>
        Sie benötigen wissenschaftliche Quellen, um die Aussagen Ihres Textes zu
        belegen. Diese folgen den Prinzipien der wissenschaftlichen Analyse,
        insbesondere werden Aussagen in diesen Texten systematisch durch Quellen
        belegt und Resultate leiten sich aus den Ergebnissen der
        wissenschaftlichen Analyse ab.
      </p>
      <p>
        Ein gutes Indiz, ob es sich um eine wissenschaftliche Quelle handelt,
        ist die Herkunft der Ressourcen. Sie können davon ausgehen, dass es sich
        bei Lehrbüchern, Fachbüchern, wissenschaftlichen Sammelbänden, Artikeln
        in wissenschaftlichen Zeitschriften, Forschungsberichten, Arbeits- und
        Diskussionspapieren von Universitäten und Forschungsinstituten um
        wissenschaftliche Quellen handelt. Bei Zweifeln über die Qualität der
        Quellen sollte Rücksprache mit dem Betreuer gehalten werden.
      </p>
      <h2 id='rechtsquellen'>Rechtsquellen</h2>
      <p>
        Bei Rechtsquellen handelt es sich um Gesetzestexte bzw. andere
        Rechtsnormen, die als Beleg für Vorschriften angeführt werden können.
        Davon muss man Gesetzeskommentare unterscheiden, die als
        wissenschaftliche juristische Quellen behandelt werden.
      </p>
      <h2 id='enzyklopadien'>Enzyklopädien</h2>
      <p>
        Enzyklopädien enthalten i.d.R. kurze Erläuterungsartikel zu bestimmten
        Sachverhalten. Sie können daher höchstens als Nachweis für Definitionen
        verwendet werden. Ob eine Enzyklopädie als Quelle geeignet ist, hängt
        von dem fachspezifischen Inhalt und der redaktionellen Qualität ab. Je
        spezifischer die Enzyklopädie ist und je wissenschaftlicher die Autoren
        bzw. die redaktionellen Prinzipien sind, desto eher eignet sie sich als
        Quelle. Da bei Wikipedia die Autorenschaft i.d.R. unbekannt ist und jede
        Nutzerin oder jeder Nutzer im Prinzip Artikel redaktionell und
        inhaltlich verändern kann, ist die Quelle wie fast alle existierenden
        Wikis oder Blogs ungeeignet. Grundsätzlich sollten für Definitionen eher
        allgemeine oder spezifische Lehrbücher zum Fachgebiet verwendet werden.
      </p>
      <h2 id='datenquellen'>Datenquellen</h2>
      <p>
        Bei Datenquellen handelt es sich um öffentlich zugängliche quantitative
        oder qualitative Informationen, wie z.B. beim Statistischen Bundesamt,
        der Bundesagentur für Arbeit bzw. anderen Behörden. Bei reinen
        Datenquellen gibt es lediglich eine Beschreibung der erhobenen Inhalte
        (Metadaten) und es fehlt jede Interpretation der Informationen. Diese
        amtliche Statistik kann eine sehr geeignete Grundlage für Analysen im
        Rahmen von schriftlichen Arbeiten sein. In einigen Fällen vermischt sich
        die Bereitstellung der Daten mit einer Beurteilung der Ergebnisse (z. B.
        im Armuts- und Reichtumsbericht der Bundesregierung). Dies ändert jedoch
        nichts an der Eignung dieser Daten als Grundlage für Analysen.
      </p>
      <h2 id='nicht-wissenschaftliche-quellen'>
        Nicht-wissenschaftliche Quellen
      </h2>
      <p>
        Alle Quellen, die nicht unter die o.g. Kategorien fallen, sind
        nicht-wissenschaftliche Quellen. Dazu gehören z. B. Zeitungsartikel,
        Aussagen von Politikern, Gewerkschaften, Arbeitgebervertretern bzw. der
        öffentlichen Verwaltung und oder die meisten Internetquellen ohne
        bekannten wissenschaftlichen Hintergrund.
      </p>
      <p>
        Nicht-wissenschaftliche Quellen eignen sich nicht, um Aussagen Ihrer
        schriftlichen Arbeit zu belegen. Sie können jedoch Ausgangspunkt einer
        wissenschaftlichen Fragestellung sein bzw. für die Darstellung aktueller
        Ereignisse und Diskussionen verwendet werden.
      </p>
      <h2 id='primar--vs-sekundarquellen'>Primär- vs. Sekundärquellen</h2>
      <p>
        Es sollte ausschließlich auf Originalquellen (Primärquellen)
        zurückgegriffen werden. Nur dann, wenn die Originalquelle überhaupt
        nicht zur Verfügung steht, sollte auf eine sekundäre Darstellung
        zurückgegriffen werden.
      </p>
      <p>
        Zeitungsartikel mit einer Zusammenfassung von Forschungsberichten o.ä.
        sind auf jeden Fall ungeeignet für die schriftliche Arbeit. Statista ist
        ein Dienstleister, der Daten zur Verfügung stellt und grafisch
        aufbereitet. Damit wird dies zu einer Sekundärquelle. Die Grafiken und
        Statistiken können sie in Ihrer Arbeit verwenden, als Quelle ist jedoch
        immer die Originalquelle des Datenerzeugers zu nennen (möglicherweise
        mit dem Zusatz „Darstellung nach Statista“). Dies gilt analog auch für
        andere Daten- und Informationsdienstleister.
      </p>
    </GuidelineContent>
  );
}
