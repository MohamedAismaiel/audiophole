import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import HomeBodySection from "./bodySection";
import HomeBottomPage from "./homeBottom";
import { CartContext } from "../context/cartContext";

const ProductDetails = (props) => {
  const [amount, setAmount] = useState(1);
  const cartctx = useContext(CartContext);

  let slug;
  let category;
  const router = useRouter();
  const itemSlug = router.query.id;
  const addNumber = () => {
    setAmount((cur) => (cur = cur + 1));
  };
  const othersLinkHandler = (e) => {
    slug = e.target.attributes.getNamedItem("data-slug").value;
    category = e.target.attributes.getNamedItem("data-category").value;
    router.push(`/${category}/${slug}`);
  };
  const itemName = props.data.filter((name) => name.slug === itemSlug);
  let includedItems = [];
  let otherItems = [];
  let galleryPhotos = [];

  itemName.map((item) => {
    const included = item.includes;
    const others = item.others;
    const gallery = item.gallery;
    included.map((item) => {
      includedItems.push(item);
    });
    others.map((item) => {
      otherItems.push(item);
    });
    gallery.map((item) => {
      galleryPhotos.push(item);
    });
  });

  const removeNumber = () => {
    setAmount((cur) => {
      if (cur === 1) {
        return (cur = 1);
      }
      cur = cur - 1;
      return cur;
    });
  };

  const goBackHandler = () => {
    router.back();
  };
  const addCartHandler = (item) => {
    cartctx.addItem({
      cartName: item.cartName,
      price: item.price,
      picture: item.cartPhoto,
      amount: amount,
      id: item.id,
    });
  };
  return itemName.map((data) => {
    return (
      <section key={data.id} className="outer">
        <div className="container">
          <button className="button backButton" onClick={goBackHandler}>
            Go Back
          </button>
          <div className="productDetails-box  ">
            <div className="product-image">
              <Image
                priority
                src={data.image}
                width={640}
                height={660}
                layout="responsive"
                className="product-image"
                quality={100}
              />
            </div>
            <div className="product-textbox product-textbox-left">
              {data.new && (
                <p className="product-textbox-secondaryheader">new prdouct</p>
              )}
              <h2 className="product-textbox-mainheader">{data.name}</h2>
              <p className="product-textbox-text">{data.description}</p>
              <span className="product-textbox-price">
                $ {data.price.toLocaleString()}
              </span>
              <div className="buttons-box">
                <button className="button button-quan">
                  <span onClick={removeNumber} className="button-minus">
                    &minus;
                  </span>
                  <span className="button-number">{amount}</span>
                  <span onClick={addNumber} className="button-plus">
                    &#x2B;
                  </span>
                </button>
                <button
                  onClick={addCartHandler.bind(null, data)}
                  className="button main-button"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="featuresBox">
            <div className="featuresBox-features">
              <h2 className="featuresBox-features-word">FEATURES</h2>
              <p className="featuresBox-features-text1">{data.features}</p>
            </div>
            <div className="featuresBox-inTheBox">
              <h2 className="featuresBox-inTheBox-word">in the box</h2>
              {includedItems.map((item, i) => {
                return (
                  <p key={i} className="featuresBox-inTheBox-quan">
                    {item.quantity}x
                    <span className="featuresBox-inTheBox-item">
                      {item.item}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="gallery">
            {galleryPhotos.map((photo, i) => {
              return (
                <Fragment key={i}>
                  <div className="gallery-photo-first">
                    <Image
                      src={photo.first}
                      width={445}
                      height={280}
                      className="gallery-photo "
                      quality={100}
                      // layout="fill"
                    />
                  </div>

                  <div className="gallery-photo-second">
                    <Image
                      src={photo.second}
                      width={445}
                      height={280}
                      className="gallery-photo "
                      quality={100}
                      // layout="fill"
                    />
                  </div>

                  <div className="gallery-photo-third">
                    <Image
                      quality={100}
                      src={photo.third}
                      // width={635}
                      // height={592}
                      className="gallery-photo "
                      layout="fill"
                      objectFit="cover"
                      // layout="responsive"
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
          <h2 className="also-like-word">you may also like</h2>

          <div className="alsoLike-container">
            {otherItems.map((item, i) => {
              return (
                <div key={i} className="alsolike-box">
                  <div className="alsoLike-container-box">
                    <Image
                      src={item.image}
                      layout="fill"
                      quality={100}
                      objectFit="contain"
                    />
                  </div>
                  <h2 className="alsoLike-container-box-title">{item.name}</h2>
                  <button
                    className="button main-button"
                    onClick={othersLinkHandler}
                    data-slug={item.slug}
                    data-category={item.category}
                  >
                    SEE PRODUCT
                  </button>
                </div>
              );
            })}
          </div>
          <HomeBodySection />
          <HomeBottomPage />
        </div>
      </section>
    );
  });
};
export default ProductDetails;
