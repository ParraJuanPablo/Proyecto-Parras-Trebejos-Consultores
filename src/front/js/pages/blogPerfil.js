import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { CartaPerfil } from "../component/cartaPerfil";

export const BlogPerfil = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<CartaPerfil />
		</div>
	);
};
