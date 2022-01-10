import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";

interface ProductObject {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export default function Category() {
  let [products, setProducts] = React.useState<ProductObject[]>([]);
  let cat = useParams();

  React.useEffect(() => {
    console.log(cat);
    let chosenProducts = data.products.filter(
      (product) => product.category === cat.category
    );
    setProducts(chosenProducts);
  }, [cat]);

  return (
    <div data-test="category-title">
      {products.length > 0 && products[0].category}
    </div>
  );
}
