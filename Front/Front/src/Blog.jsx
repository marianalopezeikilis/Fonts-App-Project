import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import './Blog.css'


function Blog() {

  return (
    <>
      <NavBar />
      <div class="background_blog">
        <div className="d-none d-xl-block"><ButtonBlue text="Add" ruta="/login" /></div>
        
      </div>
    </>
  )
}

export default Blog