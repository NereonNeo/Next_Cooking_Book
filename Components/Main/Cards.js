import React from 'react';
import Link from 'next/link';
const Cards = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link href="/cards/[id]" as={`/cards/${data.strCategory}`}>
        <div className="card">
          <div className="card__image">
            <img src={data.strCategoryThumb} alt={data.strCategory} />
          </div>
          <div className="card__info">
            <div className="car__info--title">
              <h3>{data.strCategory}</h3>
              <p>Fresh & sweet</p>
            </div>
            <div className="card__info--price">
              <p>More</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
