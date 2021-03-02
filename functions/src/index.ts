import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

exports.addAdminClaim = functions.firestore.document("admin_users/{docID}")
    .onCreate((snap) => {
      const newAdminUser = snap.data();
      if (newAdminUser == undefined) return;
      modifyAdmin(newAdminUser.uid, true);
    });

exports.removeAdminClaim = functions.firestore.document("admin_users/{docID}")
    .onDelete((snap) => {
      const deleteAdminUser = snap.data();
      if (deleteAdminUser === undefined) return;
      modifyAdmin(deleteAdminUser.uid, false);
    });
/**
 * @param {string} uid
 * @param {boolean} isAdmin
 */
function modifyAdmin(uid: string, isAdmin: boolean) {
  admin.auth().setCustomUserClaims(uid, {admin: isAdmin}).then(() => {
    console.log("変更しました");
  });
}

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https
    .onRequest(async (req, res) => {
      // Grab the text parameter.
      const original = req.query.text;
      // Push the new message into Firestore using the Firebase Admin SDK.
      const writeResult = await admin.firestore().collection("messages")
          .add({original: original});
      // Send back a message that we've successfully written the message
      res.json({result: `Message with ID: ${writeResult.id} added.`});
    });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
