import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../app/slice/booksSlice";
import { v4 as uuidv4 } from "uuid"

const Books = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        //using uuid for unique id for identificatiion
        <div key={uuidv4()}> 
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
