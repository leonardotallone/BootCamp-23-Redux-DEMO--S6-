import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const value = useSelector((state) => state.value);
  return <p>{value}</p>;
}
