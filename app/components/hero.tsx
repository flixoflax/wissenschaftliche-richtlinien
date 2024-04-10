import {
  Exam,
  GraduationCap,
  Info,
  ListMagnifyingGlass,
} from '@phosphor-icons/react';

import { Container } from './container';
import { PageLink } from './page-link';
import { H1 } from './typography/h1';
import { Lead } from './typography/lead';

const HeroSection = () => {
  return (
    <section className='py-20 lg:py-40'>
      <Container className='flex flex-col space-y-5 items-center max-w-screen-lg '>
        <H1 className='text-center'>
          Verbindliche Richtlinien zur Erstellung Wissenschaftlicher Arbeiten
        </H1>
        <Lead className='text-center text-base max-w-screen-md'>
          Ob Hausarbeit, Praxistransferbericht (PTB), Studienarbeit oder
          Bachelorarbeit – Diese Richtlinien sind der Grundstein für dein
          Schreibprojekt. Hier findest du alles, was du brauchst, um deine
          Arbeit von der Struktur bis zur Quellenarbeit perfekt zu gestalten.
        </Lead>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-20 gap-5'>
          <PageLink
            href='/richtlinien'
            title='Praxistransferbericht'
            description='Praxis und Theorie verschmelzen'
            icon={<Exam></Exam>}
          ></PageLink>

          <PageLink
            href='/richtlinien'
            title='Studienarbeit'
            description='Erste Schritte in der Forschung'
            icon={<ListMagnifyingGlass></ListMagnifyingGlass>}
          ></PageLink>

          <PageLink
            href='/richtlinien'
            title='Bachelorarbeit'
            description='Die Königsdisziplin deines Bachelors'
            icon={<GraduationCap></GraduationCap>}
          ></PageLink>

          <PageLink
            href='/richtlinien'
            title='Alle Richtlininen'
            description='Alle Richtlinien auf einen Blick'
            icon={<Info></Info>}
          ></PageLink>
        </div>
      </Container>
    </section>
  );
};

export { HeroSection };
