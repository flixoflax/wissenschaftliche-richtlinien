import { Ruler, Scales, Scroll } from '@phosphor-icons/react';
import ResourceSection from '~/components/resource-section';
import { H2 } from '~/components/typography/h2';
import { H3 } from '~/components/typography/h3';
import { Lead } from '~/components/typography/lead';
import { List } from '~/components/typography/list';
import { P } from '~/components/typography/p';

import { Container } from '../components/container';
import { H1 } from '../components/typography/h1';

const Praxistransferbericht = () => {
  return (
    <>
      <section className='py-20 lg:py-40'>
        <Container className='flex flex-col space-y-5 items-center max-w-screen-lg '>
          <H1 className='text-center'>
            Die Studienarbeit (StA) <br /> einfach erklärt
          </H1>
          <Lead className='text-center text-base max-w-screen-md'>
            Eine Studienarbeit ist eine wissenschaftliche Arbeit, die während
            deines Studiums verfasst wird, um spezifische Fragestellungen in
            deinem Fachbereich detailliert zu untersuchen. Sie bietet dir die
            Möglichkeit, tief in ein Thema einzutauchen, kritische
            Analysefähigkeiten zu entwickeln und deine Forschungskompetenzen zu
            schärfen.
          </Lead>
        </Container>

        <Container className='py-32'>
          <div className='grid grid-cols-3 gap-x-10'>
            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Scroll className='text-primary size-5'></Scroll>
              </div>
              <H3 className='mt-3'>Struktur</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Analog zu anderen wissenschaftlichen Arbeiten gliedert sie sich
                in Einleitung, Hauptteil und Fazit, inklusive Literaturrecherche
                und -analyse.
              </p>
            </div>

            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Scales className='text-primary size-5'></Scales>
              </div>
              <H3 className='mt-3'>Bewertung</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Bewertet werden inhaltliche Tiefe, methodische Vorgehensweise,
                die Qualität der Argumentation und die formale Gestaltung.
              </p>
            </div>

            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Ruler className='text-primary size-5'></Ruler>
              </div>
              <H3 className='mt-3'>Umfang</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Die Studienarbeit hat in der Regel einen Umfang von ca.{' '}
                <strong>20 Seiten</strong> mit einer akzeptierten Abweichung der
                Seitenzahl von 10%
              </p>
            </div>
          </div>
        </Container>

        <Container className='flex flex-col space-y-5 items-center max-w-screen-lg '>
          <H2 className='text-left max-w-screen-md w-full'>
            Der Wert einer Studienarbeit
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <List>
              <li>
                <strong>Fachliche Vertiefung:</strong> Du erhältst die Chance,
                dich intensiv mit einem Thema auseinanderzusetzen, das dich
                besonders interessiert.
              </li>
              <li>
                <strong>Methodische Kompetenzen:</strong> Die Studienarbeit
                schult deine Fähigkeit, wissenschaftlich zu arbeiten, zu
                argumentieren und zu forschen.
              </li>
              <li>
                <strong>Vorbereitung auf die Zukunft:</strong> Sie dient als
                ausgezeichnete Vorbereitung auf spätere akademische
                Qualifikationsarbeiten oder berufliche Projekte.
              </li>
            </List>
          </div>
          <br></br>
          <H2 className='text-left max-w-screen-md w-full'>
            Tips für deinen Erfolg
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <List className=' list-decimal'>
              <li>
                <strong>Themenwahl:</strong> Wähle ein Thema, das nicht nur den
                Anforderungen deines Studiengangs entspricht, sondern auch deine
                persönlichen Interessen widerspiegelt.
              </li>
              <li>
                <strong>Früh starten:</strong> Beginne rechtzeitig mit der
                Planung und Recherche, um Stress zu vermeiden und genügend Zeit
                für die Ausarbeitung zu haben.
              </li>
              <li>
                <strong>Literaturrecherche:</strong> Nutze Bibliotheken und
                Datenbanken umfassend und systematisch. Eine breite
                Literaturbasis stärkt die Qualität deiner Arbeit.
              </li>
              <li>
                <strong>Klare Struktur:</strong> Eine logische Gliederung deiner
                Argumentation hilft dir und deinen Lesern, den roten Faden nicht
                zu verlieren.
              </li>
              <li>
                <strong>Feedback einholen:</strong> Lass Entwürfe von Betreuern,
                Lehrkräften oder Mitstudierenden gegenlesen. Konstruktives
                Feedback ist unbezahlbar.
              </li>
            </List>
          </div>
          <br></br>

          <H2 className='text-left max-w-screen-md w-full'>
            Unterstützung auf deinem Weg
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <P>
              Zweifel und Herausforderungen sind Teil des Lernprozesses. Nutze
              die Angebote deiner Hochschule, wie Schreibwerkstätten oder
              Beratungsdienste, und scheue dich nicht, Fragen zu stellen.
              Austausch mit Kommiliton*innen und Diskussionen können neue
              Perspektiven eröffnen und die eigene Argumentation schärfen.
            </P>
          </div>
          <br></br>
          <H2 className='text-left max-w-screen-md w-full'>Du kannst das!</H2>
          <div className='text-left text-base max-w-screen-md pb-20'>
            <P>
              Eine Studienarbeit zu schreiben, ist eine bereichernde
              Herausforderung, die dir wichtige Kompetenzen für dein weiteres
              Studium und deine berufliche Laufbahn vermittelt. Mit Neugier,
              Durchhaltevermögen und einer strukturierten Herangehensweise wirst
              du diese Aufgabe meistern und kannst stolz auf deine Leistung
              sein. Wir unterstützen dich auf deinem Weg zum Erfolg!
            </P>
          </div>

          <ResourceSection
            short='StAs'
            long='Studienarbeiten'
          ></ResourceSection>
        </Container>
      </section>
    </>
  );
};

export default Praxistransferbericht;
