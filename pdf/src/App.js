import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        // Make a POST request to the backend API without Axios
        const response = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData,
        });

        // Handle the response, e.g., log or display a message
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected.');
    }
  }

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Upload File To Display PDF</h1>
        <input
          type="file"
          accept=".pdf"
          className="fileChoose"
          onChange={handleFileChange}
        />
        <br />
        <button type="submit" className="button">
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;