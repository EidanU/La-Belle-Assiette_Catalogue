import FoodCard from "./components/FoodCard";
import { useEffect, useState } from "react";
import { getData } from "../services/services";
import { GiCook } from "react-icons/gi";
import { BsPlusCircle } from "react-icons/bs";
import BoostrapCanva from "./components/BootstrapCanvas";

function HomePage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Here I want to get my data when the component is mounted. if the request succeed I set the loading to false to display the data
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) return <p>chargement</p>;
  else
    return (
      <>
        {/**Boostrap canvas to display the add food Form */}
        <BoostrapCanva />
        {/**Content of the page*/}
        <h1 className="text-center text-light mt-3">
          <GiCook />
          Chef Loïc Inventory
          <GiCook />
        </h1>
        <hr className="text-light" />
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <h2 className="text-light m-2">Ingredients</h2>
            <button
              className="btn btn-primary m-2"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <BsPlusCircle />
            </button>
          </div>
          <div>
            {data.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
        </div>
      </>
    );
}

export default HomePage;
