/* global self */
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDpmloevd899Y8SPj-_ubuWsQ2n8YcQuAk",
  authDomain: "letest-khw.firebaseapp.com",
  projectId: "letest-khw",
  storageBucket: "letest-khw.firebasestorage.app",
  messagingSenderId: "462594287401",
  appId: "1:462594287401:web:6f0a45de98efc0e5a8b938",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
