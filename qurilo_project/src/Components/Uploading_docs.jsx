import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Upload_docs = () => {

    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [uploading, setUploading] = useState(false);
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    };
  
    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    const handleUpload = () => {
      setUploading(true);
      setTimeout(() => {
        setUploading(false); 
        setFile(null);
        setText('');
      }, 2000);
    };
  return (
    <>
        <h3>Upload Douments</h3>
     <Row className="mb-3">


     <Form.Group as={Col} controlId="fileName" className="mb-3">
        <Form.Label>File Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={text} onChange={handleTextChange} />
      </Form.Group>


      <Form.Group as={Col} controlId="fileType" className="mb-3">
        <Form.Label>Type of file</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={text} onChange={handleTextChange} />
      </Form.Group>

      <Form.Group as={Col} controlId="formFile" className="mb-3">
        <Form.Label>Upload File</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

 

      <Form.Group as={Col} controlId="formUpload" className="mb-3">
        <Button variant="primary" onClick={handleUpload} disabled={uploading}>
          {uploading ? (
            <span>
              {/* <FontAwesomeIcon icon={faUpload} spin /> Uploading... */}
            </span>
          ) : (
            <span>
              {/* <FontAwesomeIcon icon={faUpload} /> Upload */}
            </span>
          )}
        </Button>
      </Form.Group>
      </Row>

    
    </>
  )
}

export default Upload_docs;
