import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Ehrenwörtliche Erklärung'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <blockquote>
        <p>
          Ich erkläre ehrenwörtlich:
          <br></br>
          <br></br>
          dass ich meine/n Hausarbeit / Praxistransferbericht / Studienarbeit /
          Bachelorarbeit ohne fremde Hilfe angefertigt habe, dass ich die
          Übernahme wörtlicher Zitate aus der Literatur sowie die Verwendung der
          Gedanken anderer Autoren an den entsprechenden Stellen innerhalb der
          Arbeit gekennzeichnet habe, dass ich meine/n Hausarbeit /
          Praxistransferbericht / Studienarbeit / Bachelorarbeit bei keiner
          anderen Prüfung vorgelegt habe.
        </p>
        <br></br>
        <span className='text-muted-foreground not-italic'>
          Bei Verwendung von Internet- / Intranetquellen:
        </span>
        <br />
        <p>
          Alle Quellen, die dem World Wide Web entnommen oder in einer sonstigen
          digitalen Form verwendet wurden, sind der Arbeit beigefügt.
          <br></br>
          <br></br>
          Ich bin mir bewusst, dass eine falsche Erklärung rechtliche Folgen
          haben wird.
        </p>
      </blockquote>
      <p>
        <strong>Diese Erklärung ist (original) zu unterschreiben.</strong>
      </p>
      <p>
        Die ehrenwörtliche Erklärung ist im Inhaltsverzeichnis samt Seitenangabe
        aufzuführen.
      </p>
    </GuidelineContent>
  );
}
