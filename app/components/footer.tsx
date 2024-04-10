import { Link } from '@remix-run/react';

import { Container } from './container';
import { Muted } from './typography/muted';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container className='flex justify-between md:items-center py-8 md:flex-row flex-col'>
        <Muted>
          &copy; {currentYear} Hochschule für Wirtschaft und Recht Berlin
        </Muted>
        <Button
          variant={'link'}
          asChild
          className='text-muted-foreground justify-start px-0 md:px-4'
        >
          <Link to={'/editors-notice'}>
            <Muted>Editors Notice</Muted>
          </Link>
        </Button>
      </Container>
    </footer>
  );
};

export { Footer };
