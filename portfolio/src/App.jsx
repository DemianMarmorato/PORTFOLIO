import "./App.css";
import Habilidades from "./components/Habilidades/Habilidades";
import NavBar from "./components/NavBar/NavBar";
import Proyectos from "./components/Proyectos/Proyectos";
import SobreMi from "./components/Sobre Mi/SobreMi";
import Inicio from "./components/header/header";

function App() {
	return (
		<>
			<div className="body">
				<section id="home"></section>
				<NavBar />
				<Inicio />
				<h1 className="abmeTitle">
					Te cuento <span className="abmetextSpan">sobre mi</span>
				</h1>
				<SobreMi />
				<Habilidades />
				<h1 className="proyectTitle">
					Mira mis <span className="proyectSpan">Proyectos!</span>
				</h1>
				<Proyectos />
			</div>
		</>
	);
}

export default App;
