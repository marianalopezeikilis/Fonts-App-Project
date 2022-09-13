
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';


const Preview = styled.img`
    padding: 8px;
    margin-top: 12px;
    background-color: #ccc;
    border-radius: 4px;
    height: 100px;
    margin: auto;
    display: block;
`;



function ImageUpload({ useFoto }) {
  const [selectedFile, setSelectedFile] = useFoto;
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }

  return (
    <>
      <label className="d-none d-md-block">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" name="file" onChange={onSelectFile} />
          {selectedFile && <Preview src={preview} />}
        </Form.Group>
      </label>
      <label className="d-md-none">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" name="file" onChange={onSelectFile} />
          {selectedFile && <Preview src={preview} />}
        </Form.Group>
      </label>
    </>
  )
}

export default ImageUpload;