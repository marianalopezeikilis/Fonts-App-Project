import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function ButtonBlue(props) {
  return (
    <>
      <style type="text/css">
        {`
    .btn-celeste {
      background-color: #93BFD7;
      color: white;
      margin:5px;
      width: 100%;
 max-width: 150px;
 box-sizing: border-box;
 box-shadow: 2px 2px 5px #888888;
 border:none;

    }
    .btn-celeste:hover {
  background-color: #39A2DB;  
  border:none;
  color: white;
}
  
    `}
      </style>
{/* <Link to='/about'></Link> */}
      <Button  variant="celeste" size="xl">
        {props.text}
      </Button>
    </>
  );
}

export default ButtonBlue;