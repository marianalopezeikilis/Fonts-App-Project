
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';


const Preview = styled.img`
    margin-top: 12px;
    height: 150px;
    margin-left: 50px;
    margin-top: -50px;
    position: absolute;
`;

const Preview2 = styled.img`
    height: 150px;
    margin-bottom: -30px;
    display: block;
    margin-top: 5px;
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
          <br/>
          <label><Form.Control type="file" name="file" onChange={onSelectFile} /></label>
          <label>{selectedFile && <Preview src={preview} />}</label>
        </Form.Group>
      </label>
      <label className="d-md-none">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Photo</Form.Label>
          <br/>
          <label><Form.Control type="file" name="file" onChange={onSelectFile} /></label>
          <label>{selectedFile && <Preview2 src={preview} />}</label>
        </Form.Group>
      </label>
    </>
  )
}

export default ImageUpload;