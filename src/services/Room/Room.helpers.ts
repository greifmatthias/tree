import { DocumentSnapshot, SnapshotOptions } from '@firebase/firestore';

import { Room, Connection } from 'types';

export const roomConverter = {
  // TODO?
  toFirestore: (data: Room) => {
    return {};
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): Room => {
    const data = snapshot.data(options);

    return {
      id: snapshot.id,
      ...data,
    } as Room;
  },
};

export const connectionConverter = {
  // TODO?
  toFirestore: (data: Connection) => {
    return {};
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): Connection => {
    const data = snapshot.data(options);

    return {
      id: snapshot.id,
      ...data,
    } as Connection;
  },
};
