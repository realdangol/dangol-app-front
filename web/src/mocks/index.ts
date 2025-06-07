async function initMSW() {
  if (typeof window === 'undefined') {
    const { worker } = await import('./server');
    worker.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();
  }
}

export { initMSW };
