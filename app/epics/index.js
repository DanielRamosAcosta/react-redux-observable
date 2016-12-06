import { combineEpics } from 'redux-observable';
import chat from './chat';

export default combineEpics(
  chat
);
