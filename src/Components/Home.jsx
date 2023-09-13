import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);
  console.log(allActors);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 my-12">
      {/* home container  */}
      <div className="flex flex-col md:flex-row">
        {/* card container  */}

        <div className="w-[700px] flex flex-wrap gap-10">
          {
            allActors.map(actor => (
              <div key={actor.id} className="w-72 h-80 border border-solid border-gray-300 text-white text-center p-3 space-y-4 rounded-md">
            <div>
              <img
                className="w-20 rounded-[50px] mx-auto"
                src={actor.image}
                alt=""
              />
            </div>
                <h2 className="text-xl font-semibold">{actor.name }</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center justify-evenly">
                  <p className="font-bold">salary: {actor.salary }$</p>
                  <p className="font-bold">{actor.role }</p>
            </div>
            <button className="bg-lime-500 px-3 py-2 rounded-lg ">
              select
            </button>
          </div>
            ))
          }
        </div>
        {/* cart container  */}

        <div className="text-white w-60">
          <h2 className="text-3xl">this is cart</h2>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  Home: PropTypes.func.isRequired,
};

export default Home;
