import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import HomeBodySection from "./bodySection";
import CategoryTitle from "./categoryTitle";
import HomeBottomPage from "./homeBottom";
import Image from "next/image";
const CategoryProduct = (props) => {
  const router = useRouter();
  const categoryName = router.query.category;

  let categoryItems = [];
  let newItems = [];
  let oldItems = [];
  props.data.filter((item) => {
    item.category === categoryName && categoryItems.push(item);
  });
  categoryItems.filter((item) => {
    item.new == true ? newItems.push(item) : oldItems.push(item);
  });
  categoryItems = newItems.concat(oldItems);

  const evenOrOdd = (num) => {
    return num % 2;
  };
  const lastItemInArray = (arrLength, index) => {
    if (arrLength - 1 === index) {
      return true;
    } else return false;
  };

  const productHandler = (category, slug) => {
    router.push(`/${category}/${slug}`);
  };
  return (
    <Fragment>
      <CategoryTitle title={categoryName} />
      <section className="HeadphonesCategoryBody">
        <div className="container">
          {categoryItems.map((item, i) => {
            lastItemInArray(categoryItems.length, i);
            if (evenOrOdd(i) === 0) {
              return (
                <div
                  key={item.id}
                  className={`product ${
                    lastItemInArray(categoryItems.length, i)
                      ? " product-margin-bottom"
                      : ""
                  }`}
                >
                  <div className="product-image">
                    <Image
                      src={item.image}
                      width={1080}
                      height={1120}
                      layout="responsive"
                      quality={100}
                    />
                  </div>
                  <div className="product-textbox product-textbox-left">
                    {item.new && (
                      <p className="product-textbox-secondaryheader">
                        new prdouct
                      </p>
                    )}
                    <h2 className="product-textbox-mainheader">{item.name}</h2>
                    <p className="product-textbox-text">{item.description}</p>
                    <button
                      className="button main-button"
                      onClick={() => {
                        productHandler(item.category, item.slug);
                      }}
                    >
                      SEE PRODUCT
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className={`product ${
                    lastItemInArray(categoryItems.length, i)
                      ? " product-margin-bottom"
                      : ""
                  }`}
                >
                  <div className="product-textbox product-textbox-right">
                    {item.new && (
                      <p className="product-textbox-secondaryheader">
                        new prdouct
                      </p>
                    )}
                    <h2 className="product-textbox-mainheader">{item.name}</h2>
                    <p className="product-textbox-text">{item.description}</p>
                    <button
                      className="button main-button"
                      onClick={() => {
                        productHandler(item.category, item.slug);
                      }}
                    >
                      SEE PRODUCT
                    </button>
                  </div>
                  <div className="product-image">
                    <Image
                      src={item.image}
                      width={1080}
                      height={1120}
                      layout="responsive"
                      quality={100}
                    />
                  </div>
                </div>
              );
            }
          })}
          <HomeBodySection />
          <HomeBottomPage />
        </div>
      </section>
    </Fragment>
  );
};
export default CategoryProduct;
