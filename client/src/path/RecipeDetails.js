import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../endpoint";

const RecipeDetails = () => {
  const [Data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);
  
  return (
    <div className="recipe-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="card">
              <div className="card-head p-2">
                <img
                  src={Data.img}
                  alt="recipedetails"
                  width="100%"
                  height="350px"
                />
              </div>
              <div className="card-body">
                <h1>{Data.title}</h1>
                <label>Ingredients : </label>
                <p>{Data.ingredients}</p>
                <label>Process : </label>
                <p>{Data.process}</p>
                <div className="d-flex justify-content-end">
                  <Link className="back" to="/">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
