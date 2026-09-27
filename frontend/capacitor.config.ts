import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vpsesportshub.app',
  appName: 'VPS EsportsHub',
  webDir: 'out',
  plugins: {
    GoogleSignIn: {
      clientId: '623388941554-5pobvg9g2us1mea4p47bg24ekl9k5on3.apps.googleusercontent.com',
    }
  },
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'accounts.google.com',
      'accounts.google.co.in',
      'vps-esports-hub.onrender.com'
    ]
  }
};

export default config;
