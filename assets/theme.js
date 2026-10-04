(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const colorMeta = document.querySelector('meta[name="theme-color"]');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const choices = ['system', 'light', 'dark'];
  let choice = root.dataset.theme || 'system';
  function render() {
    if (choice === 'system') delete root.dataset.theme;
    else root.dataset.theme = choice;
    const next = choices[(choices.indexOf(choice) + 1) % choices.length];
    button.textContent = choice === 'system' ? 'auto' : choice;
    button.setAttribute('aria-label', `Color theme: ${choice}. Switch to ${next} mode`);
    colorMeta.content = choice === 'dark' || (choice === 'system' && system.matches) ? '#1c1c1d' : '#ffffff';
  }
  button.addEventListener('click', () => {
    choice = choices[(choices.indexOf(choice) + 1) % choices.length];
    try {
      if (choice === 'system') localStorage.removeItem('dotvion-theme');
      else localStorage.setItem('dotvion-theme', choice);
    } catch (_) {}
    render();
  });
  system.addEventListener('change', render);
  render();
})();
