import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { getNetworkFriendlyName } from '../helpers/getNetworkData';

// const translate = (data, key, t) => t(key, data);
// const translateAppendTitle = (data, key, t) => appendTitle(translate(data, key, t));

const SLEEPEARN_TITLE = 'Sleepearn Finance | KardiaChain';

// Defined here to avoid adding an entry to translation.json where not needed
const PAGE_META = {
  'App-Meta-Title': () => SLEEPEARN_TITLE,
  'Vault-Meta-Title': () => SLEEPEARN_TITLE,
  'App-Meta-Description': () => SLEEPEARN_TITLE,
  'Stakes-Meta-Title': () => SLEEPEARN_TITLE,
  'Stake-Meta-Title': () => SLEEPEARN_TITLE,
  'Claimable-Vault-Meta-Title': () => SLEEPEARN_TITLE,
};

function getPageMeta(t, key, data = {}) {
  const networkName = getNetworkFriendlyName();

  // add common data
  data = { networkName, ...data };

  // handle meta defined above
  if (PAGE_META.hasOwnProperty(key)) {
    return PAGE_META[key](data, key, t);
  }

  // fallback to translation
  return t(key, data);
}

export function usePageMeta() {
  const { t } = useTranslation();

  return {
    getPageMeta: useCallback((key, data) => getPageMeta(t, key, data), [t]),
  };
}
