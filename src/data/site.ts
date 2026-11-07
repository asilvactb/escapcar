/**
 * All content comes from the current escapcar.pt site or the 2025 brand book.
 * Nothing here is invented. Items marked TODO(confirm) need the owner's OK.
 */

export const COMPANY = {
  name: "Escapcar",
  since: 1977,
  tagline: "A dar voz aos automóveis",
  claim: ["O teu carro fala.", "Nós só melhoramos o sotaque."],
  email: "geral@escapcar.pt",
  mobile: "+351 932 717 644",
  clientArea: "http://stock.escapcar.pt/",
  hours: [
    { days: "Segunda a sexta", time: "08:30–12:30 · 14:00–18:30" },
    { days: "Sábado", time: "08:30–12:30" },
    { days: "Domingo", time: "Encerrado" },
  ],
};

export type Store = {
  slug: string;
  name: string;
  label: string;
  address: string[];
  phone: string;
  maps: string;
  hq?: boolean;
};

export const STORES: Store[] = [
  {
    slug: "cabreiros",
    name: "Braga · Cabreiros",
    label: "Escapes ligeiros e pesados · Serviços rápidos",
    address: ["Av.ª do Labriosque, 62 – Cabreiros", "4705-768 Braga"],
    phone: "+351 253 914 210",
    maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Escapcar, Avenida do Labriosque 62, Cabreiros, 4705-768 Braga"),
    hq: true,
  },
  {
    slug: "guimaraes",
    name: "Guimarães",
    label: "Escapes · Pneus",
    address: ["Rua da Ponte, 58 – S. Lourenço de Selho", "4800-534 Guimarães"],
    phone: "+351 253 552 385",
    maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Escapcar, Rua da Ponte 58, São Lourenço de Selho, 4800-534 Guimarães"),
  },
];

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;

/** Services the current site says Escapcar offers (about page + store labels). */
export const SERVICES = [
  { n: "01", title: "Limpeza de filtros de partículas", text: "Limpamos o filtro de partículas (FAP/DPF) para recuperar o desempenho, sem ter de comprar um filtro novo." },
  { n: "02", title: "Reconstrução de filtros de partículas", text: "Quando a limpeza não chega, reconstruímos o filtro. Substituição por filtro novo quando é a melhor opção." },
  { n: "03", title: "Escapes de pesados", text: "Reparação e fabrico de escapes para camiões e pesados, na oficina de Cabreiros." },
  { n: "04", title: "Escapes e catalisadores", text: "Diagnóstico, reparação e substituição do sistema de escape completo, do coletor à ponteira." },
  { n: "05", title: "Pneus e serviços rápidos", text: "Pneus, mudanças de óleo e filtros e travões, em serviço rápido." },
  { n: "06", title: "Apoio à inspeção", text: "Preparação do carro para a inspeção, com analisador de gases disponível para os clientes." },
  { n: "07", title: "Fabrico próprio", text: "Escapes e silenciosos feitos por medida para clássicos, máquinas agrícolas e industriais." },
];

/** Featured: DPF cleaning and rebuilding. */
export const DPF = {
  title: "Limpeza e reconstrução de filtros de partículas",
  intro:
    "O filtro de partículas retém a fuligem dos motores diesel e queima-a em regenerações automáticas. Quando entope, o carro perde potência, entra em modo de segurança e gasta mais. Antes de trocar o filtro, avaliamos se pode ser limpo ou reconstruído.",
  steps: [
    { n: "01", t: "Diagnóstico", d: "Verificamos o filtro, os sensores de temperatura e de pressão diferencial e a causa do entupimento." },
    { n: "02", t: "Limpeza", d: "Removemos a fuligem e as cinzas acumuladas para o filtro voltar a respirar." },
    { n: "03", t: "Reconstrução", d: "Se a limpeza não for suficiente, reconstruímos o filtro." },
    { n: "04", t: "Substituição", d: "Quando o filtro não tem recuperação, montamos um filtro novo, com 2 anos de garantia." },
  ],
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  img: string;
  intro: string;
  points: string[];
  range?: string[];
  brands?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "escapes",
    name: "Escapes",
    short: "Silenciosos, flexíveis, coletores e acessórios de montagem.",
    img: "/img/produtos/escapes.jpg",
    intro:
      "Do motor até à saída de escape, temos uma linha completa do sistema de escape para todas as marcas e modelos, com peças homologadas.",
    points: [
      "Um escape com fugas aumenta o desgaste do motor e o consumo de combustível.",
      "A instalação de escapes não homologados é proibida.",
      "Recomendamos verificar o escape e as emissões duas vezes por ano.",
    ],
    range: ["Silenciosos e linhas de escape", "Flexíveis em aço inox", "Coletores de escape", "Acessórios de montagem"],
    brands: ["Walker", "Bosal", "Klarius", "Veneporte"],
  },
  {
    slug: "catalisadores",
    name: "Catalisadores",
    short: "Específicos e universais, para gasolina e diesel.",
    img: "/img/produtos/catalisadores.jpg",
    intro:
      "O catalisador transforma os gases mais nocivos do escape (HC, CO e NOx) em CO₂, vapor de água e azoto. Tem de funcionar bem para proteger o motor e passar na inspeção.",
    points: [
      "Catalisadores específicos para cada modelo e catalisadores universais.",
      "Para gasolina e para diesel.",
      "Temos analisador de gases para verificar as emissões do seu carro.",
    ],
    range: ["Catalisadores específicos", "Catalisadores universais"],
    brands: ["Walker", "BM Catalysts", "Klarius", "Bosal"],
  },
  {
    slug: "filtros-particulas",
    name: "Filtros de partículas",
    short: "Limpeza, reconstrução e substituição de FAP/DPF.",
    img: "/img/hero-fap.jpg",
    intro:
      "O filtro de partículas retém a fuligem dos motores diesel e queima-a em regenerações automáticas. É essencial para o carro e para o ambiente.",
    points: [
      "Limpeza de filtros de partículas.",
      "Reconstrução de filtros de partículas.",
      "Filtros específicos para substituição, incluindo sistemas com aditivo Eolys/Cerina.",
      "Sensores de temperatura e de pressão diferencial.",
    ],
    range: ["Limpeza", "Reconstrução", "Substituição", "Eolys / Cerina"],
    brands: ["Walker", "BM Catalysts"],
  },
  {
    slug: "ponteiras",
    name: "Ponteiras",
    short: "Uma enorme variedade de ponteiras em aço inox.",
    img: "/img/produtos/ponteiras.jpg",
    intro:
      "Somos especialistas em linhas diretas e aplicação de ponteiras. Materiais de alta qualidade para o visual do seu carro, para todas as marcas e modelos.",
    points: ["Ponteiras em aço inox.", "Linhas diretas em inox fabricadas na Escapcar Braga.", "Catálogo para escolher o modelo."],
  },
  {
    slug: "ganchos-reboque",
    name: "Ganchos de reboque",
    short: "Ganchos específicos por veículo e porta-bicicletas.",
    img: "/img/produtos/ganchos-reboque.jpg",
    intro:
      "Ganchos de reboque específicos para cada veículo, com o conjunto elétrico adequado, para caravanas, barcos, reboques e bicicletas.",
    points: [
      "Removíveis: com parafusos, horizontais com alavanca ou verticais com chave.",
      "Ganchos homologados.",
      "Porta-bicicletas para 1 a 4 bicicletas.",
    ],
    brands: ["Bosal", "Aragon"],
  },
  {
    slug: "sensores-sondas",
    name: "Sensores e sondas",
    short: "Sondas lambda e sensores do sistema de escape.",
    img: "/img/produtos/sensores-sondas.jpg",
    intro:
      "Os sensores monitorizam os pontos de funcionamento dos componentes. Uma sonda lambda em mau estado aumenta a poluição e o consumo.",
    points: [
      "Sondas lambda de zircónio e de titânio.",
      "Sensores de temperatura para filtros de partículas.",
      "Sensores de pressão diferencial.",
      "Recomenda-se verificar a sonda lambda pelo menos a cada 30.000 km.",
    ],
  },
  {
    slug: "scr-aditivos",
    name: "SCR e aditivos",
    short: "Sistemas SCR, AdBlue e aditivos para combustível.",
    img: "/img/produtos/flexiveis.jpg",
    intro:
      "O sistema SCR (redução catalítica seletiva) usa AdBlue para reduzir os NOx dos motores diesel. Os aditivos ajudam a manter o motor e o filtro de partículas limpos.",
    points: [
      "Componentes SCR e AdBlue.",
      "Aditivo de limpeza: ajuda a regeneração do filtro de partículas.",
      "Aditivo de prevenção: ajuda a manter válvulas, pistões e injetores limpos.",
    ],
    brands: ["Walker"],
  },
  {
    slug: "fabrico-proprio",
    name: "Fabrico próprio",
    short: "Escapes por medida para clássicos, pesados e máquinas.",
    img: "/img/fabrico.jpg",
    intro:
      "Fabricamos silenciosos e escapes por medida, a partir de amostras, modelos, protótipos ou desenhos. Soluções para clássicos, competição e máquinas.",
    points: ["Linhas de escape diretas em inox, feitas na Escapcar Braga.", "Prazos de execução e entrega rápidos."],
    range: [
      "Clássicos",
      "Camiões e pesados",
      "Tratores e máquinas agrícolas",
      "Máquinas industriais e florestais",
      "Construção civil",
      "Geradores, compressores e empilhadores",
    ],
  },
];

export const PARTNERS = [
  { name: "Walker", note: "Parceiro desde o início da empresa. Garantia de 2 anos." },
  { name: "Bosal", note: "Parceiro desde 2012. Garantia de 2 anos." },
  { name: "BM Catalysts", note: "Parceiro desde 2013." },
  { name: "Klarius", note: "Escapes, catalisadores e sondas lambda." },
  { name: "Veneporte", note: "Fabricante nacional de escapes." },
];

export const CATALOGUES = [
  { name: "Walker", what: "Escapes, catalisadores e filtros de partículas", url: "https://www.walkercatalogue.eu/" },
  { name: "BM Catalysts", what: "Catalisadores e filtros de partículas", url: "https://www.bmcatalysts.co.uk/" },
  { name: "Klarius", what: "Escapes", url: "https://webcat.klarius.eu/" },
];

export const HISTORY = [
  { year: "1962", text: "Nasce a Bortex, em Lisboa, uma das empresas que estão na origem do grupo." },
  { year: "1976", text: "Nasce a Rescape, em Faro." },
  { year: "1977", text: "António de Carvalho regressa a Braga e funda a Escapcar." },
  { year: "1985", text: "Abre o primeiro armazém de escapes, na Maia." },
  { year: "1993", text: "Expansão a Guimarães e a Viana do Castelo." },
  { year: "2020", text: "As marcas separam-se: a Imporfase fica com a importação e o armazém, a Escapcar com as oficinas." },
];
