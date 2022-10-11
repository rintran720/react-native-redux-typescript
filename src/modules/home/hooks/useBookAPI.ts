import { useCallback, useState } from 'react';
import Axios from '~/api/axios';
import { bookActions } from '~/store/book/book.slice';
import { useAppDispatch } from '~/store/config';
import { APIResponse, Book } from '~/types/index';

const bookAPI = {
  useGetBook: () => {
    const [res, setRes] = useState<APIResponse<Book[]>>({
      loading: false,
      data: null,
      error: null,
    });
    const dispatch = useAppDispatch();

    const call = useCallback(() => {
      setRes({ loading: true, error: null, data: null });
      Axios.get<Book[]>('book')
        .then((response) => {
          if (response.data) {
            setRes({ loading: false, data: response.data, error: null });
            dispatch(bookActions.setBooks(response.data));
          }
        })
        .catch((error) => setRes({ loading: false, data: null, error }));
    }, [dispatch]);

    return [call, res] as const;
  },
};

export default bookAPI;
