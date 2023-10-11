import logoDem from "../images/logoDem.png";
import profilePic from "../images/profilePic.png";
import "./Header.css";
import github from "./ImageButton/GITHUB.svg";
import gmail from "./ImageButton/GMAIL.svg";
import linkedin from "./ImageButton/LINKEDIN.svg";

function Inicio() {
	return (
		<div className="body">
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
				<section id="abme"></section>
			</div>
			<div className="buttonCont">
				<a href="https://github.com/DemianMarmorato" target="blank">
					<img src={github} className="github"></img>
				</a>
				<a href=" mailto:marmorato.demian@gmail.com " target="blank">
					<img src={gmail} className="mail"></img>
				</a>
				<a
					href="https://www.linkedin.com/in/demian-alexander-marmorato-710436243"
					target="blank">
					<img src={linkedin} className="linkedin"></img>
				</a>
			</div>
		</div>
	);
}

export default Inicio;
