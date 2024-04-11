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
            Der Praxistransferbericht (PTB) <br /> einfach erklärt
          </H1>
          <Lead className='text-center text-base max-w-screen-md'>
            Der Praxistransferbericht (PTB) ist eine spannende Gelegenheit für
            dich, die Theorie, die du im Studium gelernt hast, mit deinen
            praktischen Erfahrungen aus dem Berufsalltag oder deinem Praktikum
            zu verbinden. Kurz gesagt: Im PTB zeigst du, wie du akademisches
            Wissen in realen Arbeitssituationen anwendest und damit echte
            Herausforderungen meisterst.
          </Lead>
        </Container>

        <Container className='py-28'>
          <div className='grid grid-cols-3 gap-x-10'>
            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Scroll className='text-primary size-5'></Scroll>
              </div>
              <H3 className='mt-3'>Struktur</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Wie eine wissenschaftliche Arbeit – mit Einleitung, Hauptteil
                und Schluss, inklusive theoretischer Fundierung und Reflexion
                der Praxiserfahrung.
              </p>
            </div>

            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Scales className='text-primary size-5'></Scales>
              </div>
              <H3 className='mt-3'>Bewertung</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Neben der inhaltlichen Qualität werden auch der Bezug zur Praxis
                und die Einhaltung wissenschaftlicher Standards bewertet.
              </p>
            </div>

            <div>
              <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                <Ruler className='text-primary size-5'></Ruler>
              </div>
              <H3 className='mt-3'>Umfang</H3>
              <p className='text-muted-foreground mt-1 mb-3'>
                Der PTB hat in der Regel einen Umfang von ca.{' '}
                <strong>10 Seiten</strong> mit einer akzeptierten Abweichung der
                Seitenzahl von 10%
              </p>
            </div>
          </div>
        </Container>

        <Container className='flex flex-col space-y-5 items-center max-w-screen-lg '>
          <H2 className='text-left max-w-screen-md w-full'>
            Wieso ein Praxistransferbericht?
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <List>
              <li>
                <strong>Direkter Praxisbezug:</strong> Der PTB ermöglicht dir,
                deine theoretischen Kenntnisse direkt in der Praxis anzuwenden
                und zu reflektieren.
              </li>
              <li>
                <strong>Individuelle Schwerpunktsetzung:</strong> Du kannst ein
                Thema wählen, das dich besonders interessiert und das relevant
                für deine zukünftige Karriere ist.
              </li>
              <li>
                <strong>Kreativer Freiraum:</strong> Neben der
                wissenschaftlichen Fundierung hast du die Möglichkeit, eigene
                Ideen und Lösungsansätze zu entwickeln.
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
                <strong>Wähle ein Thema, das dich begeistert:</strong> Deine
                Motivation spiegelt sich in deiner Arbeit wider.
              </li>
              <li>
                <strong>Strukturiere frühzeitig:</strong> Eine klare Gliederung
                hilft dir, den Überblick zu behalten und systematisch zu
                arbeiten.
              </li>
              <li>
                <strong>Nutze deine Erfahrungen:</strong> Beziehe konkrete
                Praxisbeispiele ein, um Theorie und Praxis effektiv zu
                verknüpfen.
              </li>
              <li>
                <strong>Feedback einholen:</strong> Diskutiere deine Ideen mit
                Kommiliton<i>innen</i>, Betreuenden oder Kolleg<i>innen</i>, um
                neue Perspektiven zu gewinnen.
              </li>
              <li>
                <strong>Gib nicht auf:</strong> Jede Herausforderung ist eine
                Chance zu lernen. Bei Schwierigkeiten, nutze die Ressourcen der
                HWR oder suche Rat bei deinem Betreuer/deiner Betreuerin.
              </li>
            </List>
          </div>
          <br></br>
          <H2 className='text-left max-w-screen-md w-full'>
            Du bist nicht allein!
          </H2>
          <div className='text-left text-base max-w-screen-md'>
            <P>
              Jeder Schritt bei der Erstellung deines PTBs ist eine wertvolle
              Erfahrung auf deinem akademischen und beruflichen Weg. Vergiss
              nicht, dass es viele Ressourcen und Unterstützungsmöglichkeiten
              gibt. Nutze die Beratungsangebote der HWR, tausche dich mit deinen
              Kommiliton*innen aus und zögere nicht, bei Unklarheiten Hilfe zu
              suchen.
            </P>
            <P>
              Du hast das Zeug dazu, einen hervorragenden Praxistransferbericht
              zu schreiben. Mit Engagement, Neugier und der Bereitschaft, Neues
              zu lernen, wirst du diese Herausforderung meistern. Wir glauben an
              dich!
            </P>
          </div>

          <ResourceSection></ResourceSection>
        </Container>
      </section>
    </>
  );
};

export default Praxistransferbericht;
