import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ProductDetails from "../../../components/productDetails";

const X = (props) => {
  const router = useRouter();
  const categoryName = router.query.id;

  return (
    <Fragment>
      <Head>
        <title>{`Audiophile | ${categoryName}`}</title>
        <meta
          name="description"
          content="Experience the high quality sound with audiophile products"
        />
      </Head>
      <ProductDetails data={props.dataa} />;
    </Fragment>
  );
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
