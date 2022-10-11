import React, { useEffect } from 'react';
import bookAPI from '../hooks/useBookAPI';
import HomeComponent from './component';

function Home() {
  const [getBooks, getBooksRes] = bookAPI.useGetBook();

  useEffect(() => {
    console.log('effect');
    getBooks();
  }, [getBooks]);

  console.log('render', getBooksRes);

  return <HomeComponent />;
}

export default Home;
