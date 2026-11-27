import {onCall} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";

initializeApp();

export const healthCheck = onCall(
  {
    region: "asia-northeast1",
    maxInstances: 3,
  },
  () => {
    return {
      message: "Cloud Functions is running!",
    };
  }
);
