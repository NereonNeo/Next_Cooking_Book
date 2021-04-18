import React from 'react';
import Link from 'next/link';
const MoreInformation = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.meals.map((element) => {
        return (
          <div className="wrap_title" key={element.idMeal}>
            <div className="choosedName">
              <h1>
                {element.strArea} {element.strMeal}
              </h1>
            </div>
            <div className="containerformoreinfo">
              <div className="wrapInfo">
                <div className="wrapInfo_img">
                  <img src={element.strMealThumb} alt={element.strMeal} />
                </div>
                <div className="wrapInfo_ingredients">
                  <h2>What you need</h2>
                  <div className="moreInfoIngredients">
                    <ul>
                      <li
                        className={element.strIngredient1 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient1}
                      </li>
                      <li
                        className={element.strIngredient2 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient2s}
                      </li>
                      <li
                        className={element.strIngredient3 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient3}
                      </li>
                      <li
                        className={element.strIngredient4 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient4}
                      </li>
                      <li
                        className={element.strIngredient5 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient5}
                      </li>
                      <li
                        className={element.strIngredient6 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient6}
                      </li>
                      <li
                        className={element.strIngredient7 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient7}
                      </li>
                      <li
                        className={element.strIngredient8 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient8}
                      </li>
                      <li
                        className={element.strIngredient9 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient9}
                      </li>
                      <li
                        className={element.strIngredient10 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient10}
                      </li>
                      <li
                        className={element.strIngredient11 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient11}
                      </li>
                      <li
                        className={element.strIngredient12 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient12}
                      </li>
                      <li
                        className={element.strIngredient13 === '' ? 'hide' : ''}
                      ></li>
                      <li
                        className={element.strIngredient14 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient14}
                      </li>
                      <li
                        className={element.strIngredient15 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient15}
                      </li>
                      <li
                        className={element.strIngredient16 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient16}
                      </li>
                      <li
                        className={element.strIngredient17 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient17}
                      </li>
                      <li
                        className={element.strIngredient18 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient18}
                      </li>
                      <li
                        className={element.strIngredient19 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient19}
                      </li>
                      <li
                        className={element.strIngredient20 === '' ? 'hide' : ''}
                      >
                        {element.strIngredient20}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="wrapInfo_instructions">
                  <h2>Instructions</h2>
                  <p>{element.strInstructions}</p>
                </div>
              </div>
              <div className="wrapInfo_gotoyoutube">
                <div className="wrapInfo_flexedbuttons">
                  <div className="backButton">
                    <button>
                      <a href={element.strYoutube} target="_blank">
                        Go to Youtube
                      </a>
                    </button>
                  </div>
                  <div className="backButton">
                    <button>
                      <Link href={`/cards/${element.strCategory}`}>
                        &larr;Back
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MoreInformation;
export const getServerSideProps = async (context) => {
  const name = context.params;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
