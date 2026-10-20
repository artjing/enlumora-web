// Language changes only the copy; both languages use the official App Store listing.
const translatedNodes = [...document.querySelectorAll('[data-zh]')];
const englishCopy = translatedNodes.map(node => node.textContent);
function setLanguage(language) {
  const chinese = language === 'zh';
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  document.title = chinese ? '下载 Enlumora — App Store 正式版' : 'Download Enlumora — Available on the App Store';
  translatedNodes.forEach((node, index) => { node.textContent = chinese ? node.dataset.zh : englishCopy[index]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
}
const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(requestedLanguage === 'zh' || (!requestedLanguage && navigator.language.startsWith('zh')) ? 'zh' : 'en');
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
