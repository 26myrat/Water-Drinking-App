import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyAEaWEdLEEhiF9Jy9GkLIbWFFteycCYSuc",
  authDomain: "water-drinker-app.firebaseapp.com",
  databaseURL: "https://water-drinker-app-default-rtdb.firebaseio.com",
  projectId: "water-drinker-app",
  storageBucket: "water-drinker-app.appspot.com",
  messagingSenderId: "599277835873",
  appId: "1:599277835873:web:4ed71493182fee38a4fc20"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
