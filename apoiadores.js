function supporterDashboard() {
  const metrics = ['Empresas cadastradas', 'Apoios formalizados', 'Valor pactuado', 'Recebido pelo município'];
  return head('Apoiadores', 'Modelo de acompanhamento da captação e do perfil das empresas.') +
    `<div class="stats supporter-stats">${metrics.map(label => `
      <article class="card">
        <div class="stat-top">${label}</div>
        <div class="stat-num" aria-label="Sem dados na demonstração">—</div>
      </article>`).join('')}</div>
      <section class="card operating-note">
        <h2>Empresas por setor de atuação</h2>
        ${empty('Os totais por setor são exibidos na plataforma operacional.')}
      </section>
      <section class="card operating-note">
        <h2>Base de apoiadores</h2>
        <p class="muted">Na plataforma operacional, esta área reúne os contatos, o acompanhamento da formalização e as referências aos comprovantes.</p>
        ${empty('Esta demonstração não contém cadastros de apoiadores.')}
      </section>`;
}
