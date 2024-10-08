import React, { useContext } from "react";
import Banner from "../components/banner";
import BookList from "../components/book/BookList";
import PrivateBookList from "../components/book/PrivateBookList";
import { AuthContext } from "../utils/AuthProvider";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center">
      <Banner />
      <BookList />
      {user ? (
        <PrivateBookList />
      ) : (
        console.log("Private Books are not accessable yet!")
      )}
    </div>
  );
};

export default HomePage;
