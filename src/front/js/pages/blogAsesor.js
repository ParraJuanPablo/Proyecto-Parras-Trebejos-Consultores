import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/blogPostulante.css";

import { CartaBlogAsesor } from "../component/cartaBlogAsesor.js";
import { Carousel } from "../component/carousel.js";

export const BlogAsesor = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<CartaBlogAsesor />
		</div>
	);
};
