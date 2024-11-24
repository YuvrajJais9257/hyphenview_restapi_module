import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBody } from "../../redux/actions/RESTAPIActions";
import "./BodySection.css";

const BodySection = () => {
  const dispatch = useDispatch();
  const body = useSelector((state) => state.restapi.body);
  return (
    <div>
      <textarea
        value={body}
        onChange={(e) => dispatch(setBody(e.target.value))}
        placeholder="Request Body"
        className="body-textarea postman-textarea"
      />
    </div>
  );
};

export default BodySection;
