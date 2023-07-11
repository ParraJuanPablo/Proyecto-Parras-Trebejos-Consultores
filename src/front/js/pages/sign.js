import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/sign.css";

//import { Carousel } from "../component/carousel.js";

export const Sign = () => {
	const { store, actions } = useContext(Context);

	return (
    <section className="mt-5">
        <div class="mask d-flex align-items-center gradient-custom-3">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card">
                            <ul class="nav nav-pills mt-5" id="pills-tab-users" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-postulante-tab" data-bs-toggle="pill" data-bs-target="#pills-postulante" type="button" role="tab" aria-controls="pills-postulante" aria-selected="true">Postulante</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-asesor-tab" data-bs-toggle="pill" data-bs-target="#pills-asesor" type="button" role="tab" aria-controls="pills-asesor" aria-selected="false">Asesor</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-empresa-tab" data-bs-toggle="pill" data-bs-target="#pills-empresa" type="button" role="tab" aria-controls="pills-empresa" aria-selected="false">Empresa</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent-users">
                                <div class="tab-pane fade show active" id="pills-postulante" role="tabpanel" aria-labelledby="pills-postulante-tab">
                                    <ul class="nav nav-pills" id="pills-tab-tipo-postulante" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-registrarme-tab-postulante" data-bs-toggle="pill" data-bs-target="#pills-registrarme-postulante" type="button" role="tab" aria-controls="pills-registrarme" aria-selected="true">Registrarme</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-acceder-tab-postulante" data-bs-toggle="pill" data-bs-target="#pills-acceder-postulante" type="button" role="tab" aria-controls="pills-acceder" aria-selected="false">Acceder</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent-tipo-postulante">
                                        <div class="tab-pane fade show active" id="pills-registrarme-postulante" role="tabpanel" aria-labelledby="pills-registrarme-tab">
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Crear una Cuenta</h2>
                                                <form>

                                                    <div class="form-outline mb-4">
                                                        <input type="text" id="register-name-postulante" class="form-control form-control-lg" placeholder="Tu Nombre"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="register-email-postulante" class="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-password-postulante" class="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-rpassword-postulante" class="form-control form-control-lg" placeholder="Repite tu Contraseña"/>
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Registrate
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-acceder-postulante" role="tabpanel" aria-labelledby="pills-acceder-tab">
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Iniciar Sesión</h2>
                                                <form>
                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="register-email-postulante" class="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-password-postulante" class="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Iniciar Sesión
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-asesor" role="tabpanel" aria-labelledby="pills-asesor-tab">
                                    <ul class="nav nav-pills" id="pills-tab-tipo-asesor" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-registrarme-tab-asesor" data-bs-toggle="pill" data-bs-target="#pills-registrarme-asesor" type="button" role="tab" aria-controls="pills-registrarme" aria-selected="true">Registrarme</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-acceder-tab-asesor" data-bs-toggle="pill" data-bs-target="#pills-acceder-asesor" type="button" role="tab" aria-controls="pills-acceder" aria-selected="false">Acceder</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent-tipo-asesor">
                                        <div class="tab-pane fade show active" id="pills-registrarme-asesor" role="tabpanel" aria-labelledby="pills-registrarme-tab">
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Crear una Cuenta</h2>
                                                <form>

                                                    <div class="form-outline mb-4">
                                                        <input type="text" id="register-name-asesor" class="form-control form-control-lg" placeholder="Tu Nombre"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="register-email-asesor" class="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-password-asesor" class="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-rpassword-asesor" class="form-control form-control-lg" placeholder="Repite tu Contraseña"/>
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Registrate
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-acceder-asesor" role="tabpanel" aria-labelledby="pills-acceder-tab">
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Iniciar Sesión</h2>
                                                <form>
                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="register-email-asesor" class="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-password-asesor" class="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Iniciar Sesión
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                <div class="tab-pane fade" id="pills-empresa" role="tabpanel" aria-labelledby="pills-empresa-tab">
                                    <ul class="nav nav-pills" id="pills-tab-tipo-empresa" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-registrarme-tab-empresa" data-bs-toggle="pill" data-bs-target="#pills-registrarme-empresa" type="button" role="tab" aria-controls="pills-registrarme" aria-selected="true">Registrarme</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-acceder-tab-empresa" data-bs-toggle="pill" data-bs-target="#pills-acceder-empresa" type="button" role="tab" aria-controls="pills-acceder" aria-selected="false">Acceder</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent-tipo-empresa">
                                        <div class="tab-pane fade show active" id="pills-registrarme-empresa" role="tabpanel" aria-labelledby="pills-registrarme-tab">
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Crear una Cuenta</h2>
                                                <form>

                                                    <div class="form-outline mb-4">
                                                        <input type="text" id="register-name-empresa" class="form-control form-control-lg" placeholder="Tu Nombre"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="register-email-empresa" class="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-password-empresa" class="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-rpassword-empresa" class="form-control form-control-lg" placeholder="Repite tu Contraseña"/>
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                            Registrate
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-acceder-empresa" role="tabpanel" aria-labelledby="pills-acceder-tab">
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Iniciar Sesión</h2>
                                                <form>
                                                    <div class="form-outline mb-4">
                                                        <input type="email" id="register-email-empresa" class="form-control form-control-lg" placeholder="Tu Email"/>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="register-password-empresa" class="form-control form-control-lg" placeholder="Contraseña"/>
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
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
