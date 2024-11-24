import React, { useState } from "react";
import {
  Pagination,
  Box,
  Typography,
  // Button,
} from "@mui/material";
import "./ResponseSection.css";
import { useSelector } from "react-redux";
import DownloadCSV from "../DownloadCSV/DownloadCSV";

const ResponseSection = ({ selectedFields, setSelectedFields }) => {
  const responseFromStore = useSelector((state) => state.restapi.response);
  //pagination logic
  const [page, setPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.ceil(
    (responseFromStore ? responseFromStore.length : 0) / pageSize
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const currentItems = Array.isArray(responseFromStore)
    ? responseFromStore.slice((page - 1) * pageSize, page * pageSize)
    : responseFromStore
    ? [responseFromStore]
    : [];

  const handleFieldChange = (field) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  const jsonToCSV = (data, fields) => {
    const csvRows = [];
    csvRows.push(fields.join(","));

    data.forEach((item) => {
      const row = fields.map((field) => item[field]).join(",");
      csvRows.push(row);
    });
    return csvRows.join("\n");
  };

  const downloadCSV = () => {
    const csvData = jsonToCSV(responseFromStore, selectedFields);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log(responseFromStore, "responseFromStore");

  return (
    <div className="response-section">
      <h2>Response</h2>
      {responseFromStore ? (
        <div>
          <pre className="response-content">
            {JSON.stringify(currentItems, null, 2)}
          </pre>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Typography>Page: {page}</Typography>
            {totalPages > 0 && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                color="primary"
                sx={{ marginLeft: 2 }}
              />
            )}
          </Box>

          {/* Download CSV Section */}
          <DownloadCSV
            currentItems={currentItems}
            selectedFields={selectedFields}
            handleFieldChange={handleFieldChange}
            downloadCSV={downloadCSV}
          />
        </div>
      ) : (
        <div className="response-placeholder">
          <div className="rocket">🚀</div>
          <p>Enter the URL and click Send to get a response</p>
        </div>
      )}
    </div>
  );
};

export default ResponseSection;
