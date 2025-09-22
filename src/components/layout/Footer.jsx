import React from 'react';
import { Twitter, Github, Mail, Globe } from 'lucide-react';
import nexachainLogo from '@/assets/images/nexachain_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={nexachainLogo} alt="NEXACHAIN Logo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold">NEXACHAIN</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Uma blockchain híbrida de código aberto que combina a eficiência do XRP Ledger com a robustez do Bitcoin.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/NexaChain" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/nexachain" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:contact@nexachain.org" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://nexachain.org" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Tecnologia</a></li>
              <li><a href="#tokenomics" className="text-muted-foreground hover:text-primary transition-colors">Tokenomics</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#whitepaper" className="text-muted-foreground hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#github" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="mailto:contact@nexachain.org" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@nexachain.org
                </a>
              </li>
              <li className="flex items-center">
                <Twitter className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="https://twitter.com/NexaChain" className="text-muted-foreground hover:text-primary transition-colors">
                  @NexaChain
                </a>
              </li>
              <li className="flex items-center">
                <Github className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="https://github.com/nexachain" className="text-muted-foreground hover:text-primary transition-colors">
                  github.com/nexachain
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="https://nexachain.org" className="text-muted-foreground hover:text-primary transition-colors">
                  nexachain.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} NEXACHAIN. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
