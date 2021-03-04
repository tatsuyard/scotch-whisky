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
