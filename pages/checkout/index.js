import Head from "next/head";
import { Fragment } from "react";
import CheckoutContent from "../../components/checkout";

const CheckOut = () => {
  return (
    <Fragment>
      <Head>
        <title>{`Audiophile | checkout`}</title>
        <meta
          name="description"
          content="Delivering the product to your home wherever you are"
        />
      </Head>
      <CheckoutContent />;
    </Fragment>
  );
};
export default CheckOut;
