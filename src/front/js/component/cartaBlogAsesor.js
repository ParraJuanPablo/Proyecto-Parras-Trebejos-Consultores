import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/component/carousel/img-1.jpg";
import img2 from "../../img/component/carousel/img-2.jpg";
import img3 from "../../img/component/carousel/img-3.jpg";

import "../../styles/component/cartaBlogAsesor.css";


export const CartaBlogAsesor = () => {
	return (
        <div className="w-100 py-3 d-flex flex-column align-items-center">
            <div className="card w-50 my-2">
                <div className="card-header d-flex justify-content-between align-items-center bg-white">
                    <div>
                        <h4 className="m-0">Cristiano Cerrando bocas</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="m-0 px-2">12/22</p>
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
                <div className="modal fade" id="edit-modal" tabindex="-1" role="dialog" aria-labelledby="edit-modalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="edit-modalLabel">Editar Información</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" for="edit-imagen">Foto</label>
                                        <input type="file" className="form-control" id="edit-imagen"/>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="edit-tel" className="form-control form-control-lg" placeholder="Título"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <textarea id="edit-description" className="form-control form-control-lg" aria-label="With textarea" placeholder="Descripción"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary">Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <img src={img1} className="img-fluid" alt="Responsive image"/>
                </div>
                <div className="card-footer bg-white">
                    <div className="w-100">
                        <p>
                            Hola
                        </p>
                    </div>
                </div>
            </div>
        </div>
	);
};