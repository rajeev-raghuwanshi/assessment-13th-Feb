import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../app/slice/charactersSlice";
import { v4 as uuidv4 } from "uuid"

const Characters = () => {
  const dispatch = useDispatch();
  const { characters, loading } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((character) => (
        <div key={uuidv4()}>
          <p>{character.fullName}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
