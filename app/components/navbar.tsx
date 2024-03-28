import { Sparkle } from '@phosphor-icons/react';

import { Container } from './container';
import { ThemeSwitcher } from './theme-switcher';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className='h-16 pt-10'>
      <Container className='flex items-center justify-between h-16'>
        <div className='flex-1'>
          <img
            className='h-12 object-contain object-center select-none'
            src='/logo.svg'
            alt=''
          ></img>
        </div>
        <div className='flex flex-1 justify-center'></div>
        <div className='flex flex-1 justify-end'>
          <Button variant={'outline'} className='rounded-r-none focus:z-10'>
            <Sparkle className='size-4 mr-2' />
            AI
          </Button>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </Container>
    </nav>
  );
};

export { Navbar };
