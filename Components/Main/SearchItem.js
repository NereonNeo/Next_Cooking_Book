import React from 'react';
import Link from 'next/link';
const SearchItem = ({ element }) => {
  return (
    <div>
      <Link
        href="/moreInformation/[id]"
        as={`/moreInformation/${element.idMeal}`}
      >
        {/* <div className="searchCard">
          <div className="card__image">
            <img src={element.strMealThumb} alt={element.strMealThumb} />
          </div>
          <div className="card__info">
            <div className="car__info--title">
              <h3>{element.strMeal}</h3>
              <p>Fresh & sweet</p>
            </div>
          </div>
        </div> */}
        <div className="searchCards">
          <div className="img">
            <img src={element.strMealThumb} alt={element.strMealThumb} />
            <div className="search_info">
              <p>{element.strMeal}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
