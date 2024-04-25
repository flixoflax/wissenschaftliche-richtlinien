import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Gestaltung mathematischer und statistischer Teile der Arbeit'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <p>
        Geben Sie für alle Berechnungen, die Sie selbst durchgeführt haben,
        sämtliche Formeln an und erklären Sie diese. Bei Verwendung einer
        Software ist diese zu nennen, auf eine Beschreibung der Funktionsweise
        kann verzichtet werden. Bei mehreren Formeln sollen diese durchgehend
        nummeriert werden, ggf. unter Angabe des jeweiligen
        Gliederungsabschnitts.
      </p>
      <blockquote>
        <u>
          <i>Beispiel:</i>
        </u>
        <br></br>
        <br></br>
        Formel (1) zeigt die klassische Quantitätsgleichung:
        <br></br>
        <br></br>
        <div className='flex justify-between items-center'>
          <div className='text-center w-full'>
            <span>M &bull; V = P &bull; Y</span>
          </div>
          <div className='flex-shrink'>(1)</div>
        </div>
        <br></br>
        mit M=nominaler Geldmenge, V=Umlaufgeschwindigkeit des Geldes,
        P=Preisniveau und Y = reales Bruttoinlandsprodukt.
      </blockquote>
      <p>
        Erklären Sie die in den Formeln auftretenden Symbole im unmittelbaren
        Zusammenhang damit, nicht nur im Abkürzungsverzeichnis. Umfangreichere
        Berechnungen sind im Anhang zu dokumentieren. Interpretieren Sie
        unbedingt die Ergebnisse von Berechnungen und erläutern Sie ggf. die
        Aussage wichtiger damit im Zusammenhang stehender statistischer
        Maßzahlen - z.B. des Bestimmtheitsmaßes - möglichst exakt und
        themenbezogen.
      </p>
    </GuidelineContent>
  );
}
