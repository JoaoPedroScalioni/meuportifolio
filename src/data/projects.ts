export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  link?: string;
  image?: string;
  isStrategy?: boolean;
}

export const projects: Project[] = [
  {
    id: "dr-filipe-vaneli",
    category: "Web Dev",
    title: "Dr. Filipe Vaneli",
    description: "Landing page focada em autoridade e conversão para serviços de saúde, com design limpo e navegação intuitiva.",
    link: "https://www.drfilipevaneli.site/",
    image: "https://images.unsplash.com/photo-1576091160550-2173599ab148?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "elevva-reputation",
    category: "Web Dev",
    title: "Elevva Reputation",
    description: "Sistema especializado em gestão e análise de reputação digital, seguindo princípios de design moderno e funcionalidade.",
    link: "https://elevva-reputation.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "elevva-marketing-propaganda",
    category: "Web Dev",
    title: "Elevva Marketing Propaganda",
    description: "Interface estratégica para apresentação de serviços de marketing e propostas comerciais.",
    link: "https://site-elevva-mkt-propaganda.vercel.app/",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "nova-construtiza",
    category: "Estratégia & Performance",
    title: "Nova Construtiza (Varginha)",
    description: "Atuação estratégica focada no setor de materiais de construção, desenvolvendo campanhas de tráfego pago e presença digital regional.",
    isStrategy: true
  }
];
