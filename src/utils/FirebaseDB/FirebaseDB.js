/* eslint-disable class-methods-use-this */

import { firebase } from '@firebase/app';

import firebaseConfig from './FirebaseDB.constants';
import '@firebase/firestore';
import '@firebase/auth';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
const auth = firebase.auth();

export class FirebaseDB {
  constructor() {}

  /**
   * Get data from Firebase
   * @param {table} - name of table from firebase https://console.firebase.google.com/project/rsclone-8fee8/firestore/data~2FUsers~2FEkGveQJ1jdNb6xJauWEy.
   * @param {list} - arrayList where data from Firebase will be saved.
   */
  async getData(table) {
    const list = [];
    await db
      .collection(table)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const dataObject = doc.data();
          dataObject.id = doc.id;
          list.push(dataObject);
        });
      });
    return list;
  }

  /**
   * Get data by ID from Firebase
   * @param {table} - name of table from firebase https://console.firebase.google.com/project/rsclone-8fee8/firestore/data~2FUsers~2FEkGveQJ1jdNb6xJauWEy.
   * @param {id} - id of item from UI.
   */
  async getDataById(table, id) {
    let item = {};
    await db
      .collection(table)
      .doc(id)
      .get()
      .then((snapshot) => {
        item = snapshot.data();
        this.itemByID = item;
      });
    return item;
  }

  /**
   * Add data to Firebase
   * @param {eventElement} - element where will be called click/submit event.
   * @param {table} - table where will be added data.
   * @param {dataObject} - data object which will be added to Firebase: method with structure need to take from Firebase.utils.js.
   */
  addDataToDB(table, dataObject) {
    db.collection(table).add(dataObject);
  }

  /**
   * Update data to Firebase
   * @param {eventElement} - element where will be called click/submit event.
   * @param {table} - table where will be added data.
   * @param {id} - id of element which need to update.
   * @param {dataObject} - data object which will be added to Firebase: method with structure need to take from Firebase.utils.js.
   */
  updateDataInDB(table, id, dataObject) {
    db.collection(table).doc(id).update(dataObject);
  }

  /**
   * Delete item from Firebase
   * @param {eventElement} - element where will be called click/submit event.
   * @param {table} - here is table where will be removed an item.
   * @param {id} - id of element (you should render to HTML data from firebase with ID - object with data and ID for each element is used in getData method)
   */
  deleteItem(table, id) {
    db.collection(table).doc(id).delete();
  }

  /**
   * Delete items from Firebase
   * @param {classItem} - class of elements which will help to take node elements for removing data.
   * @param {id} - id of element (you should render to HTML data from firebase with ID - object with data and ID for each element is used in getData method)
   */
  deleteItems(classItem, id) {
    const data = document.querySelectorAll(`${classItem}`);
    data.forEach((item) => {
      if (item.getAttribute('data-id') === id) {
        item.remove();
      }
    });
  }
}

export { db, auth };
