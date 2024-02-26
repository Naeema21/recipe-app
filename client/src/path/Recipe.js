import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from '../component/RecipeCard'
import { BASE_URL } from "../endpoint";

const Recipe = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="recipe">
        <div className="container">
          <div className="row">
            {data.map((v, i) => {
              return (
                <div className="col-lg-4 col-md-6 mb-2" key={i}>
                  <RecipeCard
                    id={v._id}
                    title={v.title}
                    img={v.img}
                    process={v.process}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
