import CategoryProduct from "../../components/categoryProduct";

const Category = (props) => {
  return <CategoryProduct data={props.dataa} />;
};
export default Category;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://audiophi-default-rtdb.firebaseio.com/0.json"
  );
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { category: item.category },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async () => {
  const res = await fetch(
    "https://audiophi-default-rtdb.firebaseio.com/0.json"
  );
  const data = await res.json();

  return {
    props: { dataa: data },
  };
};
