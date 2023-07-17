import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/component/carousel/img-1.jpg";
import img2 from "../../img/component/carousel/img-2.jpg";
import img3 from "../../img/component/carousel/img-3.jpg";

import "../../styles/component/cartaBlog.css";


export const CartaBlogPostulante = () => {
	return (
        <div className="w-100 py-3 d-flex flex-column align-items-center">
            <div className="card w-50 my-2">
                <div className="card-header d-flex justify-content-between bg-white">
                    <div>
                        <h4>Cristiano Cerrando bocas</h4>
                    </div>
                    <div>
                        <p>12/22</p>
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