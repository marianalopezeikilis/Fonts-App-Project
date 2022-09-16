import { InputGroup, Button, Form } from 'react-bootstrap';

function InputBlue(props) {
    return (
        <>
            <style type="text/css">
                {`
    .btn-new {
      background-color: #053742;
      color: #E8F0F2;
      box-sizing: border-box;
      box-shadow: 2px 2px 5px #888888;
      border:none;

    }
    .btn-new:hover {
        background-color: #93BFD7;  
        border:none;
        color: #053742;
}
  
    `}
            </style>
            <InputGroup className="mb-3">
                <Button variant="new" id="button-addon1">
                    {props.text}
                </Button>
                <Form.Control />
            </InputGroup>
        </>
    );
}

export default InputBlue;