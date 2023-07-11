import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
        <section className="mt-5">
            <div class="mask d-flex align-items-center gradient-custom-3">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Contactanos</h2>
                                    <form>

                                        <div class="form-outline mb-4">
                                            <input type="text" id="contact-name" class="form-control form-control-lg" placeholder="Tu Nombre"/>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="contact-email" class="form-control form-control-lg" placeholder="Tu Email"/>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <textarea id="contact-message" class="form-control form-control-lg" aria-label="With textarea" placeholder="Escribe tu Mensaje."></textarea>
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                Enviar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};
