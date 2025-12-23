import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { WhatIAutomate } from '@/components/sections/WhatIAutomate';
import { AutomationProjects } from '@/components/sections/AutomationProjects';
import { Services } from '@/components/sections/Services';
import { AboutMe } from '@/components/sections/AboutMe';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIAutomate />
        <AutomationProjects />
        <Services />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
