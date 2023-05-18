import React from "react";
import 'bootstrap/dist/js/bootstrap.js';

const SocialMedia = () => {
    const Facebook = () => {
        window.open('https://es-la.facebook.com', '_blank')
    }
    const Instragram = () => {
        window.open('https://www.instagram.com', '_blank')
    }
    const Twitter = () => {
        window.open('https://twitter.com/?lang=es', '_blank')
    }
    return (
        <div className="col-2 text-right d-flex flex-column align-items-right mx-auto" style={{ marginTop: 40, marginBottom: 80 }}>
            <div>
                <h1>Síguenos</h1>
            </div>
            <div className="ms-4 mt-4">
                <button onClick={Facebook} type="button" class="btn btn-dark">Facebook</button>
            </div>
            <div className="ms-4 mt-4">
                <button onClick={Instragram} type="button" class="btn btn-dark">Instragram</button>
            </div>
            <div className="ms-4 mt-4">
                <button onClick={Twitter} type="button" class="btn btn-dark">Twitter</button>
            </div>
            <div className="mt-4">
                <p>© Política de privacidad</p>
            </div>
        </div>
    )
}
export default SocialMedia;