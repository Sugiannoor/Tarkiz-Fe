import { useState, useEffect, Suspense } from 'react';
import { SidebarMobile } from '@/features/dashboard/components/SidebarMobile';
import { SidebarDesktop } from '@/features/dashboard/components/SidebarDesktop';
import { Outlet } from 'react-router-dom';
import Loading from '@/Components/Loading';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className='absolute top-0 w-full bg-[#005697] h-[350px]'></div>
      <div className={`relative ${isMobile ? "px-4" : "grid grid-cols-12"} pt-5`}>
        <div className='col-span-2 lg:col-span-3'>
          {isMobile ? <SidebarMobile /> : <SidebarDesktop />}
        </div>
        <main className='col-span-10 lg:col-span-9'>
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
