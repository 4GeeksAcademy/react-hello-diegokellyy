import React from "react";
import hero from "../../img/hero.jpg";

const Jumbotron = () => {
    return (
        <div
            className="p-5 mb-4 rounded-3 text-white"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "450px"
            }}
        >
            <div
                className="container-fluid py-5"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.55)",
                    borderRadius: "15px"
                }}
            >
                <h1 className="display-3 fw-bold">
                    Jujutsu Kaisen
                </h1>

                <p className="col-md-8 fs-4">
                    Es hora de unirte a la lucha contra las maldiciones y convertirte
                    en un verdadero hechicero junto a Gojo, Yuji, Megumi y Nobara.
                </p>

                <button
                    className="btn btn-lg"
                    style={{
                        backgroundColor: "#7c3aed",
                        color: "white"
                    }}
                >
                    Aprende más
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;