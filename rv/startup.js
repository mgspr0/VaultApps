(() => {
  const loading = document.getElementById('startup');
  const message = document.getElementById('startup-message');
  const retry = document.getElementById('startup-retry');
  const timer = setTimeout(() => fail('Startup is taking longer than expected. Check your connection and try again.'), 30000);
  let complete = false;
  function fail(text) {
    if (complete) return;
    clearTimeout(timer);
    loading.dataset.state = 'error';
    message.textContent = text;
    retry.hidden = false;
  }
  retry.addEventListener('click', () => location.reload());
  window.rateVaultStartup = {
    fail: () => fail('RateVault could not start. Check your connection and try again.'),
    ready: () => {
      complete = true;
      clearTimeout(timer);
      loading.remove();
    },
  };
  // Includes download failures before the Flutter bootstrap script can run.
  window.addEventListener('error', (event) => {
    if (event.target?.tagName === 'SCRIPT') window.rateVaultStartup.fail();
  }, true);
})();
