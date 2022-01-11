import React from "react";
import { useParams } from "react-router-dom";
import { ProductsObject } from "../../Interfaces/productObject";

const Category = (props: { productData: ProductsObject[] }) => {
  let [products, setProducts] = React.useState<ProductsObject[] | []>([]);
  let cat = useParams();
  let { productData } = props;

  React.useEffect(() => {
    let chosenProducts = productData.filter(
      (product) => product.category === cat.category
    );
    setProducts(chosenProducts);
  }, [cat.category, productData]);

  return (
    <div data-test="category-title">
      {products.length > 0 && products[0].category}
    </div>
  );
};

export default Category;
