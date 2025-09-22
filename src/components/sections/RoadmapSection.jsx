import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blockchainRoadmapImage from '@/assets/images/blockchain_roadmap.jpg';

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState('current');
  
  const roadmapPhases = {
    completed: [
      {
        date: 'Q2 2025',
        title: 'Conceito e Pesquisa',
        description: 'Desenvolvimento do conceito da NEXACHAIN, pesquisa de tecnologias e elaboração do whitepaper inicial.',
        milestones: [
          'Definição do conceito de blockchain híbrida',
          'Pesquisa sobre consenso PoW + RPCA',
          'Elaboração do whitepaper',
          'Análise de viabilidade técnica'
        ]
      }
    ],
    current: [
      {
        date: 'Q3 2025',
        title: 'Lançamento da Testnet',
        description: 'Implementação de uma rede de teste com 3 nós para validar a estabilidade e performance da rede.',
        milestones: [
          'Implementação do consenso híbrido',
          'Testes de stress do mecanismo de consenso',
          'Testes da DEX e tokenização',
          'Publicação da documentação inicial'
        ]
      }
    ],
    upcoming: [
      {
        date: 'Q4 2025',
        title: 'Abertura do Código-Fonte',
        description: 'O código-fonte completo do projeto será tornado público para a comunidade.',
        milestones: [
          'Publicação do código no GitHub',
          'Integração de Hooks (smart contracts)',
          'Suporte a NFTs (XLS-20)',
          'Programa de Bug Bounty'
        ]
      },
      {
        date: 'Q1 2026',
        title: 'Lançamento da Mainnet',
        description: 'Lançamento oficial da rede principal da NEXACHAIN com 100 nós iniciais.',
        milestones: [
          'Lançamento da rede principal',
          'Venda inicial de 15M tokens NEX',
          'Listagem em exchanges',
          'Expansão da comunidade de desenvolvedores'
        ]
      },
      {
        date: 'Q2 2026',
        title: 'Expansão do Ecossistema',
        description: 'Desenvolvimento e integração de sidechains, incluindo uma sidechain compatível com a EVM.',
        milestones: [
          'Integração de sidechains',
          'Compatibilidade com EVM',
          'Parcerias estratégicas',
          'Fundo de desenvolvimento para projetos'
        ]
      },
      {
        date: '2027',
        title: 'Governança Descentralizada',
        description: 'O primeiro halving da recompensa de mineração ocorrerá, consolidando o modelo deflacionário.',
        milestones: [
          'Primeiro halving',
          'Transição para governança comunitária',
          'Pesquisa de PoS híbrido',
          'Expansão global da rede'
        ]
      }
    ]
  };

  const renderRoadmapItems = (phases) => {
    return phases.map((phase, index) => (
      <div key={index} className="relative">
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center">
              {activePhase === 'completed' ? (
                <CheckCircle className="h-6 w-6 text-primary" />
              ) : (
                <Circle className="h-6 w-6 text-primary" />
              )}
            </div>
            {index < phases.length - 1 && (
              <div className="w-0.5 bg-border grow my-2"></div>
            )}
          </div>
          <div className="pb-8">
            <div className="text-sm font-medium text-primary mb-1">{phase.date}</div>
            <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
            <p className="text-muted-foreground mb-4">{phase.description}</p>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-medium mb-2">Marcos Principais:</h4>
              <ul className="space-y-1">
                {phase.milestones.map((milestone, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="roadmap" className="section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nosso plano de desenvolvimento detalhado para transformar a NEXACHAIN em uma infraestrutura
            líder para finanças descentralizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative mb-8">
                <img 
                  src={blockchainRoadmapImage} 
                  alt="Roadmap de Blockchain" 
                  className="rounded-xl w-full h-auto object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Jornada NEXACHAIN</h3>
                    <p className="text-white/80 text-sm">
                      Do conceito à governança descentralizada, acompanhe nossa evolução.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button 
                  variant={activePhase === 'completed' ? 'default' : 'outline'} 
                  onClick={() => setActivePhase('completed')}
                  className={activePhase === 'completed' ? 'bg-gradient-to-r from-primary to-secondary text-white' : ''}
                >
                  Fases Concluídas
                </Button>
                <Button 
                  variant={activePhase === 'current' ? 'default' : 'outline'} 
                  onClick={() => setActivePhase('current')}
                  className={activePhase === 'current' ? 'bg-gradient-to-r from-primary to-secondary text-white' : ''}
                >
                  Fase Atual
                </Button>
                <Button 
                  variant={activePhase === 'upcoming' ? 'default' : 'outline'} 
                  onClick={() => setActivePhase('upcoming')}
                  className={activePhase === 'upcoming' ? 'bg-gradient-to-r from-primary to-secondary text-white' : ''}
                >
                  Próximas Fases
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-8">
                {activePhase === 'completed' && 'Fases Concluídas'}
                {activePhase === 'current' && 'Fase Atual'}
                {activePhase === 'upcoming' && 'Próximas Fases'}
              </h3>

              <div className="space-y-6">
                {renderRoadmapItems(roadmapPhases[activePhase])}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            O roadmap está sujeito a ajustes com base no feedback da comunidade e avanços tecnológicos.
          </p>
          <Button variant="outline">
            Ver Roadmap Detalhado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
