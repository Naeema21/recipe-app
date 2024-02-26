import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import { BASE_URL } from "../endpoint";
;

const AddRecipe = () => {
  let navigate = useNavigate();

  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [recipe, setrecipe] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleRecipe = (e) => {
    e.preventDefault();
    const data = {
      title: name,
      img: image,
      process: recipe,
      ingredients: ingredients
    };


    axios.post(BASE_URL, data).then((res) => {
      console.log(res);
      if (res.status === 201) {
        swal({
          title: "Thank You For adding",
          timer: 2000
        }).then(() => {
          navigate("/");
        });
      } else {
        swal({
          title: "Something went wrong!",
          timer: 2000
        });
      }
    });
  };
  return (
    <>
      <div className="addrecipe d-flex align-items-center">
        <div className="container">
          <div className="row ">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 card text-center">
              <h3> Add Recipe</h3>
              <form onSubmit={handleRecipe}>
                <input
                  required
                  placeholder="Title"
                  type="text"
                  className="form-control my-2"
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  required
                  className="form-control my-2"
                  placeholder="Enter image url"
                  type="text"
                  onChange={(e) => setimage(e.target.value)}
                />

                <textarea
                  required
                  className="form-control my-2"
                  placeholder="Ingredients"
                  rows={2}
                  onChange={(e) => setIngredients(e.target.value)}
                />

                <textarea
                  required
                  className="form-control my-2"
                  placeholder="Recipe"
                  rows={5}
                  onChange={(e) => setrecipe(e.target.value)}
                />

                <div className="d-flex justify-content-between">
                  <button type="submit">Add Recipe</button>
                  <Link className="back" to="/">
                    Back
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
