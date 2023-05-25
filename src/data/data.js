import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Novo Electric Dike",
  subtitle: "Adapt 2.0",
  img: heroimg,
  btntext: "Explore Mais",
  videos: [
    { imgsrc: vcover1 },
    { imgsrc: vcover2 },
    { imgsrc: vcover3 },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Dike Na Moda",
  items: [
    {
      id: "0p0x1",
      title: "Dike Addapt BB 2.0",
      text: "Tênis masculino",
      rating: "1k",
      btn: "Comprar | ver carrinho",
      img: psale2,
      price: "990",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Dike Martine Rose",
      text: "Tênis masculino",
      rating: "4k",
      btn: "Comprar | ver carrinho",
      img: psale1,
      price: "799",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Dike Smart Shoe 2.0",
      text: "Tênis masculino",
      rating: "5k",
      btn: "Comprar | ver carrinho",
      img: psale3,
      price: "780",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "DIKE AIR COM ESCOLHAS ILIMITADAS",
  text: "Nosso propósito é fazer o mundo avançar. Agimos construindo comunidades, protegendo nosso planeta e aumentando o acesso ao esporte.",
  btn: "Explore Mais",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "DIKE SNEAKERS AIR LANCING SHOES",
  text: "O brilho vive no Tênis Dike Sneakers Air Lancing, a bola de basquete OG que dá um novo toque ao que você conhece melhor: sobreposições costuradas duráveis, acabamentos limpos e a quantidade perfeita de brilho para fazer você brilhar.",
  btn: "Explore Mais",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Dike",
  items: [
    {
      id: "0M0x1",
      title: "Dike Air Low",
      text: "Tênis masculino",
      rating: "1k+",
      btn: "Comprar | ver carrinho",
      img: product7,
      price: "799",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Dike Air Green",
      text: "Tênis masculino",
      rating: "5k+",
      btn: "Comprar | ver carrinho",
      img: product2,
      price: "490",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Dike Addapt BB Rose",
      text: "Tênis masculino",
      rating: "1k+",
      btn: "Comprar | ver carrinho",
      img: product3,
      price: "789",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Dike Air",
      text: "Tênis masculino",
      rating: "2k",
      btn: "Comprar | ver carrinho",
      img: product4,
      price: "999",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Dike Adapt BB Pro",
      text: "Tênis masculino",
      rating: "1k",
      btn: "Comprar | ver carrinho",
      img: product5,
      price: "590",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "PR3",
      text: "Tênis masculino",
      rating: "9k",
      btn: "Comprar | ver carrinho",
      img: product6,
      price: "870",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Dike Multi Shoe",
      text: "Tênis masculino",
      rating: "7k",
      btn: "Comprar | ver carrinho",
      img: product1,
      price: "490",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Dike Max",
      text: "Tênis feminino",
      rating: "9k",
      btn: "Comprar | ver carrinho",
      img: product9,
      price: "989",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Dike Max-x",
      text: "Tênis feminino",
      rating: "3k",
      btn: "Comprar | ver carrinho",
      img: product10,
      price: "999",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Dike Lime",
      text: "Tênis masculino",
      rating: "5k",
      btn: "Comprar | ver carrinho",
      img: product12,
      price: "780",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Dike Black Max",
      text: "Tênis masculino",
      rating: "4k",
      btn: "Comprar | ver carrinho",
      img: product11,
      price: "890",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Dike ZoomY Max",
      text: "Tênis masculino",
      rating: "1k",
      btn: "Comprar | ver carrinho",
      img: product8,
      price: "790",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Estreia de Jayson Tatum",
      text: "Modelo de assinatura da Jordan Brand nos últimos anos, Jayson Tatum estará desenhando o Air lux Jordan 37 nesta temporada antes de potencialmente obter seu primeiro tênis de assinatura com o Jumpman, que ele disse estar em desenvolvendo recentemente no seu Twitter.",
      img: "",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "2/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Saiba Mais"
    },
    {
      title: "Bro’s Dike Zoom Freak 4",
      text: "Chegando na hora certa para o outono, esta próxima versão do Zoom Freak 4 se inspira no Dia de Ação de Graças. Laranja e marrom, são usados em toda a cobertura, vestindo as partes não banhadas em tons de cinza.",
      img: "",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Saiba Mais"
    },
    {
      title: "Dike Air Max Plus",
      text: "O Dike Air Max Plus teve a revelação de várias cores nos últimos meses. E ao embarcarmos oficialmente na temporada de outono, um conjunto adicional foi adicionado ao calendário, incluindo esta recém-revelada paleta de cinza e laranja.",
      img: "",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Saiba Mais"
    },
    {
      title: "Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular série de AJ1s com o popular bloqueio de cores com o laranja original Yellow Toe. A paleta foi revelada pelo músico Zach Myers, quase quatro anos depois, os fanáticos da Jordan finalmente terão sua chance de lançar o GR.",
      img: "",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "1/5",
      by: "Sneaker News",
      btn: "Saiba Mais"
    },
    {
      title: "Dike Air Zoom GT Cut 2",
      text: "A paleta do Zoom GT Cut 2 será a primeira a ser lançada nesta sexta-feira, para os membros da Dike Nation World Wide, enquanto as cores de Sabrina Ionescus está marcada para 13 de outubro. Enquanto isso, aproveite as imagens oficiais de ambas as cores abaixo.",
      img: "",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "5/5",
      by: "Jared Ebanks",
      btn: "Saiba Mais"
    },
    {
      title: "Puma Announces Breanna",
      text: "Pela primeira vez em mais de uma década, uma silhueta de basquete exclusiva está sendo feita para uma das melhores e mais brilhantes estrelas da WNBA, a medalhista de ouro olímpica e superestrela do Seattle Storm, Breanna Stewart. Puma Stewie 1 Quiet Fire estará disponível nesta sexta-feira.",
      img: "",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Saiba Mais"
    },
    {
      title: "Dike Air Force Orange Color",
      text: "De alternâncias de renda a reformas inspiradas na cidade, o Dike Air Force 1 apresentou uma série de modificações exclusivas. Aqui, porém, a marca está reduzindo algumas coisas, optando por uma colorway simples comandada principalmente por preto e laranja laser.",
      img: "",
      time: "6 Days",
      like: "2/5",
      by: "Micael Le",
      btn: "Saiba Mais"
    },
    {
      title: "Hello",
      text: "O mundo da Sanrio é vasto e repleto de muitos personagens icônicos. Poucos na família, no entanto, rivalizam com a imensa influência de Hello Kitty, que já foi mascote de tudo, desde mercadorias da Pringles até colaborações de tênis.",
      img: "",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Saiba Mais"
    },
    {
      title: "Low Expands",
      text: "A estética noturna vista aqui é aplicada aos painéis de couro preto caídos da parte superior e construção de malha perfurada da língua, enquanto o acabamento real e os Swooshes do antepé fornecem intriga adicional à paleta escura.",
      img: "",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Saiba Mais"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "Sobre Dike"},{title: "Ajuda"},{title: "Compania"} ],
  links: [
    [
      {link: "Notícias"},
      {link: "Carreira"},
      {link: "Investidores"},
      {link: "Propósito"},
      {link: "Sustentabilidade"},
    ],
    [
      {link: "Pedidos"},
      {link: "Frete e entregas"},
      {link: "Opções de Pagamento"},
      {link: "Gift Card Balance"},
      {link: "Fale conosco"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promoções"},
      {link: "Conte sua História"},
      {link: "Assinar"},
      {link: "Dike Jouneral"},
      {link: "Envie-nos sua opinião"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };