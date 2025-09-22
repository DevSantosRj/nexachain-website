import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hybridBlockchainImage from '@/assets/images/hybrid_blockchain_concept.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Sobre o Projeto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça a NEXACHAIN, uma blockchain inovadora que resolve o trilema da blockchain
            através de um consenso híbrido e um modelo económico deflacionário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>
            <img 
              src={hybridBlockchainImage} 
              alt="Blockchain Híbrida" 
              className="relative rounded-xl w-full h-auto object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Rede Ativa</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Testnet em execução</div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Uma Nova Geração de <span className="gradient-text">Blockchain Híbrida</span>
            </h3>
            
            <p className="text-lg mb-6">
              A NEXACHAIN é uma blockchain descentralizada que combina a eficiência e as funcionalidades avançadas do XRP Ledger (XRPL) com a robustez e descentralização do Bitcoin.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <p>
                  <span className="font-medium">Consenso Híbrido:</span> Combinação de Proof of Work (PoW) para seleção de líderes de bloco com o Ripple Protocol Consensus Algorithm (RPCA) para validação eficiente.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <p>
                  <span className="font-medium">Modelo Deflacionário:</span> Supply inicial de 100 milhões de tokens NEX com mecanismos de queima de taxas e halvings anuais.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <p>
                  <span className="font-medium">Alta Performance:</span> ~1500 transações por segundo (TPS) com confirmações em 3-5 segundos.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <p>
                  <span className="font-medium">Sustentabilidade:</span> Consumo energético 100-1000x menor que o Bitcoin, mantendo a segurança e descentralização.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                Explorar a Tecnologia
              </Button>
              <Button variant="outline">
                Ver o Roadmap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
