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

export default function ResourceSection({
  short,
  long,
}: {
  short: string;
  long: string;
}) {
  return (
    <div className='max-w-screen-md pt-20 mt-20 border-t border-border'>
      <div className='flex justify-between items-center mb-12'>
        <div>
          <H2 className='mb-1'>Resourcen</H2>
          <Lead className='text-base'>
            Lade dir hier Templates für deine wissenschaftliche Arbeit im LaTeX
            oder Word Format runter.
          </Lead>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card className='bg-muted'>
          <CardHeader>
            <CardTitle>LaTeX Template</CardTitle>
          </CardHeader>
          <CardContent className='h-32'>
            <p>
              Beginne mit deiner wissenschaftlichen Arbeit mit diesem
              LaTeX-Template.
            </p>
          </CardContent>
          <CardFooter className='flex justify-start'>
            {/* <Button variant='outline'>Vorschau</Button> */}
            <Button variant={'link'} className='pl-0'>
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-muted'>
          <CardHeader>
            <CardTitle>Word Template</CardTitle>
          </CardHeader>
          <CardContent className='h-32'>
            <p>
              Mit dieser Word-Vorlage kannst du deine Dokumente einfach und
              schnell formatieren.
            </p>
          </CardContent>
          <CardFooter className='flex justify-start'>
            {/* <Button variant='outline'>Vorschau</Button> */}
            <Button variant={'link'} className='pl-0'>
              Download
            </Button>
          </CardFooter>
        </Card>
        <Card className='bg-muted'>
          <CardHeader>
            <CardTitle>Alte {short}</CardTitle>
          </CardHeader>
          <CardContent className='h-32'>
            <p>Hier kannst du {long} von anderen Studenten lesen</p>
          </CardContent>
          <CardFooter className='flex justify-start'>
            <Button variant={'link'} className='pl-0'>
              Lesen
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
