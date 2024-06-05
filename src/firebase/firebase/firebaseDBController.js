import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    deleteDoc, 
    collection, 
    query, 
    where, 
    getDocs,
    firestore
  } from "./firebaseDBConnect";
  
//   const firestore = getFirestore();
  
  const readDataDBFirestoreWithCondition = async (collectionName, fieldName, value) => {
    try {
      const q = query(collection(firestore, collectionName), where(fieldName, "==", value));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      console.log("Lỗi khi truy vấn dữ liệu:", error);
      return null;
    }
  };
  
  const readDataDBFirestore = async (collectionName, documentId) => {
    try {
      const docRef = doc(firestore, collectionName, documentId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return docSnapshot.data();
      } else {
        return null;
      }
    } catch (error) {
      console.log("ERROR", error);
      return null;
    }
  };

  const readDataDBFirestoreCollection = async (collectionName) => {
    try {
        // console.log("FIREBASE DB IN FIREBASE CONTROLLER: ", firebaseDatabase)
        const ref = collection(firestore, collectionName);
        const querySnapshot = await getDocs(ref);
        
        //Chuyển data về dạng map
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // console.log("DATA AFTER READ DB: ", data)
        return data;
    } catch (error) {
        console.error('Error reading Firestore data:', error);
        return null;
    }
}
  
  const writeDataDBFirestore = async (collectionName, documentId, data) => {
    try {
      const docRef = doc(firestore, collectionName, documentId);
      await setDoc(docRef, data);
      console.log("save data firebase successfully");
      return true;
    } catch (err) {
      console.log("save data firebase failed", err);
      return false;
    }
  };
  
  const deleteDataDBFirestore = async (collectionName, documentId) => {
    try {
      const docRef = doc(firestore, collectionName, documentId);
      await deleteDoc(docRef);
      console.log('delete data firebase successfully');
      return true;
    } catch (err) {
      console.log('delete data firebase failed', err);
      return false;
    }
  };
  
  const updateDataDBFirestore = async (collectionName, documentId, data) => {
    try {
      const docRef = doc(firestore, collectionName, documentId);
      await updateDoc(docRef, data);
      return true;
    } catch(e) {
      return false;
    }
  };
  
  export {
    readDataDBFirestoreWithCondition,
    readDataDBFirestore,
    readDataDBFirestoreCollection,
    writeDataDBFirestore,
    deleteDataDBFirestore,
    updateDataDBFirestore
  };