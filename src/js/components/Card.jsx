import React from "react";

const Card = ({ imagen, nombre, descripcion, boton }) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">

                <img
                    src={imagen}
                    className="card-img-top"
                    alt={nombre}
                />

                <div className="card-body text-center">
                    <h5 className="card-title">
                        {nombre}
                    </h5>

                    <p className="card-text">
                        {descripcion}
                    </p>
                </div>

                <div className="card-footer text-center">
                    <button
                        className="btn"
                        style={{
                            background: "#7c3aed",
                            color: "white"
                        }}
                    >
                        {boton}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;