import type { MetaFunction } from '@remix-run/node';
import { FAQ } from '~/components/faq';
import { HeroSection } from '~/components/hero';

export const meta: MetaFunction = () => {
  return [{ title: 'Verbindliche Richtlinien für Wissenschaftliche Arbeiten' }];
};

export default function Index() {
  return (
    <>
      <HeroSection />
      <FAQ></FAQ>
    </>
  );
}
