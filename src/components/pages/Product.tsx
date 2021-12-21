import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  let params = useParams();

  return <div>{params.slug}HHH</div>;
}
