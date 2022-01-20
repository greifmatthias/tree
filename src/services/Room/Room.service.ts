import { collection, Firestore, addDoc, updateDoc, doc } from '@firebase/firestore';
import { lowerCase } from 'lodash';
import { Connection } from 'types';

import { firebaseService } from '../Firebase.service';

const DB_NAMES = {
  rooms: 'rooms',
  connections: 'connections',
};

export class RoomService {
  private db: Firestore;

  constructor() {
    this.db = firebaseService.getDatabase();
  }

  //   Create new Connection
  createConnection = async (roomId: string, first: string, second: string, type: number): Promise<void> => {
    await addDoc(collection(this.db, DB_NAMES.connections), {
      room: roomId,
      first: lowerCase(first),
      second: lowerCase(second),
      type,
      date: new Date(),
    });
  };

  //   Update existing Connection
  updateConnection = async (connection: Connection, type: number): Promise<void> => {
    updateDoc(doc(this.db, DB_NAMES.connections, connection.id ), {
      ...connection,
      type,
      date: new Date()
    });
  };
}
