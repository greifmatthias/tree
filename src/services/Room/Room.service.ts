import { collection, Firestore, query, where, getDocs } from '@firebase/firestore';

import { Connection, Room } from 'types';

import { firebaseService } from '../Firebase.service';
import { connectionConverter, roomConverter } from './Room.helpers';

const DB_NAMES = {
  rooms: 'rooms',
  connections: 'connections',
};

export class RoomService {
  private db: Firestore;

  constructor() {
    this.db = firebaseService.getDatabase();
  }

  //   Get Room by slug
  getRoom = async (slug: string): Promise<Room | undefined> => {
    const q = query(collection(this.db, DB_NAMES.rooms), where('slug', '==', slug)).withConverter(roomConverter);

    const snapshot = await getDocs(q);

    if (!snapshot.size) return undefined;

    return snapshot.docs[0].data();
  };

  //   Get Connections of a Room
  getConnections = async (roomId: string): Promise<Array<Connection>> => {
    const q = query(collection(this.db, DB_NAMES.connections), where('room', '==', roomId)).withConverter(connectionConverter);

    const snapshot = await getDocs(q);

    return snapshot.docs.map(x => x.data());
  };
}
