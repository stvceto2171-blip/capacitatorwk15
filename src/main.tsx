// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 1. Ionic global CSS – MUST be here
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// 2. PWA elements (camera, etc.)
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 3. IonApp MUST wrap the render (this is the missing piece)
import { IonApp } from '@ionic/react';

defineCustomElements();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <IonApp>
      <App />
    </IonApp>
  </React.StrictMode>
);
