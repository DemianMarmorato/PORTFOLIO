import "./App.css";
import Habilidades from "./components/Habilidades/Habilidades";
import NavBar from "./components/NavBar/NavBar";
import SobreMi from "./components/Sobre Mi/SobreMi";
import Inicio from "./components/header/header";

function App() {
	return (
		<>
			<div className="body">
				<NavBar />
				<Inicio />
				<section className="home">
					<h1 className="abmeTitle">
						Te cuento <span className="abmetextSpan">sobre mi</span>
					</h1>
				</section>
				<SobreMi />
				<Habilidades />
			</div>
		</>
	);
}

export default App;
