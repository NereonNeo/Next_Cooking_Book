import Cards from '../Components/Main/Cards';

export default function Home({ data }) {
  return (
    <div>
      <div className="wrap_title">
        <h1>Choose of Category</h1>
      </div>
      <div className="container">
        <div className="cards">
          {data?.categories.map((el) => {
            return <Cards data={el} key={el.idCategory} />;
          })}
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
