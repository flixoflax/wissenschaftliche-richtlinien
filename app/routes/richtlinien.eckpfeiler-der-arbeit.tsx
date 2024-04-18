import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Eckpfeiler der Arbeit'
      breadcrumbs={{
        root: 'Inhalt, Struktur und Praxisbezug',
        rootHref: '/richtlinien/eckpfeiler-der-arbeit',
      }}
    >
      <p>
        Für die <strong>Einleitung</strong> sollten Sie je nach Umfang der
        Arbeit 1-2 Seiten vorsehen. Sie dient der Hinführung zum und zur
        Einstimmung auf das Thema. Neben der{' '}
        <strong>Hinleitung / Problemstellung</strong> sollte sie auch eine kurze
        und präzise Formulierung der entsprechenden <strong>Zielsetzung</strong>{' '}
        der Arbeit beinhalten, dazu über{' '}
        <strong>Aufbau und Vorgehensweise</strong> unterrichten:
      </p>
      <p>
        Als <strong>Hinleitung</strong> bzw. Motivation (Erörterung der Frage:
        ‚Warum schreiben Sie über dieses Thema?‘) empfiehlt sich ein aktueller
        Bezug zur Thematik und ggfs. der themenspezifischen betrieblichen
        Situation. Erklärungen sind, soweit überhaupt nötig, auf die tragenden
        Begriffe des Titels und ggfs. Untertitels zu beschränken.
      </p>
      <p>
        Die, sich aus der Hinleitung fast zwangsläufig ergebende{' '}
        <strong>Zielformulierung</strong> der Arbeit sollte in einem deutlichen
        Zusammenhang mit dem Titel stehen bzw. diesen widerspiegeln. Soweit
        nötig, kann die dem Titel zugrunde liegende Aufgabenstellung an dieser
        Stelle eingegrenzt werden. Die Zielformulierung kann im Übrigen auch als
        Frage formuliert werden, die dann im Rahmen der Arbeit zu beantworten
        ist. Alternativ könnte auch eine These formuliert werden, die es im Zuge
        der Untersuchung zu bestätigen oder abzulehnen gilt.
      </p>
      <p>
        Als Überleitung zum <strong>Hauptteil</strong> der Arbeit sollte die
        Einleitung mit einer kurzen Beschreibung der <i>Herangehensweise</i>{' '}
        schließen. Dies umfasst die zur Problemlösung gewählte Methodik und –
        nur im Fall der Bachelorarbeit - die eng damit verbundene
        Grobgliederung. Der Hauptteil sollte anspruchsvolle eigene und fremde
        Erkenntnisse zum Thema und nicht bloßes Lehrbuchwissen umfassen. Hierbei
        auftretende weitere Begriffe sind dann mit ihren Definitionen in den
        inhaltlichen Textfluss einzubetten.
      </p>
      <p>
        Ihre Informationen wenden sich an Leser mit betriebswirtschaftlichen
        Kenntnissen, so dass die Standardbegriffe der wissenschaftlichen
        Literatur nicht erklärt werden müssen. Beispiele aus der Praxis sollten
        als Beleg in die Darbietung der Theorie <i>eingewoben</i> werden. Die
        Methodik und der eigene wissenschaftliche Beitrag sollten klar
        herausgestellt werden. Der Hauptteil schließt mit einer kritischen
        Auseinandersetzung mit den Ergebnissen der Arbeit. Die{' '}
        <strong>Schlussbetrachtung</strong>, die ebenfalls einen Umfang von{' '}
        <strong>1-2 Seiten</strong> erreichen sollte, stellt ein echtes Fazit{' '}
        <i>(Essenz)</i> der Arbeit dar.
      </p>
      <p>
        Hier sollten keine neuen Aspekte aufgegriffen werden, die im Hauptteil
        nicht behandelt wurden. Vielmehr rundet eine kritische Würdigung Ihrer
        Ergebnisse (Zielerreichung) in Bezug auf ihre Bedeutung für Theorie und
        Praxis und ein sich aus den Ausführungen ergebender Ausblick auf
        angrenzende, noch offene Probleme oder weiterführende Aktivitäten die
        Arbeit ab. Falls in der Einleitung eine Frage aufgeworfen wurde, ist
        diese hier kurz und knapp zu beantworten.
      </p>
    </GuidelineContent>
  );
}
