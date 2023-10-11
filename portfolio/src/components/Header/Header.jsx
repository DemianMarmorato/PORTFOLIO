import logoDem from "../images/logoDem.png";
import profilePic from "../images/profilePic.png";
import "./Header.css";

function Inicio() {
	return (
		<div className="body">
			<section id="home"></section>
			<div className="logoContainer">
				<img className="logoDem" src={logoDem}></img>
			</div>
			<h1 className="greetings">
				Bienvenido, soy <span className="nameSpan"> Demian Marmorato!</span>
			</h1>

			<p className="desc">
				Encantado de conocerte😃, soy un{" "}
				<span className="descSpan"> Desarrollador Web Full Stack </span> que
				hará realidad tus ideas!
			</p>

			<div className="imgContainer">
				<img className="profilePic" src={profilePic}></img>
			</div>
		</div>
	);
}

export default Inicio;
