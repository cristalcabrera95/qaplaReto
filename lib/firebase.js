import * as firebase from 'firebase'

class Firebase {
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyDiTkl4458IndMe5pRqy0mUgPn6gEWWdMU",
            authDomain: "react-native-b544f.firebaseapp.com",
            databaseURL: "https://react-native-b544f.firebaseio.com",
            projectId: "react-native-b544f",
            storageBucket: "",
            messagingSenderId: "774654050955",
            appId: "1:774654050955:web:aae377db1415dc4d728a8e"
        });
    }
}
module.exports = Firebase