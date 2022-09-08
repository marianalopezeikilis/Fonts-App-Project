import NavBar from "./components/navbar.jsx";
import ButtonBlue from "./components/ButtonBlue";
import './Blog.css'

function BlogAdd() {

  return (
    <>
      <NavBar />
      <div class="background_blog">
        <h1>Add</h1>
        <ButtonBlue text="Login" ruta="/blog" />
      </div>
    </>
  )
}

export default BlogAdd