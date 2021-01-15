import firebase from "firebase/app";

export type Brand = {
    id?: string,  //ドキュメント識別用ID(自動採番)
    name: string,
    description: string,
}

export type Review ={
    id?: string,
    title: string,
    comment: string,
    brand: firebase.DocumentReference,
    createdAt: firebase.firestore.FieldValue | null
  }
  