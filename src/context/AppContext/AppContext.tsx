import React, { useContext, createContext, FC } from 'react';

import { useQueryParams, useRoom } from 'hooks';

import { AppContextInterface } from './AppContext.types';

export const AppContext = createContext<AppContextInterface>({
  connections: [],
});

export const AppProvider: FC<any> = ({ children }) => {
  const { room: roomSlug } = useQueryParams();
  const { room, connections } = useRoom(roomSlug);

  return <AppContext.Provider value={{ room, connections }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
