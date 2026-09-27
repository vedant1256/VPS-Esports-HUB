import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vpsesportshub.app',
  appName: 'VPS EsportsHub',
  webDir: 'public',
  // NO server.url - load local files first so Capacitor bridge is available
  // After native Google login, we redirect to the Vercel dashboard
  server: {
    allowNavigation: [
      'vps-esportshub-app.vercel.app',
      'vps-esports-hub.onrender.com',
      'accounts.google.com',
      'accounts.google.co.in'
    ]
  },
  plugins: {
    GoogleSignIn: {
      clientId: '623388941554-5pobvg9g2us1mea4p47bg24ekl9k5on3.apps.googleusercontent.com'
    }
  }
};

export default config;
