/* eslint-disable @typescript-eslint/no-unused-vars */
import { DocumentSnapshot, SnapshotOptions } from '@firebase/firestore';
import { lowerCase } from 'lodash';

import { Room, Connection } from 'types';

export const roomConverter = {
  // TODO?
  toFirestore: (_: Room) => ({}),
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
  toFirestore: (_: Connection) => ({}),
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): Connection => {
    const data = snapshot.data(options);

    return {
      type: 0,
      ...data,
      id: snapshot.id,
      first: lowerCase(data?.first),
      second: lowerCase(data?.second),
    } as Connection;
  },
};
