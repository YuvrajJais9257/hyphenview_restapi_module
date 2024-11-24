import React from "react";
import AddIcon from "./../../assets/images/AddIcon.png";
import "./HeadersSection.css";
const HeadersSection = ({
  headers,
  newHeaderKey,
  newHeaderValue,
  setNewHeaderKey,
  setNewHeaderValue,
  handleAddHeader,
}) => {
  return (
    <table className="headers-table">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {headers.map((header, index) => (
          <tr key={index}>
            <td>
              <input
                className="postman-text-input"
                type="text"
                value={header.key}
                readOnly
              />
            </td>
            <td>
              <input
                className="postman-text-input"
                type="text"
                value={header.value}
                readOnly
              />
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <input
              className="postman-text-input"
              type="text"
              value={newHeaderKey}
              onChange={(e) => setNewHeaderKey(e.target.value)}
              placeholder="Key"
            />
          </td>
          <td>
            <input
              type="text"
              className="postman-text-input"
              value={newHeaderValue}
              onChange={(e) => setNewHeaderValue(e.target.value)}
              placeholder="Value"
            />
          </td>
          <td>
            <button className="add-params-button" onClick={handleAddHeader}>
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
};

export default HeadersSection;
