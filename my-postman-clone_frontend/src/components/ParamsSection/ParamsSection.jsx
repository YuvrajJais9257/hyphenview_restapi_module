import React from 'react'
import AddIcon from "./../../assets/images/AddIcon.png";
import "./ParamsSection.css";
const ParamsSection = ({
  params,
  newParamKey,
  newParamValue,
  setNewParamKey,
  setNewParamValue,
  handleAddParam,
}) => (
  <table className="params-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {params.map((param, index) => (
        <tr key={index}>
          <td>
            <input className="postman-text-input" type="text" value={param.key} readOnly />
          </td>
          <td>
            <input  className="postman-text-input" type="text" value={param.value} readOnly />
          </td>
          <td>
            <input className="postman-text-input" type="text" placeholder="Description" />
          </td>
        </tr>
      ))}
      <tr>
        <td>
          <input
            type="text"
            className="postman-text-input"
            value={newParamKey}
            onChange={(e) => setNewParamKey(e.target.value)}
            placeholder="Key"
          />
        </td>
        <td>
          <input
            type="text"
            value={newParamValue}
            className="postman-text-input"
            onChange={(e) => setNewParamValue(e.target.value)}
            placeholder="Value"
          />
        </td>
        <td>
          <button className="add-params-button" onClick={handleAddParam}>
            <img
              src={AddIcon}
              width="30px"
              height="24px"
              alt="add-param-icon"
            />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default ParamsSection
