/* eslint-disable @typescript-eslint/no-unused-vars */
import { DocumentSnapshot, SnapshotOptions } from '@firebase/firestore';

import { Room, Connection } from 'types';

export const roomConverter = {
  // TODO?
  toFirestore: (_: Room) => {
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
  toFirestore: (_: Connection) => {
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
