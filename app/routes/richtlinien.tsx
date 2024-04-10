import { Outlet } from '@remix-run/react';
import { Container } from '~/components/container';
import { Footer } from '~/components/footer';
import { Navbar } from '~/components/navbar';
import { Sidebar } from '~/components/sidebar';

export default function Layout() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <div className='flex-1'>
        <Container className='py-20 grid grid-cols-12 gap-36 overflow-hidden'>
          <div className='col-span-3 w-full'>
            <Sidebar></Sidebar>
          </div>
          <div className='col-span-9'>
            <Outlet></Outlet>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    </main>
  );
}
