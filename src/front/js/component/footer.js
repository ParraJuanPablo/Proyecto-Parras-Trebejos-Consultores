import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/parra-y-trebejos-logo.png";

export const Footer = () => (
	<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
		<div className="col-md-4 d-flex align-items-center px-3">
			<Link className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" to="/">
				<img src={logo} alt="Parras & Trebejos Consultores C.A." height="60" />
			</Link>
			<span className="mb-3 mb-md-0 text-muted">©2023 Parras & Trebejos Consultores C.A.</span>
		</div>
		<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
			<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
			<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-linkedin"></i></a></li>
		</ul>
	</footer>
);
