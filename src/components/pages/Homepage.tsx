import React from "react";
import CategorySummary from "../sections-used-on-multiple-pages/CategorySummary";
import Hero from '../page-sections/homepage/Hero'

import '../../scss/homepage.scss'
import ProductHighlight from "../page-sections/homepage/ProductHighlight";
import AlternatingCategories from "../page-sections/homepage/AlternatingCategories";
import Description from '../page-sections/homepage/Description'

export default function Homepage() {
  return <div className="homepage">
    <Hero />
    <CategorySummary />
    <ProductHighlight />
    <AlternatingCategories />
    <Description />
  </div>;
}
