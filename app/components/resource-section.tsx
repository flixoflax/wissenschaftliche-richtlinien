/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DNqmPy85b4S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { H2 } from './typography/h2';
import { Lead } from './typography/lead';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function ResourceSection() {
  return (
    <div className='max-w-screen-md pt-20'>
      <div className='flex justify-between items-center mb-12'>
        <div>
          <H2 className='mb-1'>Resourcen</H2>
          <Lead className='text-base'>
            Lade dir hier Templates für deine wissenschaftliche Arbeit im LaTeX
            oder Word Format runter.
          </Lead>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        <Card className='bg-muted'>
          <CardHeader>
            <CardTitle>LaTeX Template</CardTitle>
          </CardHeader>
          <CardContent className='h-28'>
            <p>
              Beginne mit deiner wissenschaftlichen Arbeit mit diesem
              LaTeX-Template.
            </p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Vorschau</Button>
            <Button>Download</Button>
          </CardFooter>
        </Card>
        <Card className='bg-muted'>
          <CardHeader>
            <CardTitle>Word Template</CardTitle>
          </CardHeader>
          <CardContent className='h-28'>
            <p>
              Mit dieser Word-Vorlage kannst du deine Dokumente einfach und
              schnell formatieren.
            </p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Vorschau</Button>
            <Button>Download</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
