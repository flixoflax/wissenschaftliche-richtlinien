import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Gliederung und Kennzeichnung einzelner Inhaltsteile'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <h2 id='gliederungssystem'>Gliederungssystem</h2>
      <p>
        Für die Unterteilung der Arbeit (Haupttext) wird die Gliederung mit
        Dezimalzahlen verwendet:
      </p>
      <strong>Dezimalgliederung</strong>
      <ul className='list-none'>
        <li>
          1 Kapitel
          <ul className='list-none'>
            <li>
              1.1 Unterkapitel
              <ul className='list-none'>
                <li>
                  1.1.1 Abschnitt
                  <ul className='list-none'>
                    <li>1.1.1.1 Unterabschnitt</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Die Gliederung sollte maximal vierstufig erfolgen. Der Punkt hinter der
        letzten Abschnittsnummer entfällt (z.B. 2.1.2).
      </p>
      <p>
        Die in{' '}
        <Link to='/richtlinien/aeussere-gestaltung-der-arbeiten/#reihenfolge-der-rahmenteile-einer-arbeit'>
          Reihenfolge der Rahmenteile einer Arbeit
        </Link>{' '}
        genannten Verzeichnisse sowie der Anhang erhalten keine
        Gliederungsnummern.
      </p>
      <h2 id='hinweise-zur-gliederung'>Hinweise zur Gliederung</h2>
      <p>
        Die Gliederungsunterpunkte im Inhaltsverzeichnis werden zur besseren
        Übersichtlichkeit jeweils eingerückt. Dies gilt jedoch <u>nicht</u> für
        den Textteil, der inklusive Überschriften linksbündig (bzw. im
        Blocksatz) geschrieben wird.
      </p>
      <p>
        Wird ein Gliederungspunkt untergliedert, so muss er aus mindestens zwei
        Unterpunkten bestehen. Dabei soll vermieden werden, dass die einzelnen
        Unterpunkte eine wortgetreue Wiederholung des übergeordneten
        Gliederungspunktes darstellen.
      </p>
      <u>Beispiel:</u>
      <ol className='list-none'>
        <li>3 Begriff und Wesen ...</li>
        <ol className='list-none'>
          <li>3.1 Begriff …</li>
          <li>3.2 Wesen ...</li>
        </ol>
      </ol>
      <p>
        Ein häufiger Gliederungsfehler besteht auch darin, dass zwischen der
        Überschrift der jeweiligen Gliederungsebene und dem ersten Unterpunkt
        ein <u>übermäßig langer Vorspann</u> eingeschoben wird, ohne diesen in
        die Untergliederung einzubeziehen. Sinnvoll kann es sein, die Kausalität
        der Vorgehensweise sowie die Auswahl in einem <u>kurzen</u> Vorspann zu
        begründen.
      </p>
      <p>
        Alle Positionen des <u>Inhaltsverzeichnisses</u> sind mit den
        entsprechenden Seitenangaben zu versehen. Die aufgeführten Positionen
        sind im Text im vollen Wortlaut zu wiederholen.
      </p>
      <p>
        Die <u>Überschrift</u> jedes Abschnittes soll dessen Inhalt in knapper,
        aber genauer Form wiedergeben. Hinter Überschriften steht kein Punkt.
      </p>
      <p>
        Die Untergliederung darf nicht überspitzt werden. Ein Gliederungselement
        sollte <u>mindestens die Länge einer Seite umfassen</u>{' '}
        (Praxistransferbericht: mindestens eine halbe Seite).
      </p>
      <h2 id='gedankenfuhrung'>Gedankenführung</h2>
      <p>
        Gliederung und Gedankenführung hängen eng zusammen. Der{' '}
        <u>
          <i>rote Faden</i>
        </u>{' '}
        muss von Kapitel zu Kapitel, von Abschnitt zu Abschnitt, klar
        ersichtlich bleiben. <u>Wiederholungen im Text</u> werden als Mangel an
        ausreichend straffer Gedankenführung interpretiert.
      </p>
      <p>
        <u>Absätze</u> werden gebildet, um die Gedankenführung auch optisch zu
        unterstreichen. Es ist aber nicht nach jedem Satz ein Absatz zu bilden.
      </p>
    </GuidelineContent>
  );
}
