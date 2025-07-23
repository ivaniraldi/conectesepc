import { MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const navLinks = [
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2" aria-label="Página inicial da Conecte-se Representações">
          <MonitorSmartphone className="h-7 w-7 text-primary" />
          <span className="hidden font-bold sm:inline-block text-lg">
            CONECTE-SE
          </span>
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
           <Button asChild>
                <a href="#contato">Compre Agora</a>
           </Button>
        </div>
      </div>
    </header>
  );
}
