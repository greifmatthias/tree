import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, query, Unsubscribe, where } from '@firebase/firestore';

import { firebaseService } from 'services';
import { Connection, Room } from 'types';

import { connectionConverter, roomConverter } from './useRoom.helpers';

const DB_NAMES = {
  rooms: 'rooms',
  connections: 'connections',
};

export const useRoom = (slug: string) => {
  const [room, setRoom] = useState<Room | undefined>();
  const [connections, setConnections] = useState<Array<Connection>>([]);

  //   Get Room by slug
  useEffect(() => {
    let uConnections: Unsubscribe | undefined;
    const db = firebaseService.getDatabase();

    const qRoom = query(collection(db, DB_NAMES.rooms), where('slug', '==', slug)).withConverter(roomConverter);

    getDocs(qRoom).then(sRooms => {
      if (!sRooms.size) setRoom(undefined);

      const r = sRooms.docs[0].data();

      setRoom(r);

      const qConnections = query(collection(db, DB_NAMES.connections), where('room', '==', r.id)).withConverter(connectionConverter);

      uConnections = onSnapshot(qConnections, sConnections => {
        sConnections.docChanges().forEach(doc => {
          if (doc.type === 'added') setConnections(x => [...x, doc.doc.data()]);
        });
      });
    });

    return () => {
      if (uConnections) uConnections();
    };
  }, [slug]);

  return { room, connections };
};
