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
    description: "Landing page médica de alta performance desenvolvida para conversão e autoridade.",
    link: "https://www.drfilipevaneli.site/",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" // modern hardware
  },
  {
    id: "elevva-reputation",
    category: "Web Dev",
    title: "Elevva Reputation",
    description: "Sistema de gestão de reputação digital focado em interface limpa e análise de dados.",
    link: "https://elevva-reputation.vercel.app/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" // coding setup
  },
  {
    id: "elevva-marketing-propaganda",
    category: "Web Dev",
    title: "Elevva Marketing",
    description: "Site institucional para apresentação de serviços e propostas comerciais estratégicas.",
    link: "https://site-elevva-mkt-propaganda.vercel.app/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" // minimalist tech
  },
  {
    id: "nova-construtiza",
    category: "Estratégia & Performance",
    title: "Nova Construtiza (Varginha)",
    description: "Estratégia de tráfego pago e posicionamento regional em marketing de performance.",
    isStrategy: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" // business growth data
  }
];
