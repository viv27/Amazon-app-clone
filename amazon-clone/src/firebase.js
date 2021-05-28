import firebase from 'firebase'

const firebaseConfig = {
     apiKey: "AIzaSyBZ3U4akRmvbPAg0tEuSwBY-l35OWS8omY",
  authDomain: "clone-b7225.firebaseapp.com",
  projectId: "clone-b7225",
  storageBucket: "clone-b7225.appspot.com",
  messagingSenderId: "600164514571",
  appId: "1:600164514571:web:b9e84426129567bd1c400e"
  };

firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export default { auth }