import "./Proyectos.css";
import SublimeStyle from "./proyectImg/SublimeStyle.png";
import rickapp from "./proyectImg/rickapp.png";
import todoapp from "./proyectImg/todoapp.png";

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
					<img className="proyectImg" src={rickapp}></img>
					<p className="proyectDesc">
						Este proyecto realizado por mi es de tipo Wikipedia sobre
						personajes de la serie Rick and Morty.
					</p>
					<a href="https://demianmrickapp.netlify.app/" target="blank">
						<button className="button">Visitar proyecto</button>
					</a>
					<a
						href="https://github.com/DemianMarmorato/rickapp.git"
						target="blank">
						<button className="button">Ver en Github</button>
					</a>
				</div>
				<div className="card">
					<img className="proyectImg" src={todoapp}></img>
					<p className="proyectDesc">
						Este proyecto es un To-do List basico con funciones de
						agreger, eliminar, editar tareas y un registro de usuario.
					</p>
					<a href="https://demianmtodoapp.netlify.app" target="blank">
						<button className="button">Visitar proyecto</button>
					</a>
					<a
						href="https://github.com/DemianMarmorato/todo_app.git"
						target="blank">
						<button className="button">Ver en Github</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Proyectos;
