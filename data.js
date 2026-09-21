/**
 * SOS INFANTIL — Remédios Caseiros de Geração em Geração
 * Base de Dados do Funil (Quiz de 14 Telas + Conteúdo da Página de Vendas)
 */

const FUNNEL_DATA = {
  // Configurações Globais da Oferta
  product: {
    name: "SOS Infantil",
    subtitle: "Remédios Caseiros de Geração em Geração",
    originalPrice: "R$ 97,00",
    currentPrice: "R$ 17,00",
    installments: "ou 2x de R$ 8,92",
    accessType: "Acesso vitalício • PDF digital • Entrega imediata no e-mail",
    guaranteeDays: 7,
    checkoutUrl: "https://pay.cakto.com.br/a8cwrvz_1124406",
    primaryCTA: "QUERO CRIAR MEU FILHO A PROVA DE DOENÇAS",
    mobileStickyCTA: "QUERO ACESSAR"
  },

  // 14 Telas do Quiz
  quizSteps: [
    {
      id: 1,
      type: "intro",
      badge: "🌿 RECEITAS E SEGREDOS PASSADOS DE GERAÇÃO EM GERAÇÃO",
      mandatoryPhrase: "Descubra o que as farmácias não querem que você saiba e aumente a imunidade do seu filho (Leva só 1 minuto)",
      headline: "VOCÊ CONHECE AS RECEITAS CASEIRAS QUE SUA MÃE OU SUA AVÓ USAVAM?",
      subheadline: "Responda algumas perguntas rápidas e descubra quais conhecimentos, receitas tradicionais e conteúdos de alimentação podem fazer parte da sua rotina com os pequenos.",
      microcopy: "⏱️ Leva cerca de 1 minuto • 100% Gratuito e Seguro",
      buttonText: "COMEÇAR MEU QUIZ",
      stepIndicator: "Etapa 1 de 14"
    },
    {
      id: 2,
      type: "single_choice",
      question: "Quantas crianças fazem parte da sua rotina?",
      layout: "grid-2x2",
      options: [
        { id: "1_child", text: "1 criança", icon: "👶", desc: "Cuidado dedicado" },
        { id: "2_children", text: "2 crianças", icon: "👧👦", desc: "Rotina compartilhada" },
        { id: "3_children", text: "3 crianças", icon: "👨‍👩‍👧‍👦", desc: "Casa cheia de vida" },
        { id: "4_plus_children", text: "4 ou mais crianças", icon: "🏡", desc: "Grande família" }
      ],
      stepIndicator: "Etapa 2 de 14"
    },
    {
      id: 3,
      type: "single_choice",
      question: "Qual é a idade da criança que você quer cuidar melhor?",
      layout: "list",
      options: [
        { id: "under_2", text: "Até 2 anos", icon: "🍼", badge: "Primeira infância" },
        { id: "3_to_5", text: "3 a 5 anos", icon: "🧸", badge: "Fase de descobertas" },
        { id: "6_to_10", text: "6 a 10 anos", icon: "🎒", badge: "Idade escolar" },
        { id: "11_plus", text: "11 anos ou mais", icon: "🌱", badge: "Pré-adolescência" }
      ],
      note: "💡 Os ensinamentos tradicionais e hábitos naturais podem ser facilmente adaptados para cada fase do crescimento.",
      stepIndicator: "Etapa 3 de 14"
    },
    {
      id: 4,
      type: "single_choice",
      question: "Quando o assunto é receita caseira, quanto você conhece dos ensinamentos que passaram de geração em geração?",
      layout: "list",
      options: [
        { id: "know_many", text: "Conheço várias receitas da minha família", icon: "👵✨" },
        { id: "know_some_forgot", text: "Conheço algumas, mas esqueci muitas", icon: "💭📖" },
        { id: "know_few", text: "Conheço poucas", icon: "🌱" },
        { id: "want_to_learn", text: "Quase não conheço, mas gostaria de aprender", icon: "🍯❤️" }
      ],
      stepIndicator: "Etapa 4 de 14"
    },
    {
      id: 5,
      type: "multi_choice",
      question: "Quais desses ingredientes você já viu sua mãe ou sua avó usando em receitas ou cuidados caseiros?",
      subtitle: "Selecione todos os que você lembra (pode marcar mais de um)",
      layout: "grid-cards",
      options: [
        { id: "mel", text: "Mel puro", icon: "🍯", hint: "Aconchego & garganta" },
        { id: "cebola", text: "Cebola", icon: "🧅", hint: "Xaropes tradicionais" },
        { id: "canela", text: "Canela", icon: "🌿", hint: "Aroma & bem-estar" },
        { id: "cravo", text: "Cravo-da-índia", icon: "🌰", hint: "Segredo das vovós" },
        { id: "gengibre", text: "Gengibre", icon: "🫚", hint: "Vitalidade & conforto" },
        { id: "cenoura", text: "Cenoura", icon: "🥕", hint: "Nutrição natural" },
        { id: "beterraba", text: "Beterraba", icon: "❤️", hint: "Força & vitaminas" },
        { id: "frutas", text: "Frutas frescas", icon: "🍎", hint: "Escudo do dia a dia" }
      ],
      buttonText: "CONTINUAR COM ESTES INGREDIENTES",
      stepIndicator: "Etapa 5 de 14"
    },
    {
      id: 6,
      type: "single_choice",
      question: "O que mais acontece quando você quer cuidar melhor do seu filho de forma natural?",
      layout: "list",
      options: [
        { id: "dont_know_which", text: "Não sei qual receita usar no momento certo", icon: "🤷‍♀️" },
        { id: "forgot_recipes", text: "Esqueço as receitas que aprendi com minha família", icon: "📝" },
        { id: "contradictory_info", text: "Encontro informações diferentes e confusas na internet", icon: "🔍" },
        { id: "waste_ingredients", text: "Tenho vários ingredientes em casa, mas não sei como aproveitá-los", icon: "🧅" },
        { id: "want_nutrition", text: "Quero aprender mais sobre alimentação e ingredientes naturais", icon: "🥗" }
      ],
      stepIndicator: "Etapa 6 de 14"
    },
    {
      id: 7,
      type: "single_choice",
      question: "Você sente que poderia melhorar a alimentação do seu filho?",
      layout: "list",
      options: [
        { id: "improve_a_lot", text: "Sim, bastante — sinto que falta variedade nutritiva", icon: "🥦" },
        { id: "improve_a_bit", text: "Um pouco — gostaria de receitas mais naturais", icon: "🥣" },
        { id: "already_good", text: "Minha alimentação já é boa, mas quero aprender mais", icon: "✨" },
        { id: "discover_new", text: "Quero descobrir novas opções práticas que eles aceitem bem", icon: "🍓" }
      ],
      stepIndicator: "Etapa 7 de 14"
    },
    {
      id: 8,
      type: "single_choice",
      question: "Você sabe quais frutas são fontes de diferentes vitaminas e nutrientes?",
      layout: "list",
      options: [
        { id: "know_well", text: "Sim, conheço bastante sobre frutas e benefícios", icon: "🍊" },
        { id: "know_some", text: "Conheço algumas, mas acabo oferecendo sempre as mesmas", icon: "🍌" },
        { id: "know_important_only", text: "Sei que são importantes, mas não sei exatamente quais nutrientes oferecem", icon: "🍇" },
        { id: "wish_learn", text: "Gostaria muito de aprender a usar cada fruta a favor da saúde", icon: "🍎" }
      ],
      stepIndicator: "Etapa 8 de 14"
    },
    {
      id: 9,
      type: "single_choice",
      question: "Você sabe aproximadamente quanto de comida oferecer para uma criança de acordo com a idade?",
      layout: "list",
      options: [
        { id: "know_portions", text: "Sim, sei exatamente a quantidade recomendada", icon: "📏" },
        { id: "have_idea", text: "Tenho uma ideia aproximada, mas fico na dúvida se é suficiente", icon: "🍽️" },
        { id: "big_doubts", text: "Tenho bastante dúvida se estou colocando de mais ou de menos", icon: "❓" },
        { id: "never_understood", text: "Nunca parei para entender isso e gostaria de uma tabela prática", icon: "📊" }
      ],
      note: "✨ Uma referência clara por faixa etária evita o desperdício, a cobrança excessiva e traz tranquilidade às refeições.",
      stepIndicator: "Etapa 9 de 14"
    },
    {
      id: 10,
      type: "processing",
      title: "🌿 RESGATANDO OS CONHECIMENTOS DA SUA FAMÍLIA...",
      subtitle: "Estamos organizando suas respostas para mostrar quais conteúdos do SOS Infantil podem fazer mais sentido para a sua rotina familiar.",
      steps: [
        { text: "Identificando seus principais interesses...", icon: "🔎" },
        { text: "Organizando os conteúdos naturais e receitas caseiras...", icon: "🌿" },
        { text: "Verificando seus interesses em alimentação infantil...", icon: "🍎" },
        { text: "Resgatando conhecimentos passados de geração em geração...", icon: "👵" }
      ],
      stepIndicator: "Etapa 10 de 14"
    },
    {
      id: 11,
      type: "single_choice",
      question: "O que você mais gostaria de aprender?",
      layout: "list",
      options: [
        { id: "recipes", text: "Conhecer receitas caseiras tradicionais de vó", icon: "🌿" },
        { id: "ingredients", text: "Aprender mais sobre o poder dos ingredientes naturais", icon: "🍯" },
        { id: "nutrition", text: "Melhorar a qualidade da alimentação da criança", icon: "🍎" },
        { id: "habits", text: "Fortalecer hábitos e alimentação que contribuam para uma rotina saudável", icon: "🛡️" },
        { id: "generations", text: "Resgatar os conhecimentos preciosos que passaram de geração em geração", icon: "👵" }
      ],
      stepIndicator: "Etapa 11 de 14"
    },
    {
      id: 12,
      type: "result",
      title: "🌿 SEUS INTERESSES FORAM IDENTIFICADOS!",
      description: "Você está buscando algo que muitas mães e famílias procuram: conhecimento simples, receitas tradicionais acolhedoras e uma alimentação que ajude a construir uma rotina mais saudável e segura para os pequenos.",
      metrics: [
        {
          id: "recipes_metric",
          title: "RECEITAS CASEIRAS",
          subtitle: "Interesse em conhecimentos e preparos tradicionais",
          percentage: 98,
          icon: "🌿",
          color: "#10B981"
        },
        {
          id: "nutrition_metric",
          title: "ALIMENTAÇÃO",
          subtitle: "Interesse em enriquecer a alimentação infantil com frutas e nutrientes",
          percentage: 94,
          icon: "🍎",
          color: "#E11D48"
        },
        {
          id: "generations_metric",
          title: "GERAÇÃO EM GERAÇÃO",
          subtitle: "Interesse em resgatar e perpetuar conhecimentos familiares",
          percentage: 96,
          icon: "👵",
          color: "#D97706"
        }
      ],
      conclusion: "E foi exatamente pensando em reunir todo esse carinho, sabedoria e praticidade em um único lugar que nasceu o SOS Infantil.",
      buttonText: "QUERO CONHECER O SOS INFANTIL",
      stepIndicator: "Etapa 12 de 14"
    },
    {
      id: 13,
      type: "micro_commitment",
      question: "VOCÊ GOSTARIA DE TER ESSE CONHECIMENTO REUNIDO EM UM ÚNICO LUGAR?",
      subtitle: "Escolha como você prefere dar esse passo para transformar a rotina do seu filho:",
      options: [
        { id: "learn", text: "Sim, quero aprender e aplicar no dia a dia", icon: "🌿" },
        { id: "recipes", text: "Quero conhecer as receitas tradicionais esquecidas", icon: "🍯" },
        { id: "nutrition", text: "Quero melhorar a alimentação e fortalecer meu filho", icon: "🍎" }
      ],
      stepIndicator: "Etapa 13 de 14"
    },
    {
      id: 14,
      type: "transition",
      badge: "✨ TUDO PRONTO PARA VOCÊ",
      title: "AGORA IMAGINE TER OS SEGREDOS QUE PASSARAM DE MÃE PARA FILHA ORGANIZADOS NO SEU CELULAR.",
      description: "Receitas caseiras, ingredientes naturais, alimentação e conhecimentos tradicionais reunidos em um único material prático, acolhedor e sempre à mão.",
      buttonText: "CONHECER O SOS INFANTIL AGORA",
      stepIndicator: "Etapa 14 de 14"
    }
  ],

  // Dados da Seção de Ingredientes das Nossas Avós
  ingredients: [
    { name: "Mel Puro", icon: "🍯", description: "O clássico carinho para a garganta e base tradicional para misturas acolhedoras." },
    { name: "Canela", icon: "🌿", description: "Aroma envolvente e propriedade reconfortante nos dias mais frios." },
    { name: "Cebola", icon: "🧅", description: "O segredo por trás dos xaropes caseiros mais famosos passados de mãe para filha." },
    { name: "Cravo-da-Índia", icon: "🌰", description: "Pequeno no tamanho, mas poderoso na tradição popular para chás e infusões." },
    { name: "Gengibre", icon: "🫚", description: "Tradicionalmente usado para trazer vitalidade, aconchego e bem-estar." },
    { name: "Cenoura", icon: "🥕", description: "Rica em betacaroteno e base de preparos caseiros nutritivos que as crianças adoram." },
    { name: "Beterraba", icon: "❤️", description: "Símbolo de vigor e energia na alimentação de quem cresceu forte com comida de verdade." },
    { name: "Frutas Frescas", icon: "🍎", description: "Vitaminas, fibras e minerais que formam a verdadeira primeira linha de defesa natural." }
  ],

  // 🌧️ A Vida Antes do SOS Infantil (9 Itens com ❌)
  lifeBefore: [
    "Lembra de uma receita que sua mãe ou avó ensinou, mas esqueceu como fazer.",
    "Quando a criança não está bem, começa a procurar dicas diferentes na internet.",
    "Encontra receitas espalhadas e não sabe quais ingredientes são usados.",
    "Tem vários ingredientes em casa, mas não sabe como eles podem fazer parte dos cuidados e da alimentação.",
    "Quer fortalecer a alimentação da criança, mas fica sem ideias.",
    "Não sabe quais frutas e alimentos podem fazer parte de uma alimentação mais nutritiva.",
    "Fica perdida com as quantidades de comida adequadas para cada idade.",
    "Gostaria de ter os conhecimentos tradicionais da família reunidos em um único lugar.",
    "Acaba esquecendo os pequenos segredos de cuidado que passaram de geração em geração."
  ],

  // 🌿 A Vida Depois do SOS Infantil (9 Itens com ✅)
  lifeAfter: [
    "Receitas caseiras tradicionais reunidas em um único lugar.",
    "Conhece melhor ingredientes como mel, canela, cebola, cravo e gengibre.",
    "Descobre formas tradicionais de aproveitar ingredientes simples que já fazem parte da cozinha.",
    "Aprende mais sobre frutas, vitaminas e nutrientes.",
    "Encontra conteúdos para melhorar a alimentação da criança.",
    "Tem uma tabela prática de quantidade de comida por idade.",
    "Resgata conhecimentos que foram passados de geração em geração.",
    "Tem um material simples para consultar pelo celular.",
    "Mais organização para colocar em prática hábitos de cuidado e alimentação dentro da rotina familiar."
  ],

  // Os 3 Bônus Exclusivos (Com Imagens Oficiais)
  bonuses: [
    {
      id: 1,
      tag: "BÔNUS 01",
      name: "O Poder das Frutas",
      image: "assets/images/bonus-frutas.jpg",
      icon: "🍎",
      subtitle: "Descubra os benefícios de cada fruta e saiba qual escolher para cada necessidade do seu filho",
      description: "Descubra o que existe por trás das frutas que fazem parte da alimentação das crianças: quais são ricas em vitamina C, quais auxiliam a digestão e como incluí-las na rotina de forma irresistível.",
      value: "Vendido separadamente por R$ 47,00",
      priceTag: "HOJE: GRÁTIS"
    },
    {
      id: 2,
      tag: "BÔNUS 02",
      name: "Fortaleça a Imunidade",
      image: "assets/images/bonus-fortalecer.jpg",
      icon: "🥕",
      subtitle: "Descubra hábitos, alimentos e ingredientes naturais que ajudam a fortalecer a rotina saudável da criança",
      description: "Conteúdos práticos para ajudar você a construir uma alimentação rica em nutrientes com ingredientes naturais simples da sua cozinha.",
      value: "Vendido separadamente por R$ 37,00",
      priceTag: "HOJE: GRÁTIS"
    },
    {
      id: 3,
      tag: "BÔNUS 03",
      name: "Tabela de Quantidade por Idade",
      image: "assets/images/bonus-tabela.jpg",
      icon: "📊",
      subtitle: "Referências práticas de porções e quantidades de alimentos para cada fase da infância",
      description: "Uma tabela prática com referências visuais de porções de acordo com a idade (de 1 a 14 anos). Sem mais dúvidas ou insegurança nas refeições.",
      value: "Vendido separadamente por R$ 29,00",
      priceTag: "HOJE: GRÁTIS"
    }
  ],

  // Depoimentos Reais Fornecidos (Imagens Reais)
  testimonials: [
    {
      id: "juliana",
      name: "Juliana Pereira",
      handle: "@juuhpereira.oficial",
      image: "assets/images/depoimento-juliana.png",
      text: "Minha filha não tomou mais nenhum remédio desde que comecei... ela tomava uns 4 tipos e fazia uso de 2 bombinhas. Hoje está bem, sem precisar de nada! Só gratidão por esses ensinamentos! ♡",
      stars: 5,
      likes: 24,
      time: "2 h"
    },
    {
      id: "anna",
      name: "Anna Elisa",
      handle: "@annaelisa.costa",
      image: "assets/images/depoimento-anna.png",
      text: "Isadora há 7 meses não usa nenhum tipo de medicação da farmácia. Viva a Farmacinha Natural! Melhor coisa que fiz.",
      stars: 5,
      likes: 19,
      time: "4 h"
    },
    {
      id: "jana",
      name: "Jana Martins",
      handle: "@jana.martins",
      image: "assets/images/depoimento-jana.png",
      text: "Minha filha há 5 meses não usa nenhum tipo de medicação da farmácia. Viva a esses segredos de geração em geração! Melhor coisa que fiz. Meu marido me agradeceu 💗",
      stars: 5,
      likes: 12,
      time: "2 h"
    },
    {
      id: "camila",
      name: "Camila Souza",
      handle: "@camila.souza28",
      image: "assets/images/depoimento-camila.png",
      text: "Minha filha começou esscorrer o nariz na segunda, comecei a dar a receita de gripe, e ela já está boa. que bom funcionou nessa rapidez, gloria a deus funcionou nela. ♡",
      stars: 5,
      likes: 18,
      time: "1 d"
    }
  ],

  // O que existe dentro do SOS Infantil (Cards de Conteúdo)
  insideSOS: [
    { title: "Receitas caseiras tradicionais", icon: "🌿", desc: "Xaropes, chás e caldos passados de geração em geração com preparo passo a passo." },
    { title: "Ingredientes naturais", icon: "🍯", desc: "Mel, canela, cebola, cravo, gengibre e ervas explicados com clareza." },
    { title: "Conhecimentos de geração em geração", icon: "👵", desc: "A sabedoria das nossas avós resgatada para a vida moderna e corrida." },
    { title: "Alimentação infantil acolhedora", icon: "🍎", desc: "Como usar os alimentos para criar uma rotina forte e cheia de vitalidade." },
    { title: "Ingredientes presentes na sua cozinha", icon: "🥕", desc: "Sem precisar comprar itens caros ou raros: use o que você já tem na despensa." },
    { title: "Preparos tradicionais fáceis", icon: "🍵", desc: "Passo a passo rápido para fazer naqueles momentos em que você mais precisa." },
    { title: "Hábitos que fortalecem a rotina", icon: "🛡️", desc: "Cuidados com o descanso, hidratação e ambiente que evitam correrias." },
    { title: "Material fácil de consultar pelo celular", icon: "📱", desc: "Abra no WhatsApp, baixe em PDF ou consulte direto na palma da mão." }
  ],

  // 4 Passos de Como Usar
  howItWorks: [
    { step: "01", title: "ENCONTRE", desc: "Localize o ingrediente, receita caseira ou desconforto rapidamente pelo índice no celular.", icon: "🔍" },
    { step: "02", title: "APRENDA", desc: "Veja a receita tradicional com medidas simples e instruções claras de como preparar.", icon: "📖" },
    { step: "03", title: "ORGANIZE", desc: "Coloque em prática na rotina com tranquilidade, sem depender de pesquisas confusas na internet.", icon: "🌿" },
    { step: "04", title: "CONSULTE", desc: "Tenha o material guardado no seu celular para consultar sempre que você precisar.", icon: "📱" }
  ],

  // Para Quem É / Para Quem Não É
  whoIsFor: [
    "Mães que gostam de conhecer receitas caseiras tradicionais.",
    "Quem quer resgatar conhecimentos que passaram pela família.",
    "Mães que querem aprender mais sobre o poder dos ingredientes naturais.",
    "Famílias que desejam melhorar e enriquecer a alimentação da criança.",
    "Quem gosta de ter informações organizadas em um único lugar.",
    "Mães que querem a praticidade de consultar tudo direto pelo celular."
  ],

  whoIsNotFor: [
    "Quem procura diagnóstico médico ou avaliação clínica.",
    "Quem espera uma promessa mágica de cura.",
    "Quem pretende substituir consultas e o acompanhamento pediátrico regular.",
    "Quem procura atendimento para situações de emergência grave."
  ],

  // FAQ Accordion
  faqs: [
    {
      q: "O que é exatamente o SOS Infantil?",
      a: "O SOS Infantil é um guia digital em formato de caderno de receitas moderno que reúne receitas caseiras tradicionais, orientações sobre ingredientes naturais (como mel, cebola, limão, gengibre), conteúdos sobre alimentação infantil e a sabedoria passada de geração em geração, tudo organizado de forma prática para consulta imediata."
    },
    {
      q: "É um livro físico ou digital?",
      a: "É um material 100% digital em formato PDF de alta qualidade. Você pode ler diretamente no seu celular, tablet ou computador, ou se preferir, imprimir em casa. Fica disponível instantaneamente sem precisar esperar frete."
    },
    {
      q: "Como e quando recebo o acesso?",
      a: "Assim que seu pagamento for confirmado (no Pix e cartão a liberação ocorre em segundos), você recebe no seu e-mail cadastrado os dados de acesso e o link direto para baixar o SOS Infantil e todos os 3 bônus exclusivos."
    },
    {
      q: "Por quanto tempo terei acesso ao material?",
      a: "O seu acesso é vitalício! Uma vez adquirido, o arquivo é seu para sempre. Você pode salvar no seu celular, na nuvem ou onde preferir e consultar a qualquer momento ao longo dos anos."
    },
    {
      q: "Quais são os 3 bônus inclusos?",
      a: "Você recebe gratuitamente: 1) O Guia 'O Poder das Frutas'; 2) O Guia 'Fortalecer a Alimentação Infantil'; e 3) A 'Tabela de Quantidade de Comida por Idade'. Todos já vêm inclusos na oferta de R$ 17,00."
    },
    {
      q: "O SOS Infantil substitui o médico ou pediatra?",
      a: "Não. O material é exclusivamente educativo e cultural, resgatando tradições populares e de nutrição familiar. Ele não substitui consultas médicas, diagnósticos, tratamentos prescritos ou atendimento de emergência. Sempre consulte um profissional de saúde habilitado para situações clínicas."
    },
    {
      q: "Posso acessar pelo celular?",
      a: "Sim! O material foi diagramado especialmente para ser super legível e confortável em qualquer modelo de smartphone, sem precisar dar zoom ou cansar a vista."
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Você tem 7 dias completos para baixar, ler e conhecer o material. Se por qualquer motivo achar que não fez sentido para a sua família, basta solicitar o reembolso na plataforma de pagamento que seu dinheiro será devolvido integralmente, sem burocracia."
    }
  ]
};

// Exportar globalmente
window.FUNNEL_DATA = FUNNEL_DATA;
