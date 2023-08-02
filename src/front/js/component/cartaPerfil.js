import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/component/carousel/img-1.jpg";
import img2 from "../../img/component/carousel/img-2.jpg";
import img3 from "../../img/component/carousel/img-3.jpg";

export const CartaPerfil = () => {
	return (
        <div className="w-100 py-3 d-flex flex-column align-items-center">
            <div className="card w-50 my-2">
                <div className="card-header d-flex justify-content-between align-items-center bg-white">
                    <div>
                        <h4 className="m-0">Nombre</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-modal">Editar</a>
                                <div class="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#">Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <img src={img1} className="img-fluid" alt="Responsive image"/>
                </div>
                <div className="card-footer bg-white">
                    <div className="w-100">
                        <p>Nombre</p>
						<p>Telefono: </p>
						<p>Correo: </p>
						<p>Descripcion: </p>
						<p>the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                    </div>
                </div>
            </div>
        </div>
	);
};