import React, { useEffect } from 'react';
import { listBookSelector } from '~/store/book/book.selector';
import { useAppSelector } from '~/store/config';
import bookAPI from '../hooks/useBookAPI';
import HomeComponent from './component';

function Home() {
  const [getBooks, getBooksRes] = bookAPI.useGetBook();
  const books = useAppSelector(listBookSelector);

  useEffect(() => {
    console.log('effect');
    getBooks();
  }, [getBooks]);

  console.log('render', getBooksRes, books);

  return <HomeComponent />;
}

export default Home;
