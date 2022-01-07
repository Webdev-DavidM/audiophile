import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  let params = useParams();

  return <div>{params.slug}HHH</div>;
}

// interface Category {
//   category: string,
//   tablet: string,
//   mobile: string, 
//   desktop: string
// }

// FOR REFERENCE WHEN USING DIFFERENT IMAGE SIZES

// export default function CategorySummary() {
//   const [categories, setCategories] = useState<Category[] | []>([]);

//   useEffect(() => {
//     let cats = JSON.parse(JSON.stringify(data));
//     setCategories(cats['category-images']);
//   }, []);

//   return <div className="category-summary">
//       {categories && categories.map((cat) => 
//       <>
//         <div className="category-summary__item">
          //   <picture className="category-summary__image">
          //   <source className="category-summary__image" srcSet={cat.tablet}
          //     media="(min-width: 768px)" />
          //   <source className="category-summary__image" srcSet={cat.desktop}
          //     media="(min-width: 1024px)" />
          //   <img className="category-summary__image" src={`${cat.mobile}`} alt="" />
          // </picture>
//           <h6 className="category-summary__category-name">{cat.category.toUpperCase()}</h6>
//           <button className="category-summary__cta">
//             <span className="category-summary__cta-text">SHOP</span>
//             <img className="category-summary__arrow" src={arrow} alt="" />
//           </button>
//         </div>

//         </>
//       )}
//   </div>;