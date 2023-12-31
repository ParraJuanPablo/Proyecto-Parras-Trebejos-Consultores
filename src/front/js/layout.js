import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Sign } from "./pages/sign";

import { PerfilPostulante } from "./pages/perfilPostulante";

import { BlogPostulante } from "./pages/blogPostulante";
import { BlogAsesor } from "./pages/blogAsesor";
import { BlogPerfil } from "./pages/blogPerfil";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { NavbarHome } from "./component/navbarHome";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <NavbarHome />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<About />} path="/about" />
                        <Route element={<Sign />} path="/sign" />
                        <Route element={<PerfilPostulante />} path="/perfil/postulante" />
                        <Route element={<BlogPostulante />} path="/blog/postulante" />
                        <Route element={<BlogAsesor />} path="/blog/asesor" />
                        <Route element={<BlogPerfil />} path="/blog/perfil" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
