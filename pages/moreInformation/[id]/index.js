import React from 'react';
import Link from 'next/link';
const MoreInformation = ({ name, data }) => {
  console.log(data);
  return (
    <div>
      {data.meals.map((element) => {
        return (
          <div className="wrap_title">
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
                  {/* // <div className="wrapInfo_flexedbuttons"> */}
                  <h2>What you need</h2>
                  <div className="moreInfoIngredients">
                    <ul>
                      <li>
                        {element.strIngredient1 === ''
                          ? '❌'
                          : element.strIngredient1}
                      </li>
                      <li>
                        {element.strIngredient2 === ''
                          ? '❌'
                          : element.strIngredient2}
                      </li>
                      <li>
                        {element.strIngredient3 === ''
                          ? '❌'
                          : element.strIngredient3}
                      </li>
                      <li>
                        {element.strIngredient4 === ''
                          ? '❌'
                          : element.strIngredient4}
                      </li>
                      <li>
                        {element.strIngredient5 === ''
                          ? '❌'
                          : element.strIngredient5}
                      </li>
                      <li>
                        {element.strIngredient6 === ''
                          ? '❌'
                          : element.strIngredient6}
                      </li>
                      <li>
                        {element.strIngredient7 === ''
                          ? '❌'
                          : element.strIngredient7}
                      </li>
                      <li>
                        {element.strIngredient8 === ''
                          ? '❌'
                          : element.strIngredient8}
                      </li>
                      <li>
                        {element.strIngredient9 === ''
                          ? '❌'
                          : element.strIngredient9}
                      </li>
                    </ul>
                  </div>
                  {/* // </div> */}
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
      name,
    },
  };
};
