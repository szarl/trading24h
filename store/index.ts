import { store } from "./StoreHelper";

const storeInstance = store.createStore();
export default () => storeInstance;