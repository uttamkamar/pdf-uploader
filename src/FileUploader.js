import React, { useState } from "react";
import { FaEye, FaTrash, FaFilePdf } from "react-icons/fa";
import "./App.css";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [displayPDF, setDisplayPDF] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage("Please select a valid PDF file.");
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const isAlreadyUploaded = uploadedFiles.some(
        (file) => file.name === selectedFile.name
      );
      if (isAlreadyUploaded) {
        setErrorMessage("File already uploaded.");
        setUploadStatus("");
        return;
      }
      setUploadStatus("Uploading...");
      // Simulate API request to save the file
      setTimeout(() => {
        setUploadStatus("Upload successful.");
        setUploadedFiles((prevFiles) => [...prevFiles, selectedFile]);
        setSelectedFile(null);
      }, 2000);
    } else {
      setErrorMessage("Please select a file to upload.");
    }
  };

  const handlePDFClick = (file) => {
    setDisplayPDF(true);
    setSelectedPDF(file);
  };

  const handleDeleteFile = (file) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((f) => f.name !== file.name)
    );
  };
  return (
    <div className="wrapper">
      <header>upload e-bill PDFs</header>
      <div id="input-form">
        <form>
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={handleFileUpload}
            className="upload-button"
          >
            Upload
          </button>
        </form>
        <div className="message">
          {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="file-list">
          <h3>Uploaded Files:</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <div className="all-file">
                  <div className="file-left">
                    <FaFilePdf
                      style={{
                        color: "#E13A16",
                      }}
                    />
                    <span className="file_name">{file.name}</span>
                  </div>
                  <div>
                    <FaEye
                      onClick={() => handlePDFClick(file)}
                      style={{
                        cursor: "pointer",
                        marginRight: "30px",
                        color: "#150B5A ",
                      }}
                    />
                    <FaTrash
                      onClick={() => handleDeleteFile(file)}
                      style={{
                        cursor: "pointer",
                        color: "#E13A16",
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedFile && (
        <div className="preview-container">
          <h3 className="preview-heading">Preview:</h3>
          <embed
            src={URL.createObjectURL(selectedFile)}
            width="100%"
            height="600"
            type="application/pdf"
          />
        </div>
      )}
      {displayPDF && selectedPDF && (
        <div className="preview-container">
          <h3 className="preview-heading">Preview:</h3>
          <embed
            src={URL.createObjectURL(selectedPDF)}
            width="100%"
            height="600"
            type="application/pdf"
          />
        </div>
      )}
    </div>
  );
};
export default FileUploader;
