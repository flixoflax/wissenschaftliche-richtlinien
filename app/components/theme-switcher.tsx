import { Moon, Sun } from '@phosphor-icons/react';
import { Theme, useTheme } from 'remix-themes';

import { Button } from './ui/button';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
      return;
    }
    setTheme(Theme.LIGHT);
  };

  return (
    <Button
      size={'icon'}
      onClick={toggleTheme}
      variant={'outline'}
      className='rounded-l-none border-l-0 focus-visible:border-l'
    >
      {theme === Theme.LIGHT ? (
        <Moon className='size-4'></Moon>
      ) : (
        <Sun className='size-4'></Sun>
      )}
    </Button>
  );
};

export { ThemeSwitcher };
