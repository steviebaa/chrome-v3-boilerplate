import { inject } from './content-scripts/inject';

const run = async (tabId: number) => {
  chrome.scripting.executeScript({
    target: { tabId },
    func: inject,
  });
};

const serviceWorker = async () => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const { url, active } = tab;

    if (!url || !active || changeInfo.status !== 'loading') {
      return;
    }

    console.log('onUpdated');
    run(tabId);
  });
};

serviceWorker();
