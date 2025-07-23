import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Products } from '@/components/sections/products';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { WhatsappButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
