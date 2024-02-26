import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = React.memo((props) => {
  return (
    <Link className="card" to={"/" + props.id + "/" + props.title}>
      <div className="card-head">
        <img src={props.img} alt="recipe" width="100%" height="210px" />
      </div>
      <div className="card-body">
        <h1>{props.title}</h1>
        <p className="text-dark">{props.process.substring(0, 125)}...</p>
        <div className="d-flex justify-content-end read-more">
          <Link to={"/" + props.id + "/" + props.title} className="back">
            Read More
          </Link>
        </div>
      </div>
    </Link>
  );
});

export default RecipeCard;
