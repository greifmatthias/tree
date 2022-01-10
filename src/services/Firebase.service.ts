import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

import { firebaseConfig } from 'config';

export class FirebaseService {
  private app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
  }

  getDatabase = () => getFirestore();
}

const S = new FirebaseService();
export const firebaseService = Object.freeze(S);
