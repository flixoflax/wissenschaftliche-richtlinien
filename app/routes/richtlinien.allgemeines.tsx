import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Allgemeines'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <p>
        Die nachfolgenden Richtlinien haben den Zweck, eine formal einwandfreie
        und in den Wirtschaftswissenschaften übliche Darstellung schriftlicher
        Ausarbeitungen zu gewährleisten. Insbesondere soll gesichert werden,
        dass die verwendeten Quellen so beschrieben sind, dass sie vom Leser
        selbst gefunden oder beschafft werden können.
      </p>
      <p>
        Die Arbeiten sind in folgender Anzahl und folgendem <u>Umfang</u>{' '}
        abzugeben (s.a. <Link to='/#faq'>FAQs</Link>):
      </p>
      <ul>
        <li>
          <strong>Praxistransferbericht (PTB)</strong> – Bearbeitungszeit 6
          Wochen <br /> 2-fach (einer links gelocht und geheftet, einer in
          digitalisierter Form), 10 Textseiten
        </li>
        <li>
          <strong>Studienarbeit</strong> – Bearbeitungszeit 8 Wochen <br />{' '}
          2-fach (eine links gelocht und geheftet, eine in digitalisierter
          Form), 20 Textseiten
        </li>
        <li>
          <strong>Bachelorarbeit</strong> – Bearbeitungszeit 10 Wochen <br />{' '}
          4-fach (zwei Exemplare, jeweils gebunden und in digitalisierter Form),
          40-50 Textseiten
        </li>
      </ul>
      <p>
        Die <strong>digitalisierten Exemplare</strong> sind als Word- und
        pdf-Textdatei (kein Scan und kein Bild!) einzureichen. Die Datenträger
        sind mit dem Namen und der Fachrichtung zu beschriften und jeweils auf
        der letzten Innenseite der Arbeit zu befestigen.
      </p>
      <p>Bei Hausarbeiten gilt die Vorgabe des Prüfers.</p>
    </GuidelineContent>
  );
}
