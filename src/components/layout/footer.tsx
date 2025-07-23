export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CONECTE-SE REPRESENTAÇÕES. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
