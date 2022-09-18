import React from "react";
import { useParams } from "react-router-dom";
import { DetailContainer } from "../pods/detail/detail.container";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <DetailContainer id={id} />
    </>
  );
};