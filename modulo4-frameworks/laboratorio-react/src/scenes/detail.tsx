import React from "react";
import { useParams } from "react-router-dom";
import { DetailApi } from "../pods/detail/detail.api";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <DetailApi id={id} />
    </>
  );
};