import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchItem from '../Components/Main/SearchItem';
const Search = ({ res }) => {
  const [input, setInput] = useState('Beef');
  const [renderData, setRenderData] = useState([]);
  console.log(renderData);
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
    setInput('');
  }

  return (
    <div>
      <div className="wrap_title">
        <h1>Search Foods</h1>
      </div>
      <div className="container">
        <div className="searchForm">
          <input type="text" onChange={inputChangeHandler} value={input} />
          <div className="backButtons">
            <button onClick={buttonClickHandler}>Search</button>
          </div>
        </div>

        <div className="cards">
          {renderData?.map((element) => {
            return <SearchItem element={element} key={element.idMeal} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Search;
export const getServerSideProps = async (context) => {
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
