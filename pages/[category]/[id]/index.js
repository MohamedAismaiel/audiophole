import ProductDetails from "../../../components/productDetails";

const X = (props) => {
  return <ProductDetails data={props.dataa} />;
};
export default X;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://audiophi-default-rtdb.firebaseio.com/0.json"
  );
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { category: item.category, id: item.slug },
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
