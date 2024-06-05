import firestore from '@react-native-firebase/firestore';
import { firebaseDatabase } from './firebaseConnect';
// import { firebaseDatabase } from './reactNativeFirebase/firebaseConnect';

// const firebaseDatabase = firestore();

const readDataFirestoreWithCondition = async (collectionName, fieldName, operator, value) => {
    try {
        // console.log("FIREBASE DB IN FIREBASE CONTROLLER: r", firebaseDatabase)
        const querySnapshot = await firebaseDatabase
            .collection(collectionName)
            .where(fieldName, operator, value)
            .get();
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (error) {
        console.error('Error reading Firestore data:', error);
        return null;
    }
}

const readDataFirestore = async (collectionName) => {
    try {
        // console.log("FIREBASE DB IN FIREBASE CONTROLLER: ", firebaseDatabase)

        const querySnapshot = await firebaseDatabase.collection(collectionName).get();
        //Chuyển data về dạng map
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // console.log("DATA AFTER READ DB: ", data)
        return data;
    } catch (error) {
        console.error('Error reading Firestore data:', error);
        return null;
    }
}

const writeDataFirestore = async (collectionName, data, docId) => {
    try {
        if (docId) {
            await firebaseDatabase.collection(collectionName).doc(docId).set(data, {merge: true});
            console.log('Data updated in Firestore successfully');
            return true;
        } else {
            await firebaseDatabase.collection(collectionName).add(data);
            console.log('Data added to Firestore successfully');
            return true;
        }
    } catch (error) {
        console.error('Error writing data to Firestore:', error);
        return false;
    }
}

const deleteDataFirestore = async (collectionName, docId) => {
    try {
        await firebaseDatabase.collection(collectionName).doc(docId).delete();
        console.log('Data deleted from Firestore successfully');
        return true;
    } catch (error) {
        console.error('Error deleting data from Firestore:', error);
        return false;
    }
}

export {
    readDataFirestoreWithCondition,
    readDataFirestore,
    writeDataFirestore,
    deleteDataFirestore
};
