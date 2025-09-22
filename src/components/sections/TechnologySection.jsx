import React from 'react';
import { Shield, Zap, Leaf, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import blockchainNodesImage from '@/assets/images/blockchain_nodes.jpg';
import blockchainNetworkImage from '@/assets/images/blockchain_network.png';

const TechnologySection = () => {
  return (
    <section id="technology" className="section bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Tecnologia Inovadora</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A NEXACHAIN resolve o trilema da blockchain através de uma arquitetura técnica inovadora
            que combina o melhor de duas tecnologias comprovadas.
          </p>
        </div>

        <Tabs defaultValue="consensus" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="consensus">Consenso Híbrido</TabsTrigger>
              <TabsTrigger value="architecture">Arquitetura</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
            </TabsList>
          </div>

          {/* Consenso Híbrido */}
          <TabsContent value="consensus" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Consenso Híbrido <span className="gradient-text">PoW + RPCA</span>
                </h3>
                <p className="text-lg mb-6">
                  A NEXACHAIN utiliza um mecanismo de consenso híbrido que combina o melhor de dois mundos:
                  a descentralização do Proof of Work (PoW) com a eficiência do Ripple Protocol Consensus Algorithm (RPCA).
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Proof of Work (PoW)</h4>
                      <p className="text-muted-foreground">
                        Qualquer nó pode minerar blocos resolvendo um desafio SHA-256, garantindo descentralização ao estilo Bitcoin.
                        A dificuldade é ajustada dinamicamente para manter blocos a cada ~3-5 segundos.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Ripple Protocol Consensus Algorithm (RPCA)</h4>
                      <p className="text-muted-foreground">
                        Validadores confiáveis verificam propostas de blocos, garantindo consenso rápido e sem forks.
                        A lista de validadores é aberta, permitindo que nós com reputação se juntem.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Eficiência Energética</h4>
                      <p className="text-muted-foreground">
                        O PoW é usado apenas para propor blocos, não para validação completa, reduzindo o consumo energético
                        em comparação com o Bitcoin (~0,1-1 TWh/ano estimado para 1000 nós vs. 150 TWh/ano do BTC).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>
                <img 
                  src={blockchainNetworkImage} 
                  alt="Rede Blockchain" 
                  className="relative rounded-xl w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          </TabsContent>

          {/* Arquitetura */}
          <TabsContent value="architecture" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>
                <img 
                  src={blockchainNodesImage} 
                  alt="Nós da Blockchain" 
                  className="relative rounded-xl w-full h-auto object-cover shadow-lg"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-6">
                  Arquitetura <span className="gradient-text">Técnica</span>
                </h3>
                <p className="text-lg mb-6">
                  A NEXACHAIN é baseada no servidor open-source rippled do XRP Ledger, com modificações
                  para suportar o consenso híbrido e o modelo económico deflacionário.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Código-Fonte</h4>
                      <p className="text-muted-foreground">
                        Baseado no rippled (licença ISC), com modificações para suportar o token NEX,
                        o consenso híbrido e o modelo deflacionário.
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>
{`bool proofOfWork(const std::string& blockData, int difficulty, uint64_t& nonce, std::string& hash) {
    std::string target(difficulty, '0');
    while (true) {
        std::stringstream ss;
        ss << blockData << nonce;
        std::string input = ss.str();
        unsigned char hashBuf[SHA256_DIGEST_LENGTH];
        SHA256((unsigned char*)input.c_str(), input.length(), hashBuf);
        std::stringstream hashStream;
        for (int i = 0; i < SHA256_DIGEST_LENGTH; i++)
            hashStream << std::hex << std::setw(2) << std::setfill('0') << (int)hashBuf[i];
        hash = hashStream.str();
        if (hash.substr(0, difficulty) == target)
            return true;
        nonce++;
    }
    return false;
}`}
                      </code>
                    </pre>
                    <p className="text-xs text-muted-foreground mt-2">Exemplo de implementação do PoW na NEXACHAIN</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Performance <span className="gradient-text">Superior</span>
                </h3>
                <p className="text-lg mb-6">
                  A NEXACHAIN oferece alta performance e escalabilidade, mantendo a segurança e descentralização
                  através do seu consenso híbrido inovador.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">~1500</div>
                    <div className="text-lg font-medium">Transações por Segundo</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Alta capacidade herdada do XRP Ledger
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">3-5s</div>
                    <div className="text-lg font-medium">Tempo de Bloco</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Confirmações rápidas para melhor experiência
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                    <div className="text-lg font-medium">Nós Suportados</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Escalabilidade para uma rede global
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">0.1-1</div>
                    <div className="text-lg font-medium">TWh/ano</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Consumo energético estimado
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-medium mb-4">Comparação de Performance</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Bitcoin</span>
                        <span className="text-muted-foreground">~7 TPS</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: '0.5%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Ethereum</span>
                        <span className="text-muted-foreground">~15-30 TPS</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: '2%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>XRP Ledger</span>
                        <span className="text-muted-foreground">~1500 TPS</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>NEXACHAIN</span>
                        <span className="text-muted-foreground">~1500 TPS</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    A NEXACHAIN mantém a alta performance do XRP Ledger enquanto adiciona a segurança e descentralização do Bitcoin.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Segurança */}
          <TabsContent value="security" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-medium mb-4">Proteção Contra Ataques</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Ataque de 51%</h5>
                        <p className="text-sm text-muted-foreground">
                          O consenso híbrido dificulta o controle da rede por um único minerador, pois requer tanto poder computacional (PoW) quanto confiança da rede (RPCA).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Double-Spending</h5>
                        <p className="text-sm text-muted-foreground">
                          O RPCA garante consenso sem forks, eliminando a possibilidade de double-spending mesmo com confirmações rápidas.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Ataques Sybil</h5>
                        <p className="text-sm text-muted-foreground">
                          A combinação de PoW e validadores confiáveis torna ataques Sybil economicamente inviáveis.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">DDoS</h5>
                        <p className="text-sm text-muted-foreground">
                          Mecanismos de proteção contra sobrecarga da rede, incluindo taxas dinâmicas e limites de transação.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-6">
                  Segurança <span className="gradient-text">Robusta</span>
                </h3>
                <p className="text-lg mb-6">
                  A NEXACHAIN implementa múltiplas camadas de segurança para proteger a rede contra diversos tipos de ataques,
                  garantindo a integridade e confiabilidade da blockchain.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Auditorias de Segurança</h4>
                    <p className="text-muted-foreground">
                      O código da NEXACHAIN será auditado por ferramentas automatizadas como Slither e por firmas especializadas
                      como Trail of Bits antes do lançamento da mainnet.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Programa de Bug Bounty</h4>
                    <p className="text-muted-foreground">
                      Um programa de recompensas por bugs será implementado para incentivar a comunidade a identificar e reportar
                      vulnerabilidades de segurança.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Atualizações de Segurança</h4>
                    <p className="text-muted-foreground">
                      A equipe de desenvolvimento estará constantemente monitorando e implementando atualizações de segurança
                      para manter a rede protegida contra novas ameaças.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologySection;
