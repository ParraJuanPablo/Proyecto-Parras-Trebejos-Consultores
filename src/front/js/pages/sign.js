import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pages/sign.css";

//import { Carousel } from "../component/carousel.js";

export const Sign = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [nombrepr, setNombrepr] = useState("");
    const [correopr, setCorreopr] = useState("");
    const [contraseñapr, setContraseñapr] = useState("");
    const [rcontraseñapr, setRContraseñapr] = useState("");


    const handleSubmitpr = async (event) => {
      event.preventDefault();
      if (contraseñapr === rcontraseñapr) {          
        const response = await actions.signup({
        nombre: nombrepr,
        correo: correopr,
        contraseña: contraseñapr
        });
        if (response) {
        navigate("/");
        } else {
        alert("No se pudo crear la cuenta");
        }
      }
      else {
        alert("Las contraseñas deben ser iguales.");
      }
    };

    const [correopa, setCorreopa] = useState("");
    const [contraseñapa, setContraseñapa] = useState("");

    const handleSubmitpa = async (event) => {
      event.paeventDefault();
      const response = await actions.signup({
        correo: correopa,
        contraseña: contraseñapa
      });
      if (response) {
        navigate("/perfil/postulante");
      } else {
        alert("No se pudo iniciar sesión");
      }
    };

    const [correosa, setCorreosa] = useState("");
    const [contraseñasa, setContraseñasa] = useState("");

    const handleSubmitsa = async (event) => {
      event.saeventDefault();
      const response = await actions.signup({
        correo: correosa,
        contraseña: contraseñasa
      });
      if (response) {
        navigate("/blog/asesor");
      } else {
        alert("No se pudo iniciar sesión");
      }
    };
  
    useEffect(() => {
      if (store.token && store.token != null) navigate("/");
    }, [store.token]);

	return (
    <section className="mt-5">
        <div className="mask d-flex align-items-center gradient-custom-3">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card">
                            <ul className="nav nav-pills mt-5" id="pills-tab-users" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-postulante-tab" data-bs-toggle="pill" data-bs-target="#pills-postulante" type="button" role="tab" aria-controls="pills-postulante" aria-selected="true">Postulante</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-asesor-tab" data-bs-toggle="pill" data-bs-target="#pills-asesor" type="button" role="tab" aria-controls="pills-asesor" aria-selected="false">Asesor</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent-users">
                                <div className="tab-pane fade show active" id="pills-postulante" role="tabpanel" aria-labelledby="pills-postulante-tab">
                                    <ul className="nav nav-pills" id="pills-tab-tipo-postulante" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-registrarme-tab-postulante" data-bs-toggle="pill" data-bs-target="#pills-registrarme-postulante" type="button" role="tab" aria-controls="pills-registrarme" aria-selected="true">Registrarme</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-acceder-tab-postulante" data-bs-toggle="pill" data-bs-target="#pills-acceder-postulante" type="button" role="tab" aria-controls="pills-acceder" aria-selected="false">Acceder</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent-tipo-postulante">
                                        <div className="tab-pane fade show active" id="pills-registrarme-postulante" role="tabpanel" aria-labelledby="pills-registrarme-tab">
                                            <div className="card-body p-5">
                                                <h2 className="text-uppercase text-center mb-5">Crear una Cuenta</h2>
                                                <form onSubmit={handleSubmitpr}>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setNombrepr(e.target.value)} type="text" id="register-name-postulante" className="form-control form-control-lg" placeholder="Tu Nombre"/>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setCorreopr(e.target.value)} type="email" id="register-email-postulante" className="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setContraseñapr(e.target.value)} type="password" id="register-password-postulante" className="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setRContraseñapr(e.target.value)} type="password" id="register-rpassword-postulante" className="form-control form-control-lg" placeholder="Repite tu Contraseña"/>
                                                    </div>

                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Registrate
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-acceder-postulante" role="tabpanel" aria-labelledby="pills-acceder-tab">
                                            <div className="card-body p-5">
                                                <h2 className="text-uppercase text-center mb-5">Iniciar Sesión</h2>
                                                <form onSubmit={handleSubmitpa}>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setCorreopa(e.target.value)} type="email" id="register-email-postulante" className="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setContraseñapa(e.target.value)} type="password" id="register-password-postulante" className="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Iniciar Sesión
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-asesor" role="tabpanel" aria-labelledby="pills-asesor-tab">
                                    <ul className="nav nav-pills" id="pills-tab-tipo-asesor" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-acceder-tab-asesor" data-bs-toggle="pill" data-bs-target="#pills-acceder-asesor" type="button" role="tab" aria-controls="pills-acceder" aria-selected="false">Acceder</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent-tipo-asesor">
                                        <div className="tab-pane fade show active" id="pills-acceder-asesor" role="tabpanel" aria-labelledby="pills-acceder-tab">
                                            <div className="card-body p-5">
                                                <h2 className="text-uppercase text-center mb-5">Iniciar Sesión</h2>
                                                <form onSubmit={handleSubmitsa}>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setCorreosa(e.target.value)} type="email" id="register-email-asesor" className="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setContraseñasa(e.target.value)} type="password" id="register-password-asesor" className="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Iniciar Sesión
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	);
};
