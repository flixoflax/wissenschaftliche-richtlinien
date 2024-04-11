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
            Die Bachelorarbeit (BA) <br /> einfach erklärt
          </H1>
          <Lead className='text-center text-base max-w-screen-md'>
            Die Bachelorarbeit stellt den Höhepunkt deines Bachelorstudiums dar.
            Sie ist eine umfangreiche wissenschaftliche Arbeit, mit der du
            zeigst, dass du in der Lage bist, eigenständig ein Thema deines
            Fachbereichs methodisch und inhaltlich zu bearbeiten. Es ist deine
            Chance, tief in ein Thema einzutauchen, das dich fasziniert und
            gleichzeitig deine akademischen Fähigkeiten unter Beweis zu stellen.
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
                Sie folgt der klassischen Struktur wissenschaftlicher Arbeiten –
                mit einer klaren Einleitung, einem methodisch fundierten
                Hauptteil und einem aussagekräftigen Schluss.
              </p>
            </div>

            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Scales className='text-primary size-5'></Scales>
              </div>
              <H3 className='mt-3'>Bewertung</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Neben der inhaltlichen Qualität und Originalität zählen vor
                allem auch die methodische Vorgehensweise, die Strukturierung
                und die Einhaltung wissenschaftlicher Standards.
              </p>
            </div>

            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Ruler className='text-primary size-5'></Ruler>
              </div>
              <H3 className='mt-3'>Umfang</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Die Bachelorarbeit variiert in der Länge, sollte aber{' '}
                <strong>zwischen 40 und 50 Seiten</strong> umfassen
              </p>
            </div>
          </div>
        </Container>

        <Container className='flex flex-col space-y-5 items-center max-w-screen-lg '>
          <H2 className='text-left max-w-screen-md w-full'>
            Der Mehrwert deiner Bachelorarbeit
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <List>
              <li>
                <strong>Spezialisierung:</strong> Du hast die Möglichkeit, dich
                auf ein Thema zu spezialisieren, das für deine zukünftige
                Karriere von Bedeutung sein könnte.
              </li>
              <li>
                <strong>Forschungskompetenz:</strong> Du entwickelst wichtige
                Fähigkeiten in der eigenständigen Forschung und Analyse.
              </li>
              <li>
                <strong>Akademische Anerkennung:</strong> Eine erfolgreiche
                Bachelorarbeit ist dein Sprungbrett in weiterführende Studien
                oder den Berufseinstieg und zeigt potenziellen Arbeitgebern
                deine Expertise und Arbeitsweise.
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
                <strong>Themenwahl:</strong> Wähle ein Thema, das dich
                persönlich begeistert und zugleich wissenschaftlich relevant
                ist.
              </li>
              <li>
                <strong>Zeitmanagement:</strong> Erstelle einen realistischen
                Zeitplan für dein Projekt und halte dich daran, um Zeitdruck zu
                vermeiden.
              </li>
              <li>
                <strong>Bertreuung:</strong> Such dir einen Betreuer<i>in</i>,
                der/<i>die</i> fachlich zu deinem Thema passt und von dem/
                <i>der</i> du konstruktives Feedback erwarten kannst.
              </li>
              <li>
                <strong>Regelmäßiges Schreiben:</strong> Gewöhne dir an,
                regelmäßig an deiner Arbeit zu schreiben, auch wenn es manchmal
                nur kleine Abschnitte sind.
              </li>
              <li>
                <strong>Netzwerk aufbauen:</strong> Tausche dich mit anderen
                Studierenden aus, die ebenfalls an ihrer Abschlussarbeit
                schreiben. Gemeinsam könnt ihr euch motivieren und unterstützen.
              </li>
            </List>
          </div>
          <br></br>

          <H2 className='text-left max-w-screen-md w-full'>
            Du bist nicht allein auf diesem Weg
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <P>
              Die Bachelorarbeit kann eine herausfordernde Zeit sein, aber
              erinnere dich daran, dass du diese Herausforderung nicht allein
              bewältigen musst. Nutze die Angebote deiner Hochschule, sei es die
              Bibliothek, Schreibberatungen oder Workshops zum
              wissenschaftlichen Arbeiten. Deine Betreuer<i>innen</i> und
              Kommiliton<i>innen</i> sind wertvolle Ressourcen auf diesem Weg.
            </P>
          </div>
          <br></br>
          <H2 className='text-left max-w-screen-md w-full'>
            Mach dich bereit, zu glänzen!
          </H2>
          <div className='text-left text-base max-w-screen-md pb-20'>
            <P>
              Deine Bachelorarbeit ist mehr als nur eine Pflichtübung – sie ist
              eine Gelegenheit, zu zeigen, was in dir steckt. Mit Engagement,
              Leidenschaft und einer strukturierten Vorgehensweise wirst du
              dieses wichtige Projekt erfolgreich meistern und kannst stolz auf
              das Ergebnis sein. Wir freuen uns darauf, deinen Weg zum Erfolg zu
              begleiten!
            </P>
          </div>

          <ResourceSection
            short='BAs'
            long='Bachelorarbeiten'
          ></ResourceSection>
        </Container>
      </section>
    </>
  );
};

export default Praxistransferbericht;
