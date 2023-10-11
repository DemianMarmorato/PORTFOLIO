import abmePhoto from "../images/abmePhoto.png";
import "./SobreMi.css";

function SobreMi() {
	return (
		<div className="abmeContainer">
			<div className="abmetextCont">
				<p className="abmeText">
					Soy un joven de 21 años, actualmente estudiando Desarrollo Web
					Full Stack y con muchas ganas de insertarse en el mundo laboral
					consiguiendo su primer empleo, me gusta aprender y curiosear por
					nuevos conocimientos y mejorar los que ya poseo, soy un gran
					compañero de equipo y alguien muy empatico y adaptable a la hora
					de afrontar y superar situaciones. Me encantaría llegar a ser un
					gran desarrollador a futuro y desarrollar mis propios grandes
					proyectos e ideas.
				</p>
			</div>

			<div className="photoCont">
				<section id="skills"> </section>
				<img className="abmePhoto" src={abmePhoto}></img>
			</div>
		</div>
	);
}

export default SobreMi;
