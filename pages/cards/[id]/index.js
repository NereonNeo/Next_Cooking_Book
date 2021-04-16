import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
const Card = ({ data, name }) => {
  function handleBack() {
    Router.push('/');
  }
  return (
    <div className="wrap_title">
      <div className="choosedName">
        <h1>All about {name.id}</h1>
      </div>
      <div className="container">
        <div className="cards">
          {data.meals.map((el) => {
            return (
              <Link
                href="/moreInformation/[id]"
                as={`/moreInformation/${el.idMeal}`}
              >
                <div key={el.idMeal}>
                  <div className="Card2 ph1">
                    <div className="overlay">
                      <div className="img">
                        <img src={el.strMealThumb} alt="" />
                      </div>
                      <div className="title">
                        <h2 className="title">{el.strMeal}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="backButton">
          <button onClick={handleBack}> &larr; Back</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
export const getServerSideProps = async (context) => {
  const name = context.params;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
      name,
    },
  };
};
