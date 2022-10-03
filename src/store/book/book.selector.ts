import { RootState } from '../config';

export function ListBookSelector(state: RootState) {
  return state.book.list;
}
