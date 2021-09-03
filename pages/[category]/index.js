import { Fragment } from "react";
import Head from "next/head";
import CategoryProduct from "../../components/categoryProduct";
import { useRouter } from "next/router";
const Category = (props) => {
  const router = useRouter();
  const categoryName = router.query.category;

  return (
    <Fragment>
      <Head>
        <title>{`Audiophile | ${categoryName}`}</title>
        <meta
          name="description"
          content="Experience the high quality sound with audiophile products"
        />
      </Head>
      <CategoryProduct data={props.dataa} />;
    </Fragment>
  );
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
