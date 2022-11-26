/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getVetsDetail, clearDetails } from "../../../../Redux/actions";

export default function VetDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const vet = useSelector((state) => state.vetDetail);

  useEffect(() => {
    dispatch(getVetsDetail(id));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/" type="button">
        Regresar
      </Link>
      {/* <img src={vet.image} alt="vet" height="300px" width="300px" />
      <h1>
        {vet.name} {vet.lastName}
      </h1>
      <h3>Speciality: {vet.speciality}</h3>
      <h3>Score: {vet.score}</h3>
      <h3>Reviews:</h3>
      {vet.reviews.map((review) => {
        return <h3>{review}</h3>;
      })} */}
    </div>
  );
}