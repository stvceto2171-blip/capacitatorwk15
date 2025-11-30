// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IonApp } from '@ionic/react';

// THESE 10 LINES ARE REQUIRED — without them the tab bar stays in the bottom-left
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

// PWA elements (camera, etc.)
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements();   // window argument is optional

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* THIS <IonApp> wrapper is REQUIRED at the root */}
    <IonApp>
      <App />
    </IonApp>
  </React.StrictMode>
);
