export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  link?: string;
  isStrategy?: boolean;
}

export const projects: Project[] = [
  {
    id: "dr-filipe-vaneli",
    category: "Web Dev",
    title: "Dr. Filipe Vaneli",
    description: "Landing page focada em autoridade e conversão para serviços de saúde, com design limpo e navegação intuitiva.",
    link: "https://www.drfilipevaneli.site/"
  },
  {
    id: "elevva-reputation",
    category: "Web Dev",
    title: "Elevva Reputation",
    description: "Sistema especializado em gestão e análise de reputação digital, seguindo princípios de design moderno e funcionalidade.",
    link: "https://elevva-reputation.vercel.app/"
  },
  {
    id: "elevva-marketing-propaganda",
    category: "Web Dev",
    title: "Elevva Marketing Propaganda",
    description: "Interface estratégica para apresentação de serviços de marketing e propostas comerciais.",
    link: "https://site-elevva-mkt-propaganda.vercel.app/"
  },
  {
    id: "nova-construtiza",
    category: "Estratégia & Performance",
    title: "Nova Construtiza (Varginha)",
    description: "Estratégia faturista de marketing digital para materiais de construção, focada em vendas regionais e posicionamento contra grandes marketplaces.",
    isStrategy: true
  }
];
