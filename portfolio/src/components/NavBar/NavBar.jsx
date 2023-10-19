import logoDem from "../images/logoDem.png";
import "./NavBar.css";

function NavBar() {
	return (
		<nav className="navBar">
			<ul className="list">
				<li className="item">
					<a className="text" href="#home">
						Inicio
					</a>
				</li>
				<li className="item">
					<a className="text" href="#abme">
						Sobre mí
					</a>
				</li>
				<li className="item">
					<a className="text" href="#skills">
						Tecnologías
					</a>
				</li>
				<li className="item">
					<a className="text" href="#proyects">
						Proyectos
					</a>
				</li>
				<li className="item">
					<a
						className="text"
						href="https://forms.gle/XmUvGFtC269E25o56"
						target="blank">
						Contacto
					</a>
				</li>
			</ul>
			<div className="navbarLogo">
				<img src={logoDem} className="logoDem2"></img>
			</div>
		</nav>
	);
}

export default NavBar;
