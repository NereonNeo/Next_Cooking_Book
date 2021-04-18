import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchItem from '../Components/Main/SearchItem';
const Search = ({ res }) => {
  const [input, setInput] = useState('Beef');
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    setRenderData(res.meals);
  }, []);
  function inputChangeHandler(e) {
    setInput(e.target.value);
  }
  async function buttonClickHandler() {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const res = await data.json();
    setRenderData(res.meals);
  }
  return (
    <div>
      <div className="wrap_title">
        <h1>Search Foods</h1>
      </div>
      <div className="container">
        <input type="text" onChange={inputChangeHandler} value={input} />
        <button onClick={buttonClickHandler}>Search</button>
        <div className="cards">
          {renderData &&
            renderData.map((element) => {
              return <SearchItem element={element} key={element.idMeal} />;
            })}
          {/* <div className="searchCards">
            <div className="img">
              <img
                src="https://www.themealdb.com/images/media/meals/1550441882.jpg"
                alt=""
              />
              <div className="search_info">
                <p>Lalallallaal</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Search;
export const getServerSideProps = async (context) => {
  const name = context.params;
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
  );
  const res = await data.json();
  return {
    props: {
      res,
    },
  };
};
