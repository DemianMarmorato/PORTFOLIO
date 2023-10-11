import abmePhoto from "../images/abmePhoto.png";
import "./SobreMi.css";

function SobreMi() {
	return (
		<div className="abmeContainer">
			<section id="abme">
				<div className="abmetextCont">
					<p className="abmeText">
						Soy un joven de 21 años, actualmente estudiando Desarrollo Web
						Full Stack y con muchas ganas de insertarse en el mundo
						laboral consiguiendo su primer empleo, me gusta aprender y
						curiosear por nuevos conocimientos y campos del rubro IT,
						quiero ser un gran desarrollador en el futuro y tengo muchas
						ambiciones por cumplir! Me encantan los videojuegos, la música
						y el animé. Me encanta trabajar en equipo y saber las
						opiniones externas a las mías ya que me motivan a seguir
						mejorando o cambiando mis conocimientos y mis formas de hacer
						las cosas.
					</p>
				</div>
			</section>
			<div className="photoCont">
				<img className="abmePhoto" src={abmePhoto}></img>
			</div>
		</div>
	);
}

export default SobreMi;
