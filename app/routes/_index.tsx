import type { MetaFunction } from '@remix-run/node';
import { Navbar } from '~/components/navbar';

export const meta: MetaFunction = () => {
  return [{ title: 'Verbindliche Richtlinien für Wissenschaftliche Arbeiten' }];
};

export default function Index() {
  return <Navbar />;
}
