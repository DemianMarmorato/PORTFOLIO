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
					<a href="https://sublimestyle.netlify.app" target="blank">
						<button className="button">Visitar proyecto</button>
					</a>
					<a
						href="https://github.com/DemianMarmorato/SublimeStyleReact.git"
						target="blank">
						<button className="button">Ver en Github</button>
					</a>
				</div>
				<div className="card">
					<img className="proyectImg" src={SublimeStyle}></img>
					<p className="proyectDesc">
						Este proyecto realizado por mi y otros dos desarrolladores es
						un eCommerce de sublimado de ropa.
					</p>
					<a href="https://sublimestyle.netlify.app" target="blank">
						<button className="button">Visitar proyecto</button>
					</a>
					<a
						href="https://github.com/DemianMarmorato/SublimeStyleReact.git"
						target="blank">
						<button className="button">Ver en Github</button>
					</a>
				</div>
				<div className="card">
					<img className="proyectImg" src={SublimeStyle}></img>
					<p className="proyectDesc">
						Este proyecto realizado por mi y otros dos desarrolladores es
						un eCommerce de sublimado de ropa.
					</p>
					<a href="https://sublimestyle.netlify.app" target="blank">
						<button className="button">Visitar proyecto</button>
					</a>
					<a
						href="https://github.com/DemianMarmorato/SublimeStyleReact.git"
						target="blank">
						<button className="button">Ver en Github</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Proyectos;
