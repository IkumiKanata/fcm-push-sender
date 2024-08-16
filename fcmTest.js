const admin = require("firebase-admin");
require('dotenv').config();
const serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const registrationToken = process.env.REGISTRATION_TOKEN;

const message = {
  notification: {
    title: "テスト通知",
    body: "テストのプッシュ通知です",
  },
  data: {
    testData: "通知に含めたいデータなど",
  },
  token: registrationToken,
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });
