import { ConnectionType } from 'types';

export type Connection = {
  id: string;
  room: string;
  first: string;
  second: string;
  type: ConnectionType;
};
