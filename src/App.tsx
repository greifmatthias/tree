import React, { FC } from 'react';

import { AppProvider } from 'context';
import { HomePage } from 'pages';

export const App: FC = () => {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};
