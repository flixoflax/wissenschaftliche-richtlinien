import { Link } from '@remix-run/react';
import { ReactNode } from 'react';

import { PageLink } from './page-link';
import { findNextItem, findPreviousItem } from './sidebar';
import { H2 } from './typography/h2';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

interface GuidelineContentProps {
  breadcrumbs?: {
    root: string;
    rootHref: string;
  };
  title: string;
}

const GuidelineContent = (
  props: GuidelineContentProps & { children: ReactNode }
) => {
  const nextItem = findNextItem(props.title);
  const previousItem = findPreviousItem(props.title);
  return (
    <>
      {props.breadcrumbs ? (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={props.breadcrumbs.rootHref}>
                  {props.breadcrumbs.root}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{props.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}
      <div className='max-w-prose'>
        <H2 className={props.breadcrumbs ? 'pt-6' : ''}>{props.title}</H2>
      </div>
      <div className='prose dark:prose-invert mt-4 prose-a:text-primary'>
        {props.children}
      </div>
      <div className='grid grid-cols-2 gap-3 mt-20 max-w-prose'>
        {previousItem ? (
          <PageLink
            arrowLeft
            title={'Zurück'}
            href={previousItem.href!}
            description={previousItem.title}
          ></PageLink>
        ) : (
          <div className='col-span-1' />
        )}
        {nextItem ? (
          <PageLink
            title={'Weiter'}
            href={nextItem.href!}
            description={nextItem.title}
          ></PageLink>
        ) : null}
      </div>
    </>
  );
};

export { GuidelineContent };
