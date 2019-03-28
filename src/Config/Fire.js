import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCXWQlyhWtAgHzs86aDDeezCWGVUNceock',
    authDomain: 'natukulvruttant-c6639.firebaseapp.com',
    databaseURL: 'https://natukulvruttant-c6639.firebaseio.com',
    projectId: 'natukulvruttant-c6639',
    storageBucket: '',
    messagingSenderId: '569988486477',
}
const fire = firebase.initializeApp(config)

export default fire
