document.addEventListener('DOMContentLoaded', function() {
  // Elementos do DOM
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const roadmapTabs = document.querySelectorAll('.roadmap-tab');
  const roadmapContents = document.querySelectorAll('.roadmap-content');
  
  // Header com efeito de scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Menu mobile
  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Alternar ícone do menu
      const icon = mobileMenuBtn.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Navegação ativa
  function setActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNav);
  
  // Smooth scroll para links de âncora
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
          
          const icon = mobileMenuBtn.querySelector('i');
          if (icon && icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  });
  
  // Tabs do Roadmap
  if (roadmapTabs.length && roadmapContents.length) {
    roadmapTabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
        // Remover classe ativa de todas as tabs
        roadmapTabs.forEach(t => t.classList.remove('active'));
        
        // Adicionar classe ativa à tab clicada
        tab.classList.add('active');
        
        // Esconder todos os conteúdos
        roadmapContents.forEach(content => {
          content.style.display = 'none';
        });
        
        // Mostrar o conteúdo correspondente
        roadmapContents[index].style.display = 'block';
      });
    });
    
    // Ativar a primeira tab por padrão
    roadmapTabs[0].click();
  }
  
  // Animações ao scroll
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
  
  function checkAnimations() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 50) {
        element.style.visibility = 'visible';
      }
    });
  }
  
  // Inicializar animações
  animatedElements.forEach(element => {
    element.style.visibility = 'hidden';
  });
  
  window.addEventListener('scroll', checkAnimations);
  window.addEventListener('load', checkAnimations);
  
  // Contador para estatísticas
  const counters = document.querySelectorAll('.counter');
  
  function startCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 segundos
      const increment = target / (duration / 16); // 60fps
      
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  }
  
  // Iniciar contadores quando a seção estiver visível
  const statsSection = document.querySelector('.hero-stats');
  
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCounters();
        observer.disconnect();
      }
    });
    
    observer.observe(statsSection);
  }
  
  // Formulário de contato
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio de formulário
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      setTimeout(() => {
        const formMessage = document.createElement('div');
        formMessage.className = 'form-message';
        formMessage.style.padding = '16px';
        formMessage.style.marginTop = '16px';
        formMessage.style.backgroundColor = '#4CAF50';
        formMessage.style.color = '#fff';
        formMessage.style.borderRadius = '4px';
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        
        contactForm.appendChild(formMessage);
        contactForm.reset();
        
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        setTimeout(() => {
          formMessage.remove();
        }, 5000);
      }, 1500);
    });
  }
});
