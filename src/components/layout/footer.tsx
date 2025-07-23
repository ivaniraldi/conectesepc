import { ClientOnly } from "../client-only";
import React from 'react';

const CurrentYear = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span className="font-semibold">{year}</span>;
}

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy;{" "}
          <ClientOnly>
            <CurrentYear />
          </ClientOnly>{" "}
          CONECTE-SE REPRESENTAÇÕES. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}