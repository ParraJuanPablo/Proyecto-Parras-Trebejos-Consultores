import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
        <section className="mt-5">
            <div className="mask d-flex align-items-center gradient-custom-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Contactanos</h2>
                                    <form>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="contact-name" className="form-control form-control-lg" placeholder="Tu Nombre"/>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="contact-email" className="form-control form-control-lg" placeholder="Tu Email"/>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <textarea id="contact-message" className="form-control form-control-lg" aria-label="With textarea" placeholder="Escribe tu Mensaje."></textarea>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
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
