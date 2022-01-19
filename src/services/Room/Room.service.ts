import { collection, Firestore, addDoc } from '@firebase/firestore';
import { lowerCase } from 'lodash';

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
}
