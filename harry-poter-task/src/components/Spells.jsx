import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpells, setPage } from "../app/slice/spellsSlice";
import { v4 as uuidv4 } from "uuid"

const Spells = () => {
  const dispatch = useDispatch();

  const { spells, loading, currentPage, itemsPerPage } = useSelector((state) => state.spells);

  useEffect(() => {
    dispatch(fetchSpells({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Spells</h1>

      {spells.map((spell) => (
        <div key={uuidv4()}>
          <p><strong>{spell.spell}</strong></p>
          <p>{spell.use}</p>
          <hr />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(setPage(currentPage - 1))}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage}
        </span>

        <button
          onClick={() => dispatch(setPage(currentPage + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Spells;

