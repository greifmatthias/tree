import { Connection, Room } from 'types';

export type AppContextInterface = {
  room?: Room;
  connections: Array<Connection>;
};
