import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/parra-y-trebejos-logo.png";
import "../../styles/component/navbar.css";

export const Navbar = () => {
	return (
	<nav className="navbar navbar-expand-lg bg-body-tertiary">
		<div id="navbar" className="container-fluid d-flex justify-content-between">
			<div>
				<Link to="/">
					<img src={logo} alt="Parras & Trebejos Consultores C.A." height="60" />
				</Link>
			</div>
			<div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/contact">
								<i class="fa-solid fa-comment-dots"></i>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about">
								<i className="fa-solid fa-circle-info"></i>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign">
								<i className="fa-solid fa-right-to-bracket"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	);
};
