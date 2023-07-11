import React from "react";
import "./index.css";
export default function FilterControls({
  ratingOrder,
  englishOnly,
  setRatingOrder,
  setEnglishOnly,
}) {
  function toggleRatingFilter() {
    setRatingOrder(!ratingOrder);
  }

  function toggleEnglishFilter() {
    setEnglishOnly(!englishOnly);
  }

  return (
    <div className="filter-controls">
      <label>
        Highest rated first &nbsp;
        <input
          type="checkbox"
          checked={ratingOrder}
          onChange={toggleRatingFilter}
        ></input>
      </label>
      <label>
        English language only &nbsp;
        <input
          type="checkbox"
          checked={englishOnly}
          onChange={toggleEnglishFilter}
        ></input>
      </label>
    </div>
  );
}
