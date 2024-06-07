

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import OnboardingProcess from "./components/OnboardingProcess";


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>

      <OnboardingProcess />
  </React.StrictMode>
);

