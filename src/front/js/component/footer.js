import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/parra-y-trebejos-logo.png";

export const Footer = () => (
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
		<div class="col-md-4 d-flex align-items-center px-3">
			<Link class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" to="/">
				<img src={logo} alt="Parras & Trebejos Consultores C.A." height="60" />
			</Link>
			<span class="mb-3 mb-md-0 text-muted">©2023 Parras & Trebejos Consultores C.A.</span>
		</div>
		<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li class="ms-3"><a class="text-muted" href="#"><i class="fa-brands fa-instagram"></i></a></li>
			<li class="ms-3"><a class="text-muted" href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
			<li class="ms-3"><a class="text-muted" href="#"><i class="fa-brands fa-linkedin"></i></a></li>
		</ul>
	</footer>
);
