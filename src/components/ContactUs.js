import React from "react";
import 'bootstrap/dist/js/bootstrap.js';

const ContactUs = () => {
    return (
        <div className="col-5" style={{ marginTop: 40, marginBottom: 80 }}>
            <h1>Formulario de contacto</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu nombre"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo electrónico"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje"></textarea>
            </div>
            <div>
                <button class="btn btn-dark" type="submit">Enviar</button>
            </div>
        </div>
    )
}

export default ContactUs;