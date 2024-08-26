// src/types/tronweb.d.ts
interface TronWeb {
  ready: boolean;
  defaultAddress: {
    base58: string;
    hex: string;
  };
  // Ajoutez d'autres propriétés de TronWeb si nécessaire
}

interface Window {
  tronWeb: TronWeb;
}
