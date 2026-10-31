function load(file, target) {
  fetch(file)
    .then(r => r.text())
    .then(html => {
      document.getElementById(target).innerHTML = html;
      applyLang(getLang());
    });
}

function getLang() {
  return localStorage.getItem('site-lang') || 'en';
}

const translations = {
  en: {
    home: 'Home',
    quotes: 'Quotes',
    projects: 'Project Ideas',
    about: 'About',
    contact: 'Contact',
    heroTitle: 'Li Dongyang',
    heroText: 'A Computer Science student at BiUH who enjoys writing code by hand and building websites step by step.',
    btnQuotes: 'Quotes',
    btnProjects: 'Project Ideas',
    btnContact: 'Contact Me',
    siteContent: 'What is on this site',
    siteQuotes: 'Quotes — 20 lines worth reading twice',
    siteProjects: 'Project Ideas — 5 small projects I want to build',
    siteAbout: 'About Me — who I am and how to reach me',
    quotesTitle: 'Quotes',
    quotesLead: 'Some lines worth reading twice, with who said them and where.',
    projectTitle: 'Project Ideas',
    projectLead: 'Five small projects I want to build, and who each one is for.',
    ideas: 'Ideas',
    targetUsers: 'Who each one is for',
    buildSteps: 'How I will build it',
    aboutTitle: 'About Me',
    aboutText: "I'm Li Dongyang, a Computer Science student at BiUH. This website is a practice project for Web Technologies, and every line of code was written by hand.",
    learning: 'What I am learning',
    mdnText: 'I find most of my technical answers on MDN Web Docs.',
    contactTitle: 'Contact',
    contactText: 'Feel free to email me at dongyang@example.com.',
    footerText: 'Handwritten by Li Dongyang · Web Technologies 2026'
  },
  zh: {
    home: '首页',
    quotes: '名言',
    projects: '项目想法',
    about: '关于',
    contact: '联系我',
    heroTitle: '李冬阳',
    heroText: 'BiUH 计算机科学专业学生，一个喜欢手写代码、慢慢搭建网站的人。',
    btnQuotes: '名言',
    btnProjects: '项目想法',
    btnContact: '联系我',
    siteContent: '这个网站有什么',
    siteQuotes: '名言 —— 20 条值得读两遍的话',
    siteProjects: '项目想法 —— 我想做的 5 个小项目',
    siteAbout: '关于我 —— 我是谁，怎么找到我',
    quotesTitle: '名言',
    quotesLead: '一些值得读两遍的话，附上出处。',
    projectTitle: '项目想法',
    projectLead: '我想做的 5 个小项目，以及它们分别是为谁而做。',
    ideas: '想法清单',
    targetUsers: '目标用户',
    buildSteps: '实现步骤',
    aboutTitle: '关于我',
    aboutText: '我是李冬阳，BiUH 计算机科学专业的学生。这个网站是 Web Technologies 课程的练习作品，每一行代码都是手写的。',
    learning: '我正在学习',
    mdnText: '我大部分技术问题都在 MDN Web Docs 上找答案。',
    contactTitle: '联系我',
    contactText: '欢迎给我发邮件：dongyang@example.com',
    footerText: '由李冬阳手工编写 · Web Technologies 2026'
  }
};

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'en' ? 'EN' : '中';
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  localStorage.setItem('site-lang', lang);
}

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'lang-toggle') {
    applyLang(getLang() === 'en' ? 'zh' : 'en');
  }
});

load('nav.html', 'site-header');
load('footer.html', 'site-footer');
