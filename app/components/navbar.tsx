import { Sparkle } from '@phosphor-icons/react';
import { Link } from '@remix-run/react';

import { AiDialog } from './ai/dialog';
import { Container } from './container';
import { ThemeSwitcher } from './theme-switcher';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';

const Navbar = () => {
  return (
    <nav className='h-16 mt-5 md:mt-10'>
      <Container className='flex items-center justify-between h-16'>
        <div className='flex-1'>
          <Link to='/'>
            <img
              className='h-12 object-contain object-center select-none'
              src='/logo.svg'
              alt=''
            ></img>
          </Link>
        </div>
        <div className='flex flex-1 justify-center space-x-3'>
          <Button asChild variant={'link'} className='text-muted-foreground'>
            <Link to='/praxistransferbericht'>Praxistransferbericht</Link>
          </Button>
          <Button asChild variant={'link'} className='text-muted-foreground'>
            <Link to='/studienarbeit'>Studienarbeit</Link>
          </Button>
          <Button asChild variant={'link'} className='text-muted-foreground'>
            <Link to='/bachelorarbeit'>Bachelorarbeit</Link>
          </Button>
          <Button asChild variant={'link'} className='text-muted-foreground'>
            <Link to='/richtlinien'>Alle Richtlinien</Link>
          </Button>
        </div>
        <div className='flex flex-1 justify-end'>
          <DialogTrigger asChild>
            <Button variant={'outline'} className='rounded-r-none focus:z-10'>
              <Sparkle className='size-4 mr-2 text-primary animate-pulse' />
              AI
            </Button>
          </DialogTrigger>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <AiDialog></AiDialog>
      </Container>
    </nav>
  );
};

export { Navbar };
