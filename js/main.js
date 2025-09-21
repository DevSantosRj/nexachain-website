document.addEventListener('DOMContentLoaded', function() {
  // Elementos do DOM
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const roadmapTabs = document.querySelectorAll('.roadmap-tab');
  const roadmapContents = document.querySelectorAll('.roadmap-content');
  const animatedElements = document.querySelectorAll('.animate');
  
  // Header com efeito de scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Animar elementos quando visíveis
    animateOnScroll();
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Menu mobile
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
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
  
  // Dark Mode Toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Alternar ícone do dark mode
      const icon = darkModeToggle.querySelector('i');
      if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
    
    // Verificar preferência de dark mode
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      const icon = darkModeToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    }
  }
  
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
          content.classList.remove('animate-fade-in');
        });
        
        // Mostrar o conteúdo correspondente com animação
        roadmapContents[index].style.display = 'block';
        setTimeout(() => {
          roadmapContents[index].classList.add('animate-fade-in');
        }, 10);
      });
    });
    
    // Ativar a primeira tab por padrão
    if (roadmapTabs[0]) {
      roadmapTabs[0].click();
    }
  }
  
  // Animações ao scroll
  function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate');
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        const animationClass = element.dataset.animation || 'animate-fade-in';
        element.classList.add(animationClass);
        element.classList.remove('animate');
      }
    });
  }
  
  // Inicializar animações
  animateOnScroll();
  
  // Contador para estatísticas
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 segundos
      const step = target / (duration / 16); // 60fps
      
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }
  
  // Inicializar contadores
  initCounters();
  
  // Smooth scroll para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
          
          const icon = mobileMenuBtn.querySelector('i');
          if (icon && icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  });
  
  // Inicializar AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
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
        formMessage.className = 'form-message animate-fade-in';
        formMessage.style.padding = '1rem';
        formMessage.style.marginTop = '1rem';
        formMessage.style.borderRadius = '0.5rem';
        formMessage.style.textAlign = 'center';
        formMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        formMessage.style.color = '#4CAF50';
        formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        
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
  
  // Inicializar tooltips
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', function() {
      const tooltipText = this.getAttribute('data-tooltip');
      const tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      tooltipEl.textContent = tooltipText;
      
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      tooltipEl.style.color = '#fff';
      tooltipEl.style.padding = '0.5rem 1rem';
      tooltipEl.style.borderRadius = '0.25rem';
      tooltipEl.style.fontSize = '0.875rem';
      tooltipEl.style.zIndex = '1000';
      tooltipEl.style.opacity = '0';
      tooltipEl.style.transition = 'opacity 0.3s ease';
      
      document.body.appendChild(tooltipEl);
      
      const rect = this.getBoundingClientRect();
      tooltipEl.style.left = rect.left + (rect.width / 2) - (tooltipEl.offsetWidth / 2) + 'px';
      tooltipEl.style.top = rect.top - tooltipEl.offsetHeight - 10 + window.scrollY + 'px';
      
      setTimeout(() => {
        tooltipEl.style.opacity = '1';
      }, 10);
      
      this.addEventListener('mouseleave', function() {
        tooltipEl.style.opacity = '0';
        setTimeout(() => {
          tooltipEl.remove();
        }, 300);
      });
    });
  });
});
