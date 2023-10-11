import "./Habilidades.css";
import bootstrap from "./skillsImages/BOOTSTRAP.svg";
import css from "./skillsImages/CSS.svg";
import html from "./skillsImages/HTML.svg";
import javascript from "./skillsImages/JS.svg";
import mysql from "./skillsImages/MYSQL.svg";
import react from "./skillsImages/REACT.svg";
import typescript from "./skillsImages/TYPESCRIPT.svg";

function Habilidades() {
	return (
		<div className="skillCont">
			<div className="skillBackground">
				<div>
					<section id="skills">
						<h1 className="skillTitle">
							Manejo estas{" "}
							<span className="skilltitleSpan">tecnologías.</span>
						</h1>
					</section>
					<div className="cardContainer">
						<div className="cards">
							<img src={html} className="cardImage"></img>
							<h3 className="cardText">HTML</h3>
						</div>
						<div className="cards">
							<img src={css} className="cardImage"></img>
							<h3 className="cardText">CSS</h3>
						</div>
						<div className="cards">
							<img src={bootstrap} className="cardImage"></img>
							<h3 className="cardText">Bootstrap</h3>
						</div>
						<div className="cards">
							<img src={javascript} className="cardImage"></img>
							<h3 className="cardText">JavaScript</h3>
						</div>
						<div className="cards">
							<img src={react} className="cardImage"></img>
							<h3 className="cardText">React</h3>
						</div>
						<div className="cards">
							<img src={typescript} className="cardImage"></img>
							<h3 className="cardText">Typescript</h3>
						</div>
						<div className="cards">
							<img src={mysql} className="cardImage"></img>
							<h3 className="cardText">MySQL</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Habilidades;
