import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import "./DownloadCSV.css";
const DownloadCSV = ({currentItems, selectedFields, handleFieldChange, downloadCSV}) => {
  const fields = currentItems.length > 0 ? Object.keys(currentItems[0]) : [];
  return (
    // <div className="download-csv section" style={{ marginTop: "20px" }}>
    //   <h3>Select Fields to Download as CSV</h3>
    //   <div className="field-selection section">
    //     {currentItems.length > 0 &&
    //       Object.keys(currentItems[0]).map((field) => (
    //         <FormControlLabel
    //           className="field-labels"
    //           control={
    //             <Checkbox
    //               checked={selectedFields.includes(field)}
    //               onChange={() => handleFieldChange(field)}
    //             />
    //           }
    //           label={field}
    //           key={field}
    //         />
    //       ))}
    //   </div>
    //   <button
    //     className="postman-buttons"
    //     variant="contained"
    //     onClick={downloadCSV}
    //     sx={{ marginTop: 2 }}
    //   >
    //     Download CSV
    //   </button>
    // </div>
    <div className="download-csv section" style={{ marginTop: "20px" }}>
    <h3>Select Fields to Download as CSV</h3>
    <div className="field-selection section">
      {currentItems.length > 0 ? (
        <>
          {fields.map((field) => (
            <FormControlLabel
              key={field}
              control={
                <Checkbox
                  checked={selectedFields.includes(field)}
                  onChange={() => handleFieldChange(field)}
                  name={field}
                />
              }
              label={field}
            />
          ))}
          <button
            variant="contained"
            color="primary"
            onClick={downloadCSV}
            disabled={selectedFields.length === 0}
            className="download-button postman-buttons"
          >
            Download CSV
          </button>
        </>
      ) : (
        <p className="no-items-message">No items available for download.</p>
      )}
    </div>
  </div>
  );
};

export default DownloadCSV;
