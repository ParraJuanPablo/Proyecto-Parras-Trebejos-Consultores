import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/blogPostulante.css";

import { CartaBlogPostulante } from "../component/cartaBlogPostulante.js";
import { Carousel } from "../component/carousel.js";

export const BlogPostulante = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<CartaBlogPostulante />
		</div>
	);
};
