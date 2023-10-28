import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  const onSubmit = () => {
    if (image) {
      alert('Image uploaded!');
      // upload logic, e.g., sending the image to a server to be added
    }
  }

  return (
    <div className="upload-container">
      <h1>Upload Image</h1>
      <div className="drag-drop-area">
        <div className="icon"></div>
        Drag and drop your file here
        <div>OR</div>
        <label htmlFor="file-input" className="select-file-btn">SELECT FILE</label>
        <input id="file-input" type="file" onChange={onImageChange} style={{ display: 'none' }} />
        <div className="file-size-limit">File size limit: 10 MB</div>
      </div>
      {image && <img src={image} alt="Selected" className="preview-image" />}
      <br />
      <button className='submit-btn' onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default UploadPage;
