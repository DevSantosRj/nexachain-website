import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nexachainLogo from '@/assets/images/nexachain_logo.png';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Conteúdo de texto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">
              <span className="gradient-text">NEXACHAIN:</span> <br />
              <span className="text-white">Conectando o Futuro das Finanças</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 slide-up" style={{ animationDelay: '0.2s' }}>
              Uma blockchain híbrida de código aberto que combina a eficiência do XRP Ledger com a robustez do Bitcoin para finanças descentralizadas rápidas, escaláveis e sustentáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 text-lg">
                Começar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Ler o Whitepaper
              </Button>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">~1500</p>
                <p className="text-gray-400 text-sm">TPS</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">3-5s</p>
                <p className="text-gray-400 text-sm">Confirmação</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">100M</p>
                <p className="text-gray-400 text-sm">Supply Total</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">Híbrido</p>
                <p className="text-gray-400 text-sm">Consenso</p>
              </div>
            </div>
          </div>
          
          {/* Imagem/Animação */}
          <div className="lg:w-1/2 flex justify-center slide-left" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src={nexachainLogo} 
                alt="NEXACHAIN Logo" 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain"
              />
              
              {/* Círculos animados */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border border-primary/30 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] border border-secondary/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] border border-primary/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Forma de onda na parte inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
          fill="currentColor"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,283.09,63.45,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
