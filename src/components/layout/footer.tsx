'use client';

import React, { useState, useEffect } from 'react';

const CurrentYear = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return year ? <span className="font-semibold">{year}</span> : null;
}

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy;{" "}
          <CurrentYear />
          {" "}
          CONECTE-SE REPRESENTAÇÕES. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
