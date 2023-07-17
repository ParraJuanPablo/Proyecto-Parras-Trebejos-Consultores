import React, { useContext } from "react";
import { Context } from "../store/appContext";

import img1 from "../../img/component/carousel/img-1.jpg";
import img2 from "../../img/component/carousel/img-2.jpg";
import img3 from "../../img/component/carousel/img-3.jpg";

import "../../styles/pages/about.css";


export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-5 mb-4 bg-body-tertiary rounded-3">
			<div className="row align-items-md-stretch">
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-dark rounded-3">
						<h2>Mision</h2>
						<p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
						<button className="btn btn-outline-light" type="button">Example button</button>
					</div>
				</div>
				<div className="col-md-6">
					<img src={img1} className="d-block w-100 rounded" alt="..."/>
				</div>
			</div>
			<div className="row align-items-md-stretch py-5">
				<div className="col-md-6">
				<img src={img2} className="d-block w-100 rounded" alt="..."/>
				</div>
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-dark rounded-3">
						<h2>Vision</h2>
						<p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
						<button className="btn btn-outline-light" type="button">Example button</button>
					</div>
				</div>
			</div>
			<div className="row align-items-md-stretch">
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-dark rounded-3">
						<h2>Valores</h2>
						<p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
						<button className="btn btn-outline-light" type="button">Example button</button>
					</div>
				</div>
				<div className="col-md-6">
					<img src={img3} className="d-block w-100 rounded" alt="..."/>
				</div>
			</div>
		</div>
	);
};
