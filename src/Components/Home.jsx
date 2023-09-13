import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaning] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (isExist) {
      return alert("already booked");
    } else {
      selectedActors.forEach((item) => {
        count = count + item.salary;
      });
      const totalRemaining = 30000 - count;
      if (count > 30000) {
        return alert("Not enough Budget");
      } else {
        setTotalCost(count);
        setRemaning(totalRemaining);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 my-12">
      {/* home container  */}
      <div className="flex flex-col md:flex-row">
        {/* card container  */}

        <div className="w-[700px] flex flex-wrap gap-16">
          {allActors.map((actor) => (
            <div
              key={actor.id}
              className="w-72 h-80 border border-solid border-gray-300 text-white text-center p-3 space-y-4 rounded-md"
            >
              <div>
                <img
                  className="w-20 rounded-[50px] mx-auto"
                  src={actor.image}
                  alt=""
                />
              </div>
              <h2 className="text-xl font-semibold">{actor.name}</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="flex items-center justify-evenly">
                <p className="font-bold">salary: {actor.salary}$</p>
                <p className="font-bold">{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelectActor(actor)}
                className="bg-lime-500 px-3 py-2 rounded-lg "
              >
                select
              </button>
            </div>
          ))}
        </div>
        {/* cart container  */}

        <div className="text-white w-60">
          <Cart
            selectedActors={selectedActors}
            totalCost={totalCost}
            remaining={remaining}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  Home: PropTypes.func.isRequired,
};

export default Home;
