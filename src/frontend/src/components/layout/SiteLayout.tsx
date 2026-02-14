import { Outlet } from '@tanstack/react-router';
import HeaderNav from './HeaderNav';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderNav />
      <main className="flex-1 mobile-safe-bottom bg-background">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
