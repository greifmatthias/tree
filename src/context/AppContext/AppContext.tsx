import React, { useContext, createContext, useState, useEffect, FC } from 'react';

import { useQueryParams } from 'hooks';
import { RoomService } from 'services';
import { Room } from 'types';

import { AppContextInterface } from './AppContext.types';

export const AppContext = createContext<AppContextInterface>({});

export const AppProvider: FC = ({ children }) => {
  const roomService = new RoomService();

  const [room, setRoom] = useState<Room | undefined>();

  const { room: roomSlug } = useQueryParams();

  useEffect(() => {
    console.log(roomSlug);
    if (roomSlug) roomService.getRoom(roomSlug).then(setRoom);
  }, [roomSlug]);

  return <AppContext.Provider value={{ room }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
