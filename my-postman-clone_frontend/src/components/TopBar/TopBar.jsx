import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveRequest,
  setRequestName,
} from "../../redux/actions/RESTAPIActions";

import "./TopBar.css";

const TopBar = () => {
  const dispatch = useDispatch();
  const method = useSelector((state) => state.restapi.request.method);
  const requestName = useSelector((state) => state.restapi.request.requestName);
  const url = useSelector((state) => state.restapi.request.url);
  const headers = useSelector((state) => state.restapi.request.headers);
  const body = useSelector((state) => state.restapi.request.body);
  const params = useSelector((state) => state.restapi.request.params);
  const handleRequestName = (e) => {
    dispatch(setRequestName(e.target.value));
  };
  const auth=useSelector((state)=>state.restapi.request.auth);

  const handleSaveRequest = async () => {
    const requestDetails = {
      name: requestName,
      url,
      method,
      headers,
      body,
      params,
      authDetails: auth,
    };

    console.log(requestDetails, "requestDetails");

    // Dispatch the action to save the request locally
    dispatch(saveRequest(requestDetails));

    try {
      const response = await fetch("http://localhost:5002/api/saveRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestDetails),
      });

      // Check if the response is not okay, throw an error with the server's message
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error saving request");
      }

      // Parse response data
      const data = await response.json();
      alert(data.message);
      alert(`Request "${requestName}" saved successfully!`);
    } catch (error) {
      console.error("Error saving request:", error);
      alert("Failed to save request. Please try again.");
    }
  };

  return (
    <div className="top-bar">
      <div className="request-info">
        <span className="method">{method}</span>
        <input
          type="text"
          value={requestName}
          onChange={(e) => handleRequestName(e)}
          className="request-name postman-text-input"
        />
        {/* <span className="chevron-down">▼</span> */}
      </div>
      <div className="actions">
        <button onClick={handleSaveRequest} className="action-button">
          Save
        </button>
        {/* <button onClick={navigateToNextPage} className="action-button">
        Next
      </button> */}
      </div>
    </div>
  );
};

export default TopBar;
