import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vpsesportshub.app',
  appName: 'VPS EsportsHub',
  webDir: 'public',
  server: {
    url: 'https://vps-esportshub-app.vercel.app',
    cleartext: true,
    allowNavigation: ['accounts.google.com', 'accounts.google.co.in']
  },
  android: {
    overrideUserAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
  }
};

export default config;
