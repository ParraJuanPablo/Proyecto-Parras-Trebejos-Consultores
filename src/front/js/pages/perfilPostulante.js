import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/perfilPostulante.css";

import img1 from "../../img/component/carousel/img-1.jpg";

export const PerfilPostulante = () => {
	const { store, actions } = useContext(Context);

	const imagens = img1
	const telefonos = "Ingrese un Teléfono en el botón editar."
	const descripcions = "Ingrese una Descripcion en el botón editar."

	if (store.user.foto && store.user.foto != null) {
		imagens = store.user.foto
	};

	if (store.user.telefono && store.user.telefono != null) {
		telefonos = store.user.telefono
	};
	
	if (store.user.descripcion && store.user.descripcion != null) {
		descripcions = store.user.descripcion
	};

	const [foto, setFoto] = useState("");
    const [telefono, setTelefono] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmite = async (event) => {
      event.preventDefault();
      const response = await actions.editarPostulante({
        foto: foto,
        telefono: telefono,
        descripcion: descripcion
      });
      if (response) {
        console.log("Se editó correctamente");
      } else {
        alert("No se pudo editar");
      }
    };

    const [cv, setCV] = useState("");

    const handleSubmitcv = async (event) => {
      event.preventDefault();
      const response = await actions.subirCV({
        cv: cv
      });
      if (response) {
        console.log("Se subió el cv correctamente");
      } else {
        alert("No se pudo subir el cv");
      }
    };

	useEffect(() => {
		if (store.token === null) {
		  navigate("/sign");
		}
	}, [store.token]);
	
	useEffect(() => {
		actions.leerPostulante();
	},[]);

	return (
		<div className="p-5 mb-4 bg-body-tertiary rounded-3">
			<div className="row align-items-md-stretch">
				<div className="col-md-3">
					<div className="circular--landscape">
						<img src={imagens} alt="..."/>
					</div>
				</div>
				<div className="col-md-9">
					<div className="h-100 py-5 text-bg-dark rounded-3">
						<h2>{store.user.nombre}</h2>
						<p>Telefono: </p>
						<p>{telefonos} </p>
						<p>Correo: </p>
						<p>{store.user.correo}</p>
						<p>Descripcion: </p>
						<p>{descripcions}</p>
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
											<form onSubmit={handleSubmite}>
												<div className="input-group mb-3">
													<label className="input-group-text" for="edit-imagen">Foto</label>
													<input onChange={(e) => setFoto(e.target.value)} type="file" className="form-control" id="edit-imagen"/>
												</div>

												<div className="form-outline mb-4">
													<input onChange={(e) => setTelefono(e.target.value)} type="tel" id="edit-tel" className="form-control form-control-lg" placeholder="Teléfono"/>
												</div>
												<div className="form-outline mb-4">
													<textarea onChange={(e) => setDescripcion(e.target.value)} id="edit-description" className="form-control form-control-lg" aria-label="With textarea" placeholder="Descripción"></textarea>
												</div>
											</form>
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
											<button type="submit" className="btn btn-primary">Guardar Cambios</button>
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
											<form onSubmit={handleSubmitcv}>
												<div className="input-group mb-3">
													<label className="input-group-text" for="subir-CV">CV</label>
													<input onChange={(e) => setCV(e.target.value)} type="file" className="form-control" id="subir-CV"/>
												</div>
											</form>
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
											<button type="submit" className="btn btn-primary">Guardar Cambios</button>
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
