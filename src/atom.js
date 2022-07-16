import { atom } from 'recoil';

const queryData = atom({
  key: 'Data',
  default: []
});
export {queryData}