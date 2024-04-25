import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Literaturverzeichnis'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <h2 id='Kriterien'>Kriterien</h2>
      <p>
        Als Kriterien für die Erstellung des Literaturverzeichnisses sind
        herauszuheben:
      </p>
      <ul>
        <li>
          <strong>Richtigkeit</strong> (fehlerfreie Angaben)
        </li>
        <li>
          <strong>Vollständigkeit</strong>
          <br></br>Alle Angaben, die zum Wiederauffinden benötigt werden:
          <ul>
            <li>
              Fehlen Angaben über den Erscheinungsort, das Erscheinungsjahr oder
              den Jahrgang, wird dies durch die Angaben o.O., o.J. oder o.Jg.
              kenntlich gemacht.
            </li>
            <li>
              Fehlt die Verfasserin oder der Verfasser und handelt es sich nicht
              um eine herausgebende Institution wird die fehlende Angabe durch
              o.V. gekennzeichnet.
              <blockquote>
                <u>
                  <i>Fiktive Beispiele:</i>
                </u>
                <br></br>
                <br></br>
                <sup>2</sup> OECD (Hrsg.) (2012), S. 95f.
                <br></br>
                <sup>3</sup> o.V. (2014), S. 107.
                <br />
                <br />
                <u>
                  <i>Im Literaturverzeichnis entsprechend:</i>
                </u>
                <br />
                <br />
                OECD (Hrsg.) (2012): Employment Outlook, Organisation for
                Economic Cooperation and Development, Paris.
                <br></br>
                <br />
                o.V. (2014): Euro-Bonds als Rettungsanker, in: Zeitschrift für
                die gesamte Versicherungswissenschaft, Jg. 20, Nr. 5, S.99-115.
              </blockquote>
            </li>
          </ul>
        </li>
        <li>
          <strong>Einheitlichkeit</strong> (Beibehalten eines bestimmten
          Schemas)
        </li>
        <li>
          <strong>Übersichtlichkeit</strong>
          <br></br>
          <ul>
            <li>
              Nennung aller Autoren in alphabetischer Reihenfolge sowie
              chronologischer Auflistung der Arbeiten einer Autorin oder eines
              Autors nach Erscheinungsjahr der Publikation.
            </li>
            <li>
              Bei den notwendigen Angaben im Literaturverzeichnis (
              <Link
                to={
                  '#notwendige-angaben-bei-selbststandigen-buchern-und-schriften'
                }
              >
                Notwendige Angaben bei selbstständigen Büchern und Schriften
              </Link>{' '}
              bis{' '}
              <Link to='#notwendige-angaben-bei-dissertationen'>
                Notwendige Angaben bei Dissertationen
              </Link>
              ) ist hinter dem Vornamen der Verfasserin oder des Verfassers das{' '}
              <u>Jahr der verwendeten Auflage in Klammern</u> anzugeben (evtl.
              durch a, b, c, ... ergänzt, wenn eine Autorin oder ein Autor mit
              mehreren Veröffentlichungen pro Jahr aufgeführt wird) – das gilt
              ebenso für die Kurzzitierweise in den Fußnoten. <u>Grund:</u> Die
              Angabe der Jahreszahl hinter dem Verfassernamen stellt den
              Zusammenhang zur Kurzzitierweise im Text her.
            </li>
            <li>
              Es sind alle Quellen aufzuführen, die zitiert und verarbeitet
              worden sind.
            </li>
          </ul>
        </li>
      </ul>
      <h2 id='notwendige-angaben-bei-selbststandigen-buchern-und-schriften'>
        Notwendige Angaben bei selbstständigen Büchern und Schriften
      </h2>
      <ul>
        <li>
          Nachname, Vorname der Autorin oder des Autors bzw. der Autoren (ohne
          akademische Grade),
        </li>
        <li>
          bei Herausgebern und Institutionen zusätzlich der Hinweis: (Hrsg.)
          oder hrsg. von,
        </li>
        <li>vollständiger Titel des Buches,</li>
        <li>
          Erscheinungsort(e) (ab drei Orten sollte nur der erste genannt werden
          mit dem Zusatz u.a.),
        </li>
        <li>
          Nummer der Auflage und ggf. entsprechende Zusätze; z.B.: 3., völlig
          neu bearbeitete Auflage,{' '}
          <blockquote>
            <u>
              <i>Fiktives Beispiel: </i>
            </u>
            <br></br>
            <br></br>
            Schulze, Bernd (2012): IT-Sicherheitsmanagement, Frankfurt, 3.,
            völlig neu bearbeitete Auflage.
          </blockquote>
        </li>
      </ul>
      <strong>Hinweis zu Kommentaren: </strong>Kommentare werden in der Regel
      von mehreren Autoren geschrieben und tragen oft die Namen der
      ursprünglichen Verfasser, auch wenn diese verstorben sind. Dennoch sind
      sie keine Sammelwerke wie unter{' '}
      <Link to='/richtlinien/zitierweise/#zitate-aus-gesetzen-und-ahnlichen-vorschriften'>
        Zitate aus Gesetzen und ähnlichen Vorschriften
      </Link>
      . Für viele Kommentare finden Sie auf der Rückseite der Titelseite einen
      Zitiervorschlag für das Literaturverzeichnis und für Fußnoten.
      <blockquote>
        <u>
          <i>Fiktives Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Meier, Friedrich (Hrsg.) (2010): Das Einkommensteuergesetz, Leipzig, 5.,
        völlig neubearbeitete Auflage.
      </blockquote>
      <p>
        Bei Loseblattkommentaren ist nicht das Erscheinungsjahr, das u. U. 20
        Jahre zurück liegt, sondern der Stand anzugeben, d.h. das Datum der
        letzten eingeordneten Ergänzungslieferung. Werke auf CD wie Haufe Steuer
        Office sind keine Kommentare, sondern Nachschlagewerke; s.{' '}
        <Link to='#notwendige-angaben-bei-beitragen-in-sammel--nachschlagewerken'>
          Notwendige Angaben bei Beiträgen in Sammel- & Nachschlagewerken
        </Link>
        .
      </p>
      <h2 id='notwendige-angaben-bei-zeitschriftenartikeln-zeitungsbeitragen'>
        Notwendige Angaben bei Zeitschriftenartikeln/Zeitungsbeiträgen
      </h2>
      <ul>
        <li>
          Nachname, Vorname der Autorin oder des Autors / der Autoren (Jahr),
        </li>
        <li>vollständiger Titel des Aufsatzes,</li>
        <li>
          bei <i>Zeitschriften</i>: Name der Zeitschrift, Jahrgang, Nummer des
          Heftes und Jahr, Seitenangaben des Beitrages, oder:
          <br></br>
          bei <i>Zeitungen</i>: Name der Zeitung, Nummer und Datum,
          Seitenangaben.
          <blockquote>
            <u>
              <i>Fiktives Beispiel:</i>
            </u>
            <br></br>
            <br></br>
            Müller, Thomas (2014): Die Finanzierung kleiner und mittlerer
            Unternehmen, in: Die Zeitschrift für Betriebswirtschaft, Jg. 65, Nr.
            3, 2014, S. 22-35.
          </blockquote>
        </li>
      </ul>
      <h2 id='notwendige-angaben-bei-beitragen-in-sammel--nachschlagewerken'>
        Notwendige Angaben bei Beiträgen in Sammel- & Nachschlagewerken
      </h2>
      <ul>
        <li>Nachname, Vorname der Autorin oder des Autors bzw. der Autoren,</li>
        <li>vollständiger Titel des Beitrages,</li>
        <li>Name des Herausgebers mit Zusatz (Hrsg.),</li>
        <li>Titel des Sammelwerkes,</li>
        <li>
          Erscheinungsort(e) (ab 3 Orten sollte nur der 1. genannt werden mit
          dem Zusatz u.a.),
        </li>
        <li>
          Nummer der Auflage und ggf. entsprechende Zusätze; z.B.: 3., völlig
          neu bearbeitete Auflage,
        </li>
        <li>Seitenangabe des Beitrags.</li>
      </ul>
      <blockquote>
        <u>
          <i>Fiktives Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Maier, Christina / Müller, Paula (2009): Collateralized Debt und die
        Finanzkrise, in: Schulze, Alexander (Hrsg.): Ursachen der Finanzkrise,
        München, S. 55-77.
      </blockquote>
      <p>
        Werke auf CD wie Haufe Office sind kein Ersatz für die Arbeit mit
        Kommentaren und Fachzeitschriften; trotzdem können sie wertvolle Hilfe
        bei aktuellen Gesetzesänderungen liefern:
      </p>
      <blockquote>
        <u>
          <i>Fiktives Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Müller, Simone (2012): Kostenarten, in: Haufe Office, Lexikon.
      </blockquote>
      <h2 id='notwendige-angaben-bei-dissertationen'>
        Notwendige Angaben bei Dissertationen
      </h2>
      <p>
        Nach-, Vorname der Autorin oder des Autors, Titel der Dissertation,
        Zusatz: Diss., ggf. herausgebende Körperschaft, Erscheinungsort.
      </p>
      <blockquote>
        <u>
          <i>Fiktives Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Müller, Sabine (2011): Eine empirische Analyse des
        Kündigungsschutzgesetzes, Diss., Humboldt-Universität zu Berlin.
      </blockquote>
      <p>
        Das Zulassen von Diplom-/Bachelorarbeiten als wissenschaftliche Quellen
        liegt im Ermessen des Gutachters.
      </p>
      <h2 id='notwendige-angaben-bei-internetquellen'>
        Notwendige Angaben bei Internetquellen
      </h2>
      <p>
        Wichtiger Hinweis: Alle Quellen, die zwar im Internet bezogen werden,
        z.B. Diskussionspa- piere, Forschungsberichte, Zeitungsartikel (epaper),
        aber auch als normale Veröffentlichung vorliegen, sollen nach den
        Vorgaben für gedruckte Quellen und nicht als Internetquelle zitiert
        werden.
      </p>
      <ul>
        <li>Nachname, Vorname der Autorin/des Autors/der Autoren (Jahr),</li>
        <li>vollständiger Titel der Quelle,</li>
        <li>Name der Web-Seite,</li>
        <li>Vollständige URL (Web-Adresse),</li>
        <li>
          Datum des Abrufs bzw. des Stands der Webseite.
          <br></br>
          <blockquote>
            <u>
              <i>Beispiele:</i>
            </u>
            <br></br>
            <br></br>
            o.V. (2017): Mindestlohn neun Euro pro Stunde, Tagesschau,{' '}
            <a
              href='http://www.tages-
            schau.de/wirtschaft/tarifvertrag-systemgastro-101.html'
            >
              http://www.tages-
              schau.de/wirtschaft/tarifvertrag-systemgastro-101.html
            </a>
            . Abgerufen am 15.07.2017.
            <br></br>
            <br></br>
            <i>oder</i>
            <br></br>
            <br></br>
            Deutsche Bundesbank (Hrsg.) (2016): Tägliche Rendite der
            börsennotierten Bundeswertpapiere. Pressenotiz der Deutschen
            Bundesbank vom 4. Oktober 2016.{' '}
            <a
              href='https://www.bundesbank.de/Redaktion/DE/Downloads/Presse/Pressenotizen/2016/2016_10_04_rendite.pdf'
              className=' break-all'
            >
              https://www.bundesbank.de/Redaktion/DE/Downloads/Presse/Pressenotizen/2016/2016_10_04_rendite.pdf
            </a>
          </blockquote>
        </li>
      </ul>
      <h2 id='notwendige-angaben-bei-rechtsquellen'>
        Notwendige Angaben bei Rechtsquellen
      </h2>
      <p>
        <strong>Gesetze</strong> werden nicht im Literatur-, sondern im{' '}
        <strong>Abkürzungsverzeichnis</strong> angegeben.
      </p>
      <p>
        Ausgangspunkt für die Bildung einer Abkürzung ist grundsätzlich die
        Überschrift eines Gesetzes oder einer Rechts- und Verwaltungsvorschrift.
        Sofern eine Kurzbezeichnung in der Vorschrift oder dem Gesetz vorgesehen
        oder eine solche üblich ist, wird diese Kurzbezeichnung für die Bildung
        der Abkürzung verwendet. Im Abkürzungsverzeichnis ist neben der
        Abkürzung der vollständige Titel des Gesetzes oder der Rechts- und
        Verwaltungsvorschrift mit der Fassung und der Quelle anzugeben. In der
        Regel sollte dabei die aktuellste Fassung herangezogen werden.
      </p>
      <p>
        Die verwendeten Abkürzungen müssen ebenfalls im Abkürzungsverzeichnis
        enthalten sein (z.B. idF für <i>in der Fassung</i>).
      </p>
      <blockquote>
        <u>
          <i>Beispiele für Abkürzungen:</i>
        </u>
        <br></br>
        <br></br>
        BGB - Bürgerliches Gesetzbuch, idF v 2.1.2002, BGBl I 42, FNA 400-2
        <br></br>
        <br></br>
        KSchG – Kündigungsschutzgesetz, idF v 25.8.1969, BGBl I 1317, FNA 800-2
        <br></br>
        <br></br>
        BGB-InfoV - BGB-Informationspflichtenverordnung idF v 5.8.2002, BGBl II
        3002, FNA 400-1-4
      </blockquote>
      <p>
        <strong>Gerichtsentscheidungen</strong> sind in jedem Fall mit
        Quellenangaben anzugeben. Hierbei sind aufzuführen:
      </p>
      <ul>
        <li>Gericht,</li>
        <li>Urteil (bzw. Beschluss) vom,</li>
        <li>Datum,</li>
        <li>Aktenzeichen,</li>
        <li>Fundstelle.</li>
      </ul>
      <p>
        Bei Verwendung von Abkürzungen für die Gerichte sind diese Abkürzungen
        in das Abkürzungsverzeichnis aufzunehmen.
      </p>
      <p>
        Gerichtsentscheidungen, Verwaltungserlasse und Verwaltungsverfügungen
        sind im <strong>Literaturverzeichnis</strong> getrennt von den anderen
        Quellen aufzuführen. Wenn die Urteile nur eines einzi gen Gerichtes zu
        ordnen sind, so empfiehlt es sich, diese Ordnung chronologisch
        vorzunehmen. Bei verschiedenen Gerichten erfolgt die Angabe der Urteile
        alphabetisch nach dem Namen oder der Abkürzung der Gerichte und erst
        innerhalb dieser Klassierung chronologisch.
      </p>
      <blockquote>
        <u>
          <i>Beispiele für Gerichtsentscheidungen:</i>
        </u>
        <br></br>
        <br></br>
        BGH: Urteil vom 12.11.2002, XI ZR 47/ 01, DStR 2003, 85.
        <br></br>
        <br></br>
        BverfG (2. Kammer des Ersten Senats): Beschluss vom 1.1.2001, 1 BvR
        1806/01, NJW 2001, 2844.
        <br></br>
        <br></br>
        EuGH (Große Kammer): Urteil vom 1..2005, C-105/03, (Maria Pupino), NJW
        2005, 2839. LG Arnsberg: Urteil vom 14.11.2003, AZ 2 O 294/02, NJW 2004,
        232.
      </blockquote>
      <p>
        Verwaltungserlasse und –verfügungen sind keine Gesetze, haben aber eine
        rechtsähnliche Qualität in der Praxis. Daher werden sie nach den
        Urteilen angegeben.
      </p>
      <blockquote>
        <u>
          <i>Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Erlass des Bundesministers der Finanzen vom 23.6.2005, IV A 5 – S 7303a
        – 18/05, BStBl I, 81.
      </blockquote>
    </GuidelineContent>
  );
}
