import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nexachainLogo from '@/assets/images/nexachain_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitorar o scroll para adicionar sombra na navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alternar entre modo claro e escuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Links de navegação
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { 
      name: 'Tecnologia', 
      href: '#technology',
      dropdown: [
        { name: 'Consenso Híbrido', href: '#hybrid-consensus' },
        { name: 'Arquitetura', href: '#architecture' },
        { name: 'Segurança', href: '#security' },
      ]
    },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Desenvolvedores', href: '#developers' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={nexachainLogo} alt="NEXACHAIN Logo" className="h-10 w-auto mr-3" />
          <span className="text-xl font-bold">NEXACHAIN</span>
        </a>

        {/* Links de navegação - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <>
                  <button className="flex items-center text-foreground hover:text-primary transition-colors">
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border hidden group-hover:block">
                    <div className="py-1">
                      {link.dropdown.map((subLink, subIndex) => (
                        <a
                          key={subIndex}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Botões de ação - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline">Documentação</Button>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white">
            Começar
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="mr-2"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menu mobile expandido */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto py-4">
            {navLinks.map((link, index) => (
              <div key={index} className="py-2">
                {link.dropdown ? (
                  <div className="mb-2">
                    <div className="font-medium mb-1">{link.name}</div>
                    <div className="pl-4 border-l-2 border-muted">
                      {link.dropdown.map((subLink, subIndex) => (
                        <a
                          key={subIndex}
                          href={subLink.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="w-full">
                Documentação
              </Button>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                Começar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
