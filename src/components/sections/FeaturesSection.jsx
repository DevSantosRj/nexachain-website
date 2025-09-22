import React from 'react';
import { 
  ArrowRightLeft, 
  Coins, 
  Code, 
  CreditCard, 
  Zap, 
  Shield, 
  Globe, 
  FileText 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import tokenizationImage from '@/assets/images/tokenization.jpg';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ArrowRightLeft className="h-6 w-6" />,
      title: 'DEX Nativa',
      description: 'Exchange descentralizada integrada com order books e Automated Market Makers (AMMs).',
      color: 'primary'
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: 'Tokenização',
      description: 'Suporte a tokens fungíveis (stablecoins) e NFTs (padrão XLS-20).',
      color: 'secondary'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Smart Contracts',
      description: 'Hooks baseados em WebAssembly para lógica personalizada e eficiente.',
      color: 'primary'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Pagamentos Avançados',
      description: 'Escrows, payment channels e multi-hop payments para casos de uso complexos.',
      color: 'secondary'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Alta Performance',
      description: '~1500 TPS com confirmações em 3-5 segundos para uma experiência fluida.',
      color: 'primary'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Segurança Robusta',
      description: 'Proteção contra ataques de 51%, double-spending e outros vetores de ataque.',
      color: 'secondary'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Interoperabilidade',
      description: 'Sidechains e bridges para integração com outros ecossistemas blockchain.',
      color: 'primary'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Governança On-Chain',
      description: 'Sistema de propostas e votação para evolução descentralizada do protocolo.',
      color: 'secondary'
    }
  ];

  return (
    <section id="features" className="section bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Funcionalidades Principais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A NEXACHAIN oferece um conjunto completo de funcionalidades para suportar finanças descentralizadas,
            pagamentos globais e tokenização de ativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:border-primary/50 group"
            >
              <div className={`feature-icon text-${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Tokenização de <span className="gradient-text">Ativos Reais</span>
              </h3>
              
              <p className="text-lg mb-6">
                A NEXACHAIN permite a tokenização de ativos do mundo real, como imóveis, commodities, 
                arte e muito mais, trazendo-os para o mundo blockchain com segurança e transparência.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>Tokenização de imóveis para fracionamento e liquidez</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>Representação de commodities e ativos físicos</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>NFTs para arte, colecionáveis e direitos digitais</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>Stablecoins lastreadas em moedas fiduciárias</p>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-primary to-secondary text-white w-fit">
                Explorar Casos de Uso
              </Button>
            </div>
            
            <div className="relative h-full min-h-[300px] lg:min-h-0">
              <img 
                src={tokenizationImage} 
                alt="Tokenização de Ativos" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center p-8 lg:p-12">
                <div className="max-w-xs">
                  <h4 className="text-white text-xl font-bold mb-2">Transforme Ativos em Tokens</h4>
                  <p className="text-white/80 text-sm">
                    Aumente a liquidez, reduza custos de transação e abra novas possibilidades para seus ativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
