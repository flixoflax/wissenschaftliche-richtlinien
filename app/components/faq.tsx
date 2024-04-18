import { Container } from './container';
import { H2 } from './typography/h2';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { DialogTrigger } from './ui/dialog';

export function FAQ() {
  return (
    <section id='faq'>
      <Container className='max-w-screen-md pb-36 space-y-4'>
        <H2>FAQ</H2>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              Was ist, wenn der Name der Autorin oder des Autors oder der Titel
              bei einer Internet- / Intra rnetquelle nicht erkennbar ist?
            </AccordionTrigger>
            <AccordionContent>
              In diesen Fällen ist als Herausgeber der Name des Trägers der
              Web-Site (die jeweilige Institution/Unternehmung o.ä.) anzugeben,
              wenn dieser für den Inhalt der Aussagen verantwortlich ist. Bei
              Artikeln in Online-Zeitschriften ist der Name des Verfassers oder
              o.V. anzugeben. Üblicherweise haben Dokumente im Internet einen
              Titel, der in der Quellenangabe verwendet werden kann. Ist dies
              nicht der Fall, so sollte als Titel eine kurze Charakterisierung
              der Quelle (z.B.: „Funktionsbeschreibung der angebotenen
              Software-Produkte“) angegeben werden.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Wie können Stellen in Internetquellen exakt benannt werden, falls
              Seitenzahlen fehlen?
            </AccordionTrigger>
            <AccordionContent>
              Die Dokumente im Internet ähneln von ihrem inneren Aufbau her
              einer Schriftrolle. Aus diesem Grund können einzelne Bereiche
              deutlich länger als gedruckte Seiten sein, ohne dass sie direkt
              durch den Internet-Browser ansteuerbar sind. In solchen Fällen
              bereitet eine genaue Kennzeichnung der Fundstelle Schwierigkeiten.
              Wenn der Text in inhaltliche Abschnitte eingeteilt ist, ist die
              Genauigkeit der Angabe durch die Nennung des inhaltlichen
              Abschnittes, in dem sich das Zitat befindet, zu erhöhen. Die
              einzelnen inhaltlichen Abschnitte sind häufig vom
              Inhaltsverzeichnis aus über Hyperlinks erreichbar. Die allgemeine
              Form der Quellenangabe im Text lautet demnach: Name, Vorname der
              Verfasserin oder des Verfassers (Jahr), möglichst genaue Angabe
              der Fundstelle.
              <br></br>
              <blockquote>
                Beispiel: Vgl. Müller, Paul (2002), These 9.
              </blockquote>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Wie viele Internet-Quellen können zitiert werden? Wann sind es zu
              viele?
            </AccordionTrigger>
            <AccordionContent>
              Das Internet wird in immer stärkerem Maße für die Publikation
              wissenschaftlicher Beiträge genutzt. Grundsätzlich steht es jedem
              frei, seine Gedanken und Ansichten über dieses Medium zu
              verbreiten. Auf der anderen Seite erfreuen sich Internetquellen
              steigender Beliebtheit seitens der Studierenden, da sie schnell
              und meist frei zugänglich sind. So begrüßenswert diese Möglichkeit
              ist, sollte doch für die Verwendung innerhalb einer
              wissenschaftlichen Arbeit die Qualitätsprüfung noch stärker
              erfolgen. Kriterien der Qualität sind insbesondere eine
              sachlogisch nachvollziehbare Argumentation und formallogische
              Stringenz. Verweisen Sie nur dann auf Internetquellen, wenn sich
              diese aus Gründen der Aktualität, Originalität o.ä. anbieten. Eine
              Internet-Recherche ersetzt keinesfalls das Literaturstudium!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Wie zitiere ich mündliche Quellen?
            </AccordionTrigger>
            <AccordionContent>
              Werden mündliche Quellen zitiert, so ist ein Protokoll (z.B. von
              einem Gespräch) anzufertigen; alle Protokolle sind im digitalen
              Anhang auf dem Datenträger einzureichen. Ob hier ein Inhalts oder
              ein Wortprotokoll angefertigt werden muss, sollte mit der
              Betreuungsperson frühzeitig geklärt werden. Das Protokoll sollte
              zusätzlich auf jeden Fall den Namen und/oder die Position der
              Interviewpartnerin oder des Interviewpartners, den Namen des
              Unternehmens bzw. der Institution, das Interviewdatum und die Art
              des Interviews (telefonisch oder persönlich) enthalten. Bei
              vertraulichen Interviews sollten nur solche Angaben gemacht
              werden, die eine Identifikation der Interviewten oder des
              Interviewten nicht ermöglichen. Werden die Interviews im Textteil
              zitiert, so ist auch dieses Zitat mit einer Fußnote und der
              Fundstelle (Anhang oder Datenträger) zu kennzeichnen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-5'>
            <AccordionTrigger>
              Muss ich die Verwendung einer Literaturquelle, die auf einer
              CD-ROM gespeichert ist <br></br>(z.B. Fachlexika) gesondert
              angeben?
            </AccordionTrigger>
            <AccordionContent>
              Diese Quellen werden lediglich im Literaturverzeichnis mit dem
              Hinweis CD-ROM versehen, da sich eventuell die Seitenzahlen zu
              einem gedruckten Exemplar unterscheiden. In den Fußnoten ist die
              Angabe der Quelle wie bei einer gedruckten Literaturquelle zu
              handhaben.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Wie werden Sperrvermerke ausgewiesen?
            </AccordionTrigger>
            <AccordionContent>
              Sollte ein Sperrvermerk erforderlich sein, wird dieser dem
              Deckblatt der Arbeit vorgeschaltet. Die Seite mit dem Sperrvermerk
              wird nicht in die Nummerierung einbezogen. Ein Sperrvermerk-Muster
              befindet sich auch auf dieser Seite. Es werden nur die Kapitel
              gesperrt, die vertrauliche Daten enthalten. Diese Kapitel sind im
              Sperrvermerk zu bezeichnen. Eine elektronische Version der
              ungesperrten Teile des Praxistransferberichts/der
              Studienarbeit/der Bachelorarbeit (als Word- und pdf-Textdatei -
              kein Scan und kein Bild!) ist ebenfalls auf den Datenträgern
              einzureichen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-7'>
            <AccordionTrigger>
              Wie alt dürfen die Literaturquellen sein?
            </AccordionTrigger>
            <AccordionContent>
              Prinzipiell sollen Sie in Ihrer Arbeit über ein aktuelles Thema
              schreiben. Aus diesem Grund sollten die Literaturquellen im
              Schnitt nicht älter als 5 Jahre sein. Allerdings gibt es gewisse
              Standardwerke, die natürlich auch älteren Ursprungs sein dürfen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-8'>
            <AccordionTrigger>
              Darf ich die Regeln der alten Rechtschreibung verwenden?
            </AccordionTrigger>
            <AccordionContent>
              Die schriftlichen Arbeiten am Fachbereich Duales Studium der
              Hochschule für Wirtschaft und Recht Berlin sind grundsätzlich nach
              den Regeln der neuen deutschen Rechtschreibung anzufertigen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-9'>
            <AccordionTrigger>
              Darf vom vorgesehenen Umfang des Praxistransferberichts / der
              Studienarbeit abgewichen werden?
            </AccordionTrigger>
            <AccordionContent>
              Der Umfang der Arbeiten sollte 10 bzw. 20 Seiten betragen. Eine
              Unter- bzw. Überschreitung bis maximal 10 % ist akzeptabel. Bei
              größeren Abweichungen ist mit Abstrichen in der Bewertung zu
              rechnen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-10'>
            <AccordionTrigger>
              Werden Abbildungen mit in den Gesamtumfang der Arbeit gezählt?
            </AccordionTrigger>
            <AccordionContent>
              Abbildungen, die Sie zur Veranschaulichung in den Text einfügen,
              ermöglichen keine Erhöhung der Seitenzahl. D.h., dass Abbildungen
              genauso wie der Fließtext zählen und der Gesamtumfang von
              beispielsweise 10 Seiten dadurch nicht verändert wird. Sie sollten
              also abwägen, welche Abbildungen für das Verständnis erforderlich
              und hilfreich sind und welche Abbildungen weggelassen werden
              können.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-11'>
            <AccordionTrigger>
              Ist die erste Seite ebenfalls römisch zu nummerieren?
            </AccordionTrigger>
            <AccordionContent>
              Das Deckblatt wird in die römische Seiten-Nummerierung einbezogen,
              die Seitenzahl erscheint aber nicht auf dem gedruckten Exemplar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-12'>
            <AccordionTrigger>
              Kann ich ein Glossar einfügen und welche Formvorgaben gibt es
              hierzu?
            </AccordionTrigger>
            <AccordionContent>
              Ein Glossar kann nach dem Textteil, vor dem Literaturverzeichnis
              eingefügt werden. Das Glossar ist in Inhaltsverzeichnis und
              Seitennummerierung, jedoch nicht in die Gliederungsstruktur
              aufzunehmen. Die Quellen sind auch hier mit Fußnoten kenntlich zu
              machen und im Literaturverzeichnis aufzuführen. Bitte prüfen Sie
              jedoch, ob ein Glossar erforderlich ist. Denken Sie daran, die
              wichtigsten Begriffe im Text zu definieren und die
              Erläuterungsfunktion der Fußnoten zu verwenden.
            </AccordionContent>
          </AccordionItem>

          <DialogTrigger asChild>
            <AccordionItem value='open-questions'>
              <AccordionTrigger>
                Deine Frage ist hier nicht aufgelistet? Stelle deine Fragen dem
                HWR AI Assistenten!
              </AccordionTrigger>
            </AccordionItem>
          </DialogTrigger>
        </Accordion>
      </Container>
    </section>
  );
}
