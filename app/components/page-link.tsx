import { ArrowLeft, ArrowRight, IconContext } from '@phosphor-icons/react';
import { Link } from '@remix-run/react';

import { H3 } from './typography/h3';

const PageLink = ({
  title,
  description,
  href,
  icon,
  arrowLeft,
}: {
  title: string;
  description: string;
  href: string;
  icon?: JSX.Element;
  arrowLeft?: boolean;
}) => {
  return (
    <Link to={href}>
      <div className='rounded-xl col-span-1 group border border-border hover:border-primary w-full p-4 h-full'>
        <div
          className={
            arrowLeft
              ? 'flex items-center transition-all duration-600 ease-in-out'
              : 'flex items-center justify-between transition-all duration-600 ease-in-out'
          }
        >
          {arrowLeft ? (
            <ArrowLeft className='ml-3 mr-6 opacity-0 transition-opacity duration-600 ease-in group-hover:opacity-100 size-7 text-primary flex-shrink-0'></ArrowLeft>
          ) : null}
          <div>
            {icon ? (
              <IconContext.Provider
                value={{ color: 'hsl(var(--primary))', size: '20px' }}
              >
                <div className='bg-primary/20 rounded-lg size-8 flex items-center justify-center'>
                  {icon}
                </div>
              </IconContext.Provider>
            ) : null}
            <H3 className='mt-3'>{title}</H3>
            <p className='text-muted-foreground mt-1 mb-3'>{description}</p>
          </div>
          {!arrowLeft ? (
            <ArrowRight className='ml-6 mr-3 opacity-0 transition-opacity duration-600 ease-in group-hover:opacity-100 size-7 text-primary flex-shrink-0'></ArrowRight>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export { PageLink };
