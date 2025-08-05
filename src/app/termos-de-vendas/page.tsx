'use client';

import React from 'react';

const TermosDeVendas = () => {
  return (
    <div style={{ width: '100%', height: '100vh', padding: 24 }}>
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>Termos de Vendas</h1>
      <iframe
        src="/assets/[Glossário]%20Termos%20de%20Vendas%20Atualizado%20_%20DNA%20de%20Vendas.pdf"
        style={{ width: '100%', height: '80vh', border: 'none' }}
        title="Termos de Vendas PDF"
      />
    </div>
  );
};

export default TermosDeVendas; 