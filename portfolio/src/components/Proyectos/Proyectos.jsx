import "./Proyectos.css";
import SublimeStyle from "./proyectImg/SublimeStyle.png";

function Proyectos() {
	return (
		<div className="body">
			<section id="proyects"></section>
			<div className="cardCont">
				<div className="card">
					<img className="proyectImg" src={SublimeStyle}></img>
					<p className="proyectDesc">
						Este proyecto realizado por mi y otros dos desarrolladores es
						un eCommerce de sublimado de ropa.
					</p>
				</div>
				<div className="card">
					<img className="proyectImg" src={SublimeStyle}></img>
					<p className="proyectDesc">
						Este proyecto realizado por mi y otros dos desarrolladores es
						un eCommerce de sublimado de ropa.
					</p>
				</div>
				<div className="card">
					<img className="proyectImg" src={SublimeStyle}></img>
					<p className="proyectDesc">
						Este proyecto realizado por mi y otros dos desarrolladores es
						un eCommerce de sublimado de ropa.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Proyectos;
