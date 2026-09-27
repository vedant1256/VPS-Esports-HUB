import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vpsesportshub.app',
  appName: 'VPS EsportsHub',
  webDir: 'public',
  server: {
    url: 'https://vps-esportshub-app.vercel.app',
    cleartext: true,
    allowNavigation: [
      'accounts.google.com',
      'accounts.google.co.in',
      'vps-esports-hub.onrender.com'
    ]
  }
};

export default config;
