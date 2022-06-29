import "./styles.css"
import mainImage from "./header_img.jpg"
function Header () {
    return(
        <header>
           <h1> Blog </h1>
           <img src= {mainImage} alt = "frase de game of thrones com fundo de galáxia" />
        </header>
    )
}

export default Header;