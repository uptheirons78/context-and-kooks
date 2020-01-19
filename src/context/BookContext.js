import React, { createContext, useState } from 'react';

// first: let's create our context
export const BookContext = createContext();

// second: let's create our book context provider
const BookContextProvider = props => {
  //eslint-disable-next-line
  const [books, setBooks] = useState([
    { title: 'book title one', id: 1 },
    { title: 'book title two', id: 2 },
    { title: 'book title three', id: 3 },
    { title: 'book title four', id: 4 }
  ]);
  return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
