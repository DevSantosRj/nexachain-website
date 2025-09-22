// Variável global para armazenar as traduções do idioma atual
let currentTranslations = {};

// Função para definir o idioma
function setLanguage(lang) {
  // Salvar a preferência de idioma no localStorage
  localStorage.setItem('nexachain_language', lang);
  
  // Carregar as traduções do idioma selecionado
  switch (lang) {
    case 'pt-br':
      currentTranslations = translations_pt_br;
      break;
    case 'en':
      currentTranslations = translations_en;
      break;
    case 'es':
      currentTranslations = translations_es;
      break;
    case 'zh':
      currentTranslations = translations_zh;
      break;
    default:
      currentTranslations = translations_pt_br; // Idioma padrão
  }
  
  // Atualizar a interface com o novo idioma
  updateInterface();
  
  // Atualizar o seletor de idioma
  updateLanguageSelector(lang);
}

// Função para obter uma tradução
function t(key) {
  return currentTranslations[key] || key;
}

// Função para atualizar a interface com o idioma atual
function updateInterface() {
  // Atualizar elementos com atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (currentTranslations[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.getAttribute('placeholder')) {
          element.setAttribute('placeholder', currentTranslations[key]);
        } else {
          element.value = currentTranslations[key];
        }
      } else {
        element.innerHTML = currentTranslations[key];
      }
    }
  });
}

// Função para atualizar o seletor de idioma
function updateLanguageSelector(lang) {
  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.value = lang;
  }
  
  // Atualizar classes ativas nos botões de idioma (se existirem)
  document.querySelectorAll('.language-button').forEach(button => {
    if (button.getAttribute('data-lang') === lang) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Inicializar o sistema de idiomas quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se há uma preferência de idioma salva
  const savedLanguage = localStorage.getItem('nexachain_language');
  
  // Detectar o idioma do navegador se não houver preferência salva
  const browserLanguage = savedLanguage || navigator.language || navigator.userLanguage;
  
  // Definir o idioma inicial
  let initialLanguage = 'pt-br'; // Idioma padrão
  
  // Mapear o idioma do navegador para um dos idiomas suportados
  if (browserLanguage) {
    if (browserLanguage.startsWith('pt')) {
      initialLanguage = 'pt-br';
    } else if (browserLanguage.startsWith('en')) {
      initialLanguage = 'en';
    } else if (browserLanguage.startsWith('es')) {
      initialLanguage = 'es';
    } else if (browserLanguage.startsWith('zh')) {
      initialLanguage = 'zh';
    }
  }
  
  // Definir o idioma inicial
  setLanguage(savedLanguage || initialLanguage);
  
  // Configurar o seletor de idioma
  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.addEventListener('change', function() {
      setLanguage(this.value);
    });
  }
  
  // Configurar botões de idioma
  document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang'));
    });
  });
});
