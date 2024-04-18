import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Aspekte zur Vorgehensweise'
      breadcrumbs={{
        root: 'Inhalt, Struktur und Praxisbezug',
        rootHref: '/richtlinien/eckpfeiler-der-arbeit',
      }}
    >
      <h2 id='themenwahl'>Themenwahl</h2>
      <h3>Praxistransferbericht und Studienarbeit</h3>
      <p>
        Erfolgt gemäß § 6 PO für den Fachbereich Duales Studium in der gültigen
        Fassung sowie in Absprache mit dem Fachleiter.
      </p>
      <h3>Bachelorarbeit</h3>
      <p>
        Themen für die Bachelorarbeit werden von der zuständigen Fachleiterin
        oder dem zuständigen Fachleiter des Fachbereiches im Benehmen mit der
        Ausbildungsstätte vergeben: vgl. § 10 (2) PO für den Fachbereich Duales
        Studium in der gültigen Fassung. Die Studierenden bereiten einen
        Themenvorschlag in Absprache mit ihrem Ausbildungsbetrieb vor und
        stimmen ihn mit ihrem Betreuer (zugewiesener Erstgutachter) ab. Bei der
        Formulierung des Themenvorschlags ist darauf zu achten, dass das
        Vorhaben genügend konkret und aktuell und im{' '}
        <u>Umfang von 40-50 Seiten</u> abzuhandeln ist. Dabei geht es nicht um
        Standardthemen oder das Kompilieren von Lehrbüchern, sondern um die
        Aufarbeitung konkreter Probleme der Unternehmensrealität. Sinnvoll ist,
        sich bei der Themenwahl an den beruflichen Perspektiven zu orientieren.
      </p>
      <h2 id='grobstruktur'>Grobstruktur</h2>
      <p>
        Bei wissenschaftlichen Arbeiten hat es sich bewährt, zunächst einen
        groben Fahrplan zu entwerfen. Grenzen Sie das Themenspektrum konsequent
        ab und legen Sie die Schwerpunkte fest. Sie erhöhen Ihre Effizienz, wenn
        Sie Ihre Ideenliste so früh wie möglich mit der Gliederungsansicht Ihres
        Textsystems strukturieren (Überschrift 1, Überschrift 2, Textkörper).
      </p>
      <h2 id='materialsammlung'>Materialsammlung</h2>
      <p>
        Das <i>richtige</i> Material zu nutzen ist (neben der Stringenz der
        Gedankenführung) die eigentliche Kunst wissenschaftlichen Arbeitens. Die
        Quellen sollten so aktuell wie möglich und anspruchsvoll (keine
        Einführungswerke, keine trivialen Zeitschriften oder Journale) sein.
        Materialien sind insbesondere Fachbücher, Fachzeitschriften, eigene
        empirische Erhebungen und Internetquellen. Es empfiehlt sich von Beginn
        an, eine Quellendatei anzulegen und alle Materialien (insbesondere
        Kopien) durch manuelle Kennzeichen damit zu verknüpfen.
      </p>
      <h2 id='textentwurf'>Textentwurf</h2>
      <p>
        Komponieren Sie aus den Materialien und eigenen Ideen stringente
        Argumentationsketten und gliedern Sie diese durch Kapitel und Absätze.
        Machen Sie dabei dem Leser Ihre methodische Vorgehensweise transparent.
        Sie hat sich an bewährten wissenschaftlichen Methodiken zu orientieren.
      </p>
      <h2 id='endfassung'>Endfassung</h2>
      <p>
        Beim Feinschliff geht es darum, Redundantes und Unwesentliches zu
        entfernen, Fehlendes (hinsichtlich Logik und innovativer Ansätze) zu
        ergänzen und die Sprache zu glätten.
      </p>
    </GuidelineContent>
  );
}
