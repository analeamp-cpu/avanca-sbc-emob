const phases = [
  {
    period: '2026', label: 'Estruturação', date: 'NOV–DEZ 2026',
    title: 'Estruturar a liderança executiva e a base de TI',
    purpose: 'Após o Congresso de Eletromobilidade de 17 de novembro, a prioridade até dezembro é definir quem vai liderar o programa e o que a plataforma precisa oferecer para as primeiras entregas de 2027.',
    outputs: [
      'Encaminhar a definição da liderança executiva e da equipe de TI.',
      'Definir responsabilidades e prioridades para o início de 2027.',
      'Levantar os requisitos da plataforma e planejar seu desenvolvimento.'
    ]
  },
  {
    period: '2027', label: 'Primeiras entregas', date: 'ATÉ JUL/2027 E CONTINUIDADE',
    title: 'Colocar a jornada de desafios em funcionamento',
    purpose: 'Com a liderança e a base de TI encaminhadas em 2026, o CEITEC inicia a operação da plataforma, organiza a rede, qualifica demandas e acompanha os testes que forem pactuados.',
    outputs: ['Operar a plataforma e registrar a curadoria e as decisões.', 'Apresentar resultados do primeiro ciclo e a carteira de próximos desafios.', 'Avançar em paralelo com a análise do modelo de parceria e o plano de trabalho.'],
    fronts: [
      ['Concluir a ativação e colocar os desafios em rotina', 'Acompanhar na plataforma as propostas, os encontros e os testes pactuados. Publicar a agenda do CEITEC e consolidar as evidências do primeiro ciclo e as oportunidades para o próximo.'],
      ['Definir o modelo de operação continuada', 'Concluir o diagnóstico de serviços e estrutura, detalhar metas e responsabilidades no plano de trabalho e encaminhar a análise do instrumento de parceria e do procedimento de seleção, quando exigido.']
    ]
  },
  {
    period: '2028', label: 'Incubação e formação', date: 'INCUBADORA E-MOB · INÍCIO PROPOSTO',
    title: 'Estruturar a incubadora E-MOB e ampliar a formação',
    purpose: 'Usar as demandas identificadas nos desafios para orientar a preparação das startups, a formação técnica e a aproximação de fornecedores com a indústria.',
    outputs: ['Abrir novos ciclos de desafios e ampliar o atendimento a startups.', 'Definir critérios de entrada, trilhas de desenvolvimento e mentorias para a incubadora.', 'Organizar atividades com instituições formadoras e encontros entre fornecedores e indústrias.'],
    fronts: [
      ['Ampliar desafios, atendimento e formação técnica', 'Acompanhar a evolução das startups e conectar empresas e fornecedores em torno de demandas reais. Organizar as primeiras trilhas de qualificação com instituições formadoras.'],
      ['Preparar a operação da incubadora E-MOB', 'Detalhar equipe, jornada, ambientes e metas de atendimento. Preparar a primeira turma conforme as aprovações e, se a parceria estiver formalizada, iniciar a execução com o instituto.']
    ]
  },
  {
    period: '2029', label: 'Pesquisa e fomento', date: 'INCUBADORA E-MOB · CONSOLIDAÇÃO PROPOSTA',
    title: 'Transformar demandas industriais em projetos de pesquisa e inovação',
    purpose: 'Aprofundar o trabalho da incubadora com a indústria e aproximar startups, universidades e instituições científicas de oportunidades de pesquisa aplicada.',
    outputs: ['Priorizar projetos de pesquisa e desenvolvimento e estruturar demonstrações.', 'Definir parceiros, escopo e contrapartidas das propostas de cooperação.', 'Mapear editais e preparar propostas conforme os requisitos de cada chamada.'],
    fronts: [
      ['Estruturar uma carteira de projetos aplicados', 'Selecionar as demandas com potencial de pesquisa e desenvolvimento. Preparar demonstrações, propostas técnicas e planos de teste com startups, universidades e instituições científicas.'],
      ['Organizar a rotina de fomento e prestação de contas', 'Definir proponentes elegíveis, responsabilidades e evidências para cada projeto. Acompanhar submissões e registrar recursos efetivamente formalizados.']
    ]
  },
  {
    period: '2030', label: 'Escala regional', date: 'INTEGRAÇÃO DA CADEIA',
    title: 'Ampliar as conexões do hub E-MOB',
    purpose: 'Posicionar o CEITEC como ponto de conexão da indústria, dos fornecedores e da pesquisa aplicada em eletromobilidade no Grande ABCDMRR.',
    outputs: ['Ampliar a carteira de desafios e programas com empresas âncoras.', 'Conectar fornecedores estratégicos, instituições e parceiros regionais.', 'Dar visibilidade a casos validados e oportunidades para a cadeia.'],
    fronts: [
      ['Ampliar o acesso das soluções à cadeia industrial', 'Conectar startups e fornecedores estratégicos às empresas âncoras. Identificar quais soluções validadas têm potencial de aplicação em outras empresas ou operações.'],
      ['Pactuar a cooperação no Grande ABCDMRR', 'Articular uma agenda regional com instituições e empresas. Definir responsabilidades e metas dos acordos de cooperação que vierem a ser firmados.']
    ]
  },
  {
    period: '2031', label: 'Avaliação', date: 'RESULTADOS E PRÓXIMO CICLO',
    title: 'Medir o que o programa entregou à cidade',
    purpose: 'Apresentar evidências da operação e usar os resultados para decidir o próximo ciclo do CEITEC.',
    outputs: ['Consolidar indicadores de negócios, tecnologia, formação e cooperação.', 'Documentar projetos, recursos comprovados e resultados dos testes.', 'Avaliar continuidade, escala e novos investimentos.'],
    fronts: [
      ['Comprovar as entregas do ciclo 2026–2031', 'Reunir em relatório plurianual os resultados dos desafios, testes, formações e conexões de negócios. Documentar os projetos realizados e os recursos comprovados.'],
      ['Subsidiar a decisão sobre o próximo ciclo', 'Apresentar à Prefeitura os resultados frente às metas e à prestação de contas. Indicar os programas que podem continuar ou ganhar escala, com prioridades de investimento.']
    ]
  }
];

const annualCitySections = {
  '2026': {
    theme: 'ESTRUTURA EXECUTIVA E TI',
    value: 'Em novembro e dezembro, o valor está em organizar a equipe e preparar o desenvolvimento da plataforma para iniciar a operação em 2027.',
    cards: [
      ['Estrutura executiva', 'Definir quem conduz o programa, como a equipe toma decisões e quais entregas serão priorizadas em 2027.'],
      ['TI e desenvolvimento', 'Identificar as funcionalidades essenciais da plataforma e planejar o desenvolvimento dos cadastros e do acompanhamento dos desafios.']
    ],
    invitation: 'Em 2026, a participação começa no Congresso de Eletromobilidade. As contribuições do encontro ajudam a definir as prioridades da equipe e as necessidades da plataforma.',
    ways: [
      ['Acompanhar o Congresso', 'Participe das discussões sobre as necessidades da cadeia de eletromobilidade e acompanhe os próximos passos do CEITEC.'],
      ['Acompanhar as próximas etapas', 'Os canais de cadastro e de participação serão divulgados conforme a plataforma e a operação forem implantadas.']
    ]
  },
  '2028': {
    theme: 'ECOSSISTEMA DE INOVAÇÃO',
    heading: 'Lançamento da Incubadora CEITEC',
    value: 'A incubadora do CEITEC pode transformar ideias em novas empresas de eletromobilidade e aproximá-las dos desafios reais da indústria de São Bernardo.',
    cards: [
      ['Ideação', 'Identificar um problema relevante na cadeia da eletromobilidade e desenhar uma solução.'],
      ['Validação', 'Testar o protótipo com usuários e potenciais clientes.'],
      ['Operação', 'Estruturar a equipe, o modelo de negócio e a entrega da solução.'],
      ['Tração', 'Conquistar os primeiros clientes e comprovar que existe demanda.'],
      ['Escala', 'Preparar a startup para atender novos mercados e ganhar capacidade de entrega.']
    ],
    invitation: 'O CEITEC prevê lançar um edital para selecionar startups para sua incubadora, nas dependências do centro. As selecionadas terão uma jornada estruturada na vertical E-MOB, com acompanhamento conforme o estágio de cada negócio.',
    ways: [
      ['Quero concorrer a uma vaga', 'Acompanhe a publicação do edital. Consulte o calendário, os requisitos e os critérios de seleção antes de inscrever sua proposta.'],
      ['Como me preparar para o edital?', 'Descreva o problema, a solução, a equipe, o estágio do negócio e as evidências que você já tem. Relacione sua proposta a uma necessidade da cadeia de eletromobilidade.']
    ]
  },
  '2029': {
    theme: 'MOTOR DE CONEXÃO E-MOB',
    heading: 'Pesquisa aplicada e fomento',
    value: 'São Bernardo pode ser o ponto de encontro entre quem tem um desafio industrial, quem sabe pesquisar e quem pode financiar o desenvolvimento da solução.',
    cards: [
      ['Indústria', 'Apresenta desafios reais e define onde uma solução pode ser testada.'],
      ['Universidades e ICTs', 'Contribuem com pesquisadores, competências técnicas e laboratórios.'],
      ['Agências e programas de fomento', 'Oferecem instrumentos para projetos que atendam aos critérios de cada chamada.'],
      ['CEITEC', 'Conecta as partes e ajuda a transformar cada desafio em um projeto com escopo, parceiros e plano de teste.']
    ],
    invitation: 'O CEITEC prevê cadastrar universidades e instituições científicas e tecnológicas (ICTs) de São Bernardo, de outros municípios e de outros estados para compor a rede de pesquisa aplicada à eletromobilidade.',
    ways: [
      ['Quero cadastrar minha instituição', 'Prepare o contato institucional, o município e o estado, as linhas de pesquisa, os laboratórios disponíveis e as competências que podem contribuir com projetos E-MOB.'],
      ['Quero propor uma cooperação', 'Indique em quais desafios a instituição pode atuar, quais equipes e estruturas estão disponíveis e que tipo de pesquisa, teste ou demonstração pode realizar com a indústria.']
    ]
  },
  '2030': {
    theme: 'MOBILIZAÇÃO REGIONAL',
    heading: 'Mobilização regional',
    value: 'Uma campanha de alcance regional mostrará como o ecossistema funciona na prática, da demanda da fábrica à solução testada. Os casos divulgados e suas evidências vão preparar o balanço público de 2031.',
    cards: [
      ['Mostrar a engrenagem', 'Contar como indústria, startups, pesquisadores e CEITEC trabalham juntos, com exemplos de desafios, testes e aplicações autorizadas.'],
      ['Chegar à região', 'Circular os casos em vídeos curtos, imprensa regional, redes sociais e eventos com parceiros do Grande ABCDMRR.'],
      ['Levar soluções ao mercado', 'Usar mostras e encontros setoriais para aproximar soluções validadas de fornecedores, empresas âncoras e novos compradores.'],
      ['Preparar o balanço de 2031', 'Organizar registros e evidências com os parceiros para publicar indicadores comparáveis de todo o ciclo.']
    ],
    invitation: 'Empresas, startups, universidades, entidades e municípios poderão colaborar com a campanha e ajudar a levar os casos de São Bernardo a novas indústrias e territórios.',
    ways: [
      ['Quero apresentar um caso', 'Prepare um resumo do desafio, da solução, do teste e do resultado comprovado. Indique quais dados e imagens podem ser divulgados.'],
      ['Quero mobilizar minha rede', 'Proponha um encontro, demonstração ou ação de divulgação nos canais da sua organização para conectar os casos do programa a novos públicos.']
    ]
  },
  '2031': {
    theme: 'PRESTAÇÃO DE CONTAS À CIDADE',
    heading: 'Balanço do programa e próximo ciclo',
    value: 'São Bernardo poderá ver, em números e casos comprovados, o que o programa entregou desde 2026. A proposta é divulgar o balanço em um painel público, na imprensa, nas redes e em eventos de apresentação.',
    cards: [
      ['Inovação industrial', 'Desafios lançados, provas de conceito e pilotos concluídos, além de soluções adotadas pela indústria.'],
      ['Empreendedorismo e formação', 'Startups incubadas, pessoas qualificadas e avanços das empresas ao longo da jornada.'],
      ['Pesquisa e investimento', 'Projetos de pesquisa aplicada, instituições parceiras e recursos comprovadamente captados.'],
      ['Resultados para o território', 'Casos de aplicação na região e indicadores de impacto econômico, social ou ambiental quando houver medição.']
    ],
    invitation: 'O balanço de 2026–2031 vai orientar a escuta para o próximo ciclo. A proposta é reunir demandas e manifestações de interesse para desenhar a jornada E-MOB de 2032.',
    ways: [
      ['Quero propor um desafio para 2032', 'Apresente o problema, quem ele afeta e que resultado seria relevante para a indústria ou para o território.'],
      ['Quero participar da próxima jornada', 'Indique se deseja incubar uma startup, testar uma solução, pesquisar com a indústria ou apoiar a formação. Acompanhe a divulgação das oportunidades do novo ciclo.']
    ]
  }
};

function renderRoadmap() {
  const roadmap = document.querySelector('#roadmap');
  roadmap.innerHTML = `
    <div class="roadmap-tabs" role="tablist" aria-label="Períodos do plano">
      ${phases.map((phase, index) => `<button type="button" role="tab" id="phase-${index}" aria-controls="phase-panel">
        <strong>${phase.period}</strong><small>${phase.label}</small>
      </button>`).join('')}
    </div>
    <div class="roadmap-panel" id="phase-panel" role="tabpanel" tabindex="0"></div>`;
  const tabs = Array.from(roadmap.querySelectorAll('[role="tab"]'));
  const panel = roadmap.querySelector('#phase-panel');
  const fronts = document.querySelector('#roadmap-fronts');
  const initialFronts = fronts.innerHTML;
  const impact = document.querySelector('#impacto');
  const participation = document.querySelector('#participar');
  const initialImpact = impact.innerHTML;
  const initialParticipation = participation.innerHTML;
  const previousYear = document.querySelector('#previous-year');
  const nextYear = document.querySelector('#next-year');
  const yearOpportunities = document.querySelector('#year-opportunities');
  let activeIndex = 0;

  function activate(index) {
    activeIndex = index;
    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === index;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[index].id);
    const phase = phases[index];
    previousYear.disabled = index === 0;
    nextYear.disabled = index === phases.length - 1;
    previousYear.textContent = index > 0 ? '← ' + phases[index - 1].period : '← Anterior';
    nextYear.textContent = index < phases.length - 1 ? phases[index + 1].period + ' →' : 'Próximo →';
    yearOpportunities.textContent = 'Oportunidades de ' + phase.period + ' ↓';
    panel.innerHTML = `<div><span class="flag">${phase.date}</span><h3>${phase.title}</h3><p>${phase.purpose}</p></div>
      <div><h4>Entregas previstas</h4><ul>${phase.outputs.map(output => `<li>${output}</li>`).join('')}</ul></div>`;
    fronts.innerHTML = phase.fronts
      ? phase.fronts.map(([title, description], index) => `<article>
          <span class="flag${index === 1 ? ' purple' : ''}">FRENTE ${index === 0 ? 'A' : 'B'} · ${phase.period}</span>
          <h3>${title}</h3><p>${description}</p>
        </article>`).join('')
      : initialFronts;

    const annual = annualCitySections[phase.period];
    impact.innerHTML = annual ? `
      <p class="section-index">02 / ${phase.period} · ${annual.theme}</p>
      <div class="section-title"><h2>${annual.heading ?? 'Onde o programa pode gerar valor'}</h2><p>${annual.value}</p></div>
      <div class="impact-grid${annual.cards.length === 4 ? '' : ' impact-grid-' + annual.cards.length}">
        ${annual.cards.map(([title, description], index) => `
          <article><span>${String(index + 1).padStart(2, '0')}</span><h3>${title}</h3><p>${description}</p></article>
        `).join('')}
      </div>` : initialImpact;
    participation.innerHTML = annual ? `
      <p class="section-index">03 / ${phase.period} · PARTICIPAÇÃO</p>
      <div class="section-title"><h2>Como fazer parte</h2><p>${annual.invitation}</p></div>
      <div class="audiences">
        ${annual.ways.map(([title, description]) => `
          <details><summary>${title}</summary><p>${description}</p></details>
        `).join('')}
      </div>` : initialParticipation;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', event => {
      const targets = { ArrowLeft: (index + tabs.length - 1) % tabs.length, ArrowRight: (index + 1) % tabs.length, Home: 0, End: tabs.length - 1 };
      if (!(event.key in targets)) return;
      event.preventDefault();
      activate(targets[event.key]);
      tabs[targets[event.key]].focus();
    });
  });
  function moveYear(direction) {
    const index = activeIndex + direction;
    if (index < 0 || index >= phases.length) return;
    activate(index);
    tabs[index].focus({preventScroll: true});
    document.querySelector('#jornada').scrollIntoView({behavior: 'instant'});
  }
  previousYear.addEventListener('click', () => moveYear(-1));
  nextYear.addEventListener('click', () => moveYear(1));
  activate(0);
}

const pageRoutes = new Map([
  ['Visão geral',''], ['Decisão de dezembro','decisao'], ['Equipe de implantação','equipe'],
  ['Entregas e indicadores','indicadores'], ['Empresas','empresas'], ['Apoiadores','apoiadores'],
  ['Startups e soluções','startups'], ['Desafios','desafios'], ['Plano de ação','plano'],
  ['Agenda','agenda'], ['Congresso','congresso'], ['Manifesto','manifesto'],
  ['Diagnóstico','diagnostico'], ['Documentos','documentos'], ['Relatórios','relatorios']
]);

function openManagement(nextPage) {
  const slug = pageRoutes.get(nextPage);
  if (slug === undefined) return;
  const hash = slug ? '#ceitec/' + slug : '#ceitec';
  if (window.location.hash !== hash) window.location.hash = hash;
}

function showRoute() {
  const hash = window.location.hash.slice(1);
  if (hash === 'conteudo') return;
  const isManagement = hash === 'ceitec' || hash.startsWith('ceitec/');
  document.querySelector('#city').hidden = isManagement;
  document.querySelector('#management').hidden = !isManagement;
  for (const [selector, active] of [['#cityLink', !isManagement], ['#managementLink', isManagement]]) {
    const link = document.querySelector(selector);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if (isManagement) {
    const slug = hash.split('/')[1] || '';
    page = Array.from(pageRoutes).find(([, route]) => route === slug)?.[0] || 'Visão geral';
    render();
    window.scrollTo({top: 0, behavior: 'instant'});
  } else {
    const section = document.getElementById(hash);
    if (section && section !== document.querySelector('#city')) section.scrollIntoView();
    else window.scrollTo({top: 0, behavior: 'instant'});
  }
}

function managementOverview() {
  return head('Painel de gestão CEITEC', 'Operação dos Desafios E-MOB e acompanhamento do plano 2026–2031.') +
    `<section class="decision-banner"><div><p class="eyebrow">NOV–DEZ 2026 · ESTRUTURAÇÃO</p><h2>Viabilizar liderança executiva e TI</h2><p>Definir responsáveis e requisitos da plataforma até dezembro. Em 2027, a equipe coloca a plataforma em operação e conduz os primeiros desafios.</p></div>
    ${btn('Ver decisões e próximos passos ↗', "go('Decisão de dezembro')", 'lime')}</section>` +
    dashboardMetrics();
}

function executiveDecision() {
  return head('Decisão de dezembro de 2026', 'Proposta para deliberação da Prefeitura de São Bernardo do Campo.') +
    `<div class="decision-cards">
      <article class="card operating-note"><span class="flag">NOV–DEZ 2026 · DECISÃO</span><h2>Definir a estrutura executiva e de TI</h2>
        <ul><li>Encaminhar a definição da liderança executiva e da equipe de TI, com atribuições e recursos a avaliar pelas áreas competentes.</li>
        <li>Organizar as contribuições do Congresso e priorizar as primeiras entregas de 2027.</li>
        <li>Definir os requisitos e a sequência de desenvolvimento da primeira versão da plataforma.</li></ul>
        <div class="decision-actions">${btn('Ver responsabilidades', "go('Equipe de implantação')")}</div>
      </article>
      <article class="card operating-note"><span class="flag purple">2027 · EXECUÇÃO</span><h2>Colocar a plataforma e os desafios em operação</h2>
        <ul><li>Implantar os cadastros e o acompanhamento das demandas da indústria.</li>
        <li>Conduzir a curadoria de soluções e registrar as decisões sobre os testes pactuados.</li>
        <li>Consolidar os resultados do primeiro ciclo e encaminhar o modelo de continuidade.</li></ul>
        <div class="decision-actions">${btn('Ver entregas e indicadores', "go('Entregas e indicadores')")}</div>
      </article>
    </div>`;
}

function executiveTeam() {
  return head('Equipe de implantação', 'Estruturação em 2026 e responsabilidades para a execução em 2027.') +
    `<div class="decision-cards">
      <article class="card"><span class="flag">01 · LIDERANÇA EXECUTIVA</span><h2>Da escuta industrial à entrega</h2><ul>
        <li><strong>2026:</strong> organizar as contribuições do Congresso, definir responsabilidades e preparar a agenda de 2027.</li>
        <li><strong>2027:</strong> mobilizar indústrias, startups e instituições de pesquisa.</li>
        <li>Validar a ficha do primeiro desafio, coordenar a busca por soluções e acompanhar a seleção e os testes pactuados.</li>
        <li>Responder pela carteira de ações, pelos indicadores e pela prestação de contas do ciclo.</li>
      </ul></article>
      <article class="card"><span class="flag purple">02 · DESENVOLVIMENTO / TI</span><h2>Dos cadastros ao acompanhamento</h2><ul>
        <li><strong>2026:</strong> levantar requisitos, priorizar funcionalidades e planejar o desenvolvimento.</li>
        <li><strong>2027:</strong> implantar portal, cadastros e registros de relacionamento da rede.</li>
        <li>Estruturar inscrições, curadoria, perfis de acesso e histórico das decisões.</li>
        <li>Entregar painel de indicadores, trilha de registros e exportação de dados para a gestão.</li>
      </ul></article>
    </div>`;
}

function executiveIndicators() {
  return head('Entregas e indicadores', 'Acompanhamento da estruturação em 2026 e da operação inicial em 2027.') +
    `<section class="card operating-note"><h2>Entregas verificáveis do primeiro ciclo</h2><div class="milestone-grid">
      <article><h3>2026 · Estruturação</h3><p>Proposta de liderança e TI, responsabilidades definidas e requisitos da plataforma levantados.</p></article>
      <article><h3>2027 · Implantação</h3><p>Plataforma em operação, cadastros ativos e primeiros desafios qualificados.</p></article>
      <article><h3>2027 · Curadoria e testes</h3><p>Soluções avaliadas, seleção documentada e testes acompanhados quando pactuados.</p></article>
      <article><h3>2027 · Balanço</h3><p>Resultados do ciclo, evidências, carteira de oportunidades e plano de continuidade.</p></article>
    </div><p class="note">Indicadores propostos: desafios qualificados, soluções avaliadas, testes com decisão registrada e organizações mobilizadas.</p></section>
    <section class="card operating-note"><h2>Como o desafio se transforma em projeto</h2>
      <p>Indústria apresenta a demanda → CEITEC qualifica e busca soluções → startups apresentam propostas → CEITEC conduz a curadoria em até 45 dias após o encerramento → partes pactuam teste e decidem sobre continuidade comercial.</p>
      <ul><li><strong>Piloto de até 90 dias:</strong> solução já em operação, com remuneração e condições a pactuar com a indústria.</li>
      <li><strong>Prova de conceito de até 30 dias:</strong> validação em ambiente fabril com escopo, indicadores, segurança e remuneração pactuados.</li></ul>
      <p class="note">Antes do teste, definir confidencialidade, propriedade intelectual, responsabilidades e tratamento de dados.</p>
    </section>
    <div class="decision-actions">${btn('Abrir plano de ação', "go('Plano de ação')", 'primary')}</div>`;
}

function supporterCards() {
  const tiers = [
    {name: 'Ouro', style: 'gold', value: 'R$ 150 mil por ano', benefits: [
      'Uso de um contêiner no CEITEC para demonstração de produtos, limitado a um por CNPJ.',
      'Presença de equipe própria no local.',
      'Participação gratuita em eventos de negócios no CEITEC.',
      'Exposição da marca em placa física no mural de apoiadores.',
      'Divulgação da marca em eventos internos.'
    ]},
    {name: 'Prata', style: 'silver', value: 'R$ 50 mil por ano', benefits: [
      'Participação gratuita em eventos de negócios no CEITEC.',
      'Exposição da marca em placa física no mural de apoiadores.',
      'Divulgação da marca em eventos internos.'
    ]},
    {name: 'Bronze', style: 'bronze', value: 'Sem aporte financeiro', benefits: [
      'Oferta gratuita de cursos, mentorias, palestras ou softwares para a rede.',
      'Compromisso de não cobrar do CEITEC nem dos participantes.'
    ]}
  ];
  return `<div class="support-grid">${tiers.map(tier => `<article class="card support-tier ${tier.style}">
    <h3>Apoiador ${tier.name}</h3><p class="support-value">${tier.value}</p>
    <ul>${tier.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul>
  </article>`).join('')}</div>`;
}

renderRoadmap();
document.querySelector('#city-supporter-tiers').innerHTML = supporterCards();
window.addEventListener('hashchange', showRoute);
showRoute();

function renderManagementNav() {
  const groups = [
    ['Gestão executiva', ['Visão geral', 'Decisão de dezembro', 'Equipe de implantação', 'Entregas e indicadores']],
    ['Cadastros e parcerias', ['Empresas', 'Startups e soluções', 'Apoiadores']],
    ['Inovação aberta', ['Desafios']],
    ['Comunicação', ['Congresso', 'Manifesto', 'Diagnóstico']],
    ['Acompanhamento', ['Agenda', 'Documentos', 'Relatórios', 'Plano de ação']]
  ];
  const icons = new Map(pages.map(([icon, label]) => [label, icon]));
  document.querySelector('#nav').innerHTML = groups.map(([title, labels]) => `
    <div class="nav-label">${title}</div>${labels.map(label => `
      <button type="button" ${label === page ? 'class="active" aria-current="page"' : ''} onclick="go('${label}')">
        <span class="ico" aria-hidden="true">${icons.get(label)}</span>${label}
      </button>`).join('')}`).join('');
}
