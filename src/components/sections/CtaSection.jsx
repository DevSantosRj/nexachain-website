import React from 'react';
import { ArrowRight, Github, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      
      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A73E8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Junte-se à Revolução <span className="gradient-text">NEXACHAIN</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Seja parte do futuro das finanças descentralizadas. Contribua com o desenvolvimento,
            explore a tecnologia ou prepare-se para investir na NEXACHAIN.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Desenvolvedores</h3>
              <p className="text-muted-foreground mb-4">
                Contribua com código, teste a rede ou construa aplicações na NEXACHAIN.
              </p>
              <Button variant="outline" className="w-full">
                GitHub
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Documentação</h3>
              <p className="text-muted-foreground mb-4">
                Explore a documentação técnica, tutoriais e guias da NEXACHAIN.
              </p>
              <Button variant="outline" className="w-full">
                Documentos
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comunidade</h3>
              <p className="text-muted-foreground mb-4">
                Junte-se à comunidade NEXACHAIN para discussões e atualizações.
              </p>
              <Button variant="outline" className="w-full">
                Discord
              </Button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-muted-foreground mb-6">
              Inscreva-se para receber atualizações sobre o lançamento da NEXACHAIN e oportunidades exclusivas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="h-12 bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap">
                Inscrever-se
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
