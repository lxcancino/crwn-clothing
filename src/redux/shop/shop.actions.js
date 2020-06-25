import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase-utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispath) => {
    const collectionRef = firestore.collection('collections');
    dispath(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispath(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispath(fetchCollectionsFailure(error.message)));
  };
};
