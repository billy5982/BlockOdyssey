import { combineReducers } from '@reduxjs/toolkit';
import searchInfo from './searchInfo';

// 만들어 놓은 리듀서들을 합친다.
export const reducers = combineReducers({
  searchInfo,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducers>;
export default reducers;
