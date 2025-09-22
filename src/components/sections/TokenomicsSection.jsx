import React from 'react';
import { Coins, TrendingDown, Clock, Flame } from 'lucide-react';

const TokenomicsSection = () => {
  // Dados para o gráfico de distribuição de tokens
  const tokenDistribution = [
    { name: 'Mineração', value: 50, color: '#1A73E8' },
    { name: 'Desenvolvimento', value: 30, color: '#F7B500' },
    { name: 'Investidores', value: 15, color: '#4CAF50' },
    { name: 'Comunidade', value: 5, color: '#9C27B0' }
  ];

  return (
    <section id="tokenomics" className="section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O modelo económico da NEXACHAIN foi projetado para criar escassez e valor crescente ao longo do tempo,
            através de um supply limitado e mecanismos deflacionários.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações sobre o token */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Token NEX</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">Supply Inicial</span>
                  <span>100.000.000 NEX</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">Símbolo</span>
                  <span>NEX</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">Decimais</span>
                  <span>6 (1 NEX = 1.000.000 drops)</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">Tipo</span>
                  <span>Utility Token</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Blockchain</span>
                  <span>NEXACHAIN (Nativa)</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <TrendingDown className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Modelo Deflacionário</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Queima de Taxas</h4>
                    <p className="text-sm text-muted-foreground">
                      Cada transação queima uma taxa base (0,0001 NEX). Com 1000 TPS, aproximadamente 3,15M NEX são queimados por ano.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Halvings de Recompensa</h4>
                    <p className="text-sm text-muted-foreground">
                      Recompensa inicial: 10 NEX por bloco. Halving a cada 1 ano: 10 NEX → 5 NEX → 2,5 NEX, etc.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Queima Adicional</h4>
                    <p className="text-sm text-muted-foreground">
                      0,1% do valor de transações na DEX é queimado. Criação de NFTs e execução de smart contracts podem incluir queima opcional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico de distribuição e projeção */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Distribuição de Tokens</h3>

              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {tokenDistribution.map((item, index) => {
                      // Calcular posição no círculo
                      const total = tokenDistribution.reduce((sum, item) => sum + item.value, 0);
                      let startAngle = 0;
                      for (let i = 0; i < index; i++) {
                        startAngle += (tokenDistribution[i].value / total) * 360;
                      }
                      const endAngle = startAngle + (item.value / total) * 360;
                      
                      // Converter para radianos
                      const startRad = (startAngle - 90) * Math.PI / 180;
                      const endRad = (endAngle - 90) * Math.PI / 180;
                      
                      // Calcular pontos do arco
                      const x1 = 50 + 40 * Math.cos(startRad);
                      const y1 = 50 + 40 * Math.sin(startRad);
                      const x2 = 50 + 40 * Math.cos(endRad);
                      const y2 = 50 + 40 * Math.sin(endRad);
                      
                      // Determinar se o arco é maior que 180 graus
                      const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
                      
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={item.color}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.value}% ({item.value * 1000000} NEX)</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Projeção de Supply</h3>

              <div className="h-64 mb-6">
                <svg viewBox="0 0 500 200" className="w-full h-full">
                  {/* Eixos */}
                  <line x1="50" y1="20" x2="50" y2="180" stroke="currentColor" strokeOpacity="0.2" />
                  <line x1="50" y1="180" x2="480" y2="180" stroke="currentColor" strokeOpacity="0.2" />
                  
                  {/* Rótulos dos eixos */}
                  <text x="25" y="100" textAnchor="middle" dominantBaseline="middle" className="text-xs" fill="currentColor">Supply</text>
                  <text x="265" y="195" textAnchor="middle" className="text-xs" fill="currentColor">Anos</text>
                  
                  {/* Marcações do eixo Y */}
                  <line x1="45" y1="20" x2="50" y2="20" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="40" y="20" textAnchor="end" dominantBaseline="middle" className="text-xs" fill="currentColor">100M</text>
                  
                  <line x1="45" y1="60" x2="50" y2="60" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="40" y="60" textAnchor="end" dominantBaseline="middle" className="text-xs" fill="currentColor">90M</text>
                  
                  <line x1="45" y1="100" x2="50" y2="100" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="40" y="100" textAnchor="end" dominantBaseline="middle" className="text-xs" fill="currentColor">80M</text>
                  
                  <line x1="45" y1="140" x2="50" y2="140" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="40" y="140" textAnchor="end" dominantBaseline="middle" className="text-xs" fill="currentColor">70M</text>
                  
                  <line x1="45" y1="180" x2="50" y2="180" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="40" y="180" textAnchor="end" dominantBaseline="middle" className="text-xs" fill="currentColor">60M</text>
                  
                  {/* Marcações do eixo X */}
                  <line x1="50" y1="180" x2="50" y2="185" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="50" y="195" textAnchor="middle" className="text-xs" fill="currentColor">0</text>
                  
                  <line x1="158" y1="180" x2="158" y2="185" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="158" y="195" textAnchor="middle" className="text-xs" fill="currentColor">2</text>
                  
                  <line x1="266" y1="180" x2="266" y2="185" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="266" y="195" textAnchor="middle" className="text-xs" fill="currentColor">4</text>
                  
                  <line x1="374" y1="180" x2="374" y2="185" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="374" y="195" textAnchor="middle" className="text-xs" fill="currentColor">6</text>
                  
                  <line x1="480" y1="180" x2="480" y2="185" stroke="currentColor" strokeOpacity="0.2" />
                  <text x="480" y="195" textAnchor="middle" className="text-xs" fill="currentColor">8</text>
                  
                  {/* Linha de emissão */}
                  <path 
                    d="M50,20 C158,30 266,60 374,80 Q480,100 480,120" 
                    fill="none" 
                    stroke="#1A73E8" 
                    strokeWidth="2"
                  />
                  
                  {/* Linha de queima */}
                  <path 
                    d="M50,20 C158,40 266,70 374,120 Q480,170 480,180" 
                    fill="none" 
                    stroke="#F7B500" 
                    strokeWidth="2"
                  />
                  
                  {/* Área entre as linhas (supply total) */}
                  <path 
                    d="M50,20 C158,30 266,60 374,80 Q480,100 480,120 L480,180 Q374,170 266,140 C158,110 50,90 50,20 Z" 
                    fill="url(#gradient)" 
                    fillOpacity="0.2"
                  />
                  
                  {/* Gradiente para a área */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1A73E8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#F7B500" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Legendas */}
                  <circle cx="380" cy="30" r="4" fill="#1A73E8" />
                  <text x="390" y="30" dominantBaseline="middle" className="text-xs" fill="currentColor">Emissão</text>
                  
                  <circle cx="380" cy="50" r="4" fill="#F7B500" />
                  <text x="390" y="50" dominantBaseline="middle" className="text-xs" fill="currentColor">Queima</text>
                </svg>
              </div>

              <p className="text-sm text-muted-foreground">
                Projeção estimada do supply total de NEX ao longo do tempo. Após aproximadamente 4 anos (2 halvings),
                a queima deve superar a emissão, tornando o NEX deflacionário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
