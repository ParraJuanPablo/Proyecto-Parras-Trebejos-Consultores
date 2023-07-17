import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/perfilPostulante.css";

import img1 from "../../img/component/carousel/img-1.jpg";

export const PerfilPostulante = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-5 mb-4 bg-body-tertiary rounded-3">
			<div className="row align-items-md-stretch">
				<div className="col-md-3">
					<div className="circular--landscape">
						<img src={img1} alt="..."/>
					</div>
				</div>
				<div className="col-md-9">
					<div className="h-100 py-5 text-bg-dark rounded-3">
						<h2>Nombre</h2>
						<p>Telefono: </p>
						<p>Correo: </p>
						<p>Descripcion: </p>
						<p>the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
						<div>
							<button type="button" className="btn btn-outline-secondary mx-2" data-bs-toggle="modal" data-bs-target="#edit-modal">
								Editar
							</button>
							<button type="button" className="btn btn-outline-secondary mx-2" data-bs-toggle="modal" data-bs-target="#CV-modal">
								Subir CV
							</button>
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
													<input type="tel" id="edit-tel" className="form-control form-control-lg" placeholder="Teléfono"/>
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
							<div className="modal fade" id="CV-modal" tabindex="-1" role="dialog" aria-labelledby="CV-modalLabel" aria-hidden="true">
								<div className="modal-dialog" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="CV-modalLabel">Subir CV</h5>
											<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body">
											<form>
												<div className="input-group mb-3">
													<label className="input-group-text" for="subir-CV">CV</label>
													<input type="file" className="form-control" id="subir-CV"/>
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
						</div>
					</div>
				</div>
			</div>
			<div className="row align-items-md-stretch mt-5">
				<div className="col-md-12">
					<div className="h-100 p-5 bg-body-tertiary border rounded-3">
						<h3>Insignias</h3>
						<div className="row align-items-md-stretch">
							<div className="col-md-2">
								<div className="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
									<i className="fa-solid fa-binoculars"></i>
								</div>
							</div>
							<div className="col-md-2">
								<div className="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
									<i className="fa-solid fa-graduation-cap"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
