import firebase from 'firebase/app';

export type Brand = {
  id?: string; //ドキュメント識別用ID(自動採番)
  name: string;
  description: string;
  images?: string;
  createdAt: firebase.firestore.FieldValue | null;
};

export type Review = {
  id?: string;
  title: string;
  comment: string;
  brand: string;
  createdAt: firebase.firestore.FieldValue | null;
};
