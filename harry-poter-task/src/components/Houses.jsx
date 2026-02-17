import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../app/slice/housesSlice";
import { v4 as uuidv4 } from "uuid"

const Houses = () => {
  const dispatch = useDispatch();
  const { houses, loading } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Houses</h1>
      {houses.map((house, index) => (
        <div key={uuidv4()}>
          <p>{house.house}</p>
        </div>
      ))}
    </div>
  );
};

export default Houses;
