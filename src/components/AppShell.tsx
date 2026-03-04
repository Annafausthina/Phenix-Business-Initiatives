import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => (
  <div className="flex min-h-screen flex-col">
    <ParticleBackground />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default AppShell;
