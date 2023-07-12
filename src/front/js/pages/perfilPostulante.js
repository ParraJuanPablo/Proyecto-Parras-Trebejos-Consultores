import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/perfilPostulante.css";

import img1 from "../../img/component/carousel/img-1.jpg";

export const PerfilPostulante = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-5 mb-4 bg-body-tertiary rounded-3">
			<div class="row align-items-md-stretch">
				<div class="col-md-3">
					<div class="circular--landscape">
						<img src={img1} alt="..."/>
					</div>
				</div>
				<div class="col-md-9">
					<div class="h-100 py-5 text-bg-dark rounded-3">
						<h2>Nombre</h2>
						<p>Descripcion the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
						<div>
							<button class="btn btn-outline-secondary" type="button">Editar</button>
							<button type="button" class="btn btn-outline-secondary mx-2" data-bs-toggle="modal" data-bs-target="#CV-modal">
								Subir CV
							</button>
							<div class="modal fade" id="CV-modal" tabindex="-1" role="dialog" aria-labelledby="CV-modalLabel" aria-hidden="true">
								<div class="modal-dialog" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="CV-modalLabel">Modal title</h5>
											<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Save changes</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row align-items-md-stretch mt-5">
				<div class="col-md-12">
					<div class="h-100 p-5 bg-body-tertiary border rounded-3">
						<h3>Insignias</h3>
						<div class="row align-items-md-stretch">
							<div class="col-md-2">
								<div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
									<i class="fa-solid fa-binoculars"></i>
								</div>
							</div>
							<div class="col-md-2">
								<div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
									<i class="fa-solid fa-graduation-cap"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
