import React from "react";
import CategorySummary from "../sections-used-on-multiple-pages/CategorySummary";
import Hero from '../page-sections/homepage/Hero'

import '../../scss/homepage.scss'
import ProductHighlight from "../page-sections/homepage/ProductHighlight";

export default function Homepage() {
  return <div className="homepage">
    <Hero />
    <CategorySummary />
    <ProductHighlight />


  </div>;
}
