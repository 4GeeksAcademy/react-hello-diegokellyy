import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

import "../../styles/landing.css";

import gojo from "../../img/gojo.jpg";
import megumi from "../../img/megumi.jpg";
import yuji from "../../img/itadori.jpg";
import nobara from "../../img/nobara.jpg";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className="container mt-4">

				<Jumbotron />

				<div className="row">

					<Card
						imagen={gojo}
						nombre="Satoru Gojo"
						descripcion="El hechicero más fuerte del mundo."
						boton="Ver Perfil"
					/>

					<Card
						imagen={megumi}
						nombre="Megumi Fushiguro"
						descripcion="Usuario de la Técnica de las Diez Sombras."
						boton="Ver Perfil"
					/>

					<Card
						imagen={yuji}
						nombre="Yuji Itadori"
						descripcion="El recipiente de Sukuna."
						boton="Ver Perfil"
					/>

					<Card
						imagen={nobara}
						nombre="Nobara Kugisaki"
						descripcion="Especialista en el martillo y los clavos."
						boton="Ver Perfil"
					/>

				</div>

			</div>

			<Footer />

		</>
	);
};

export default Home;
