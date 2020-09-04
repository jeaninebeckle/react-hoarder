import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const itemObjects = response.data;
      const items = [];
      if (itemObjects) {
        Object.keys(itemObjects).forEach((itemId) => {
          itemObjects[itemId].id = itemId;
          items.push(itemObjects[itemId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

export default { getItemsByUid, getSingleItem };
