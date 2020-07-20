import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3_T_Of_FqUUqUZxj3L28DnLvxQRyeLD0",
    authDomain: "goalcoach-1a1ad.firebaseapp.com",
    databaseURL: "https://goalcoach-1a1ad.firebaseio.com",
    projectId: "goalcoach-1a1ad",
    storageBucket: "goalcoach-1a1ad.appspot.com",
    messagingSenderId: "1057137793703",
    appId: "1:1057137793703:web:354ad713a4c96415409982",
    measurementId: "G-DEX5LFWPDJ"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');