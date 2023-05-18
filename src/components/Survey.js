import React, { useState } from "react";

const surveyDefault = {
    "survey_id": 0,
    "date": '2023-13-18',
    "answer1": 0,
    "answer2": 0,
    "answer3": 0,
    "answer4": 0,
    "answer5": 0,
    "answer6": 0,
    "answer7": 0,
    "answer8": 0,
    "answer9": 0,
    "answer10": 0,
    "userweb_id": 2,
    "sprint_id": 2,
    "company_id": 1
}
const Survey = ({ agregarEncuesta }) => {
    const [survey, setSurvey] = useState(surveyDefault);
    const { survey_id, date, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, userweb_id, sprint_id, company_id } = survey;
    const handleInputChange = (s) => {
        const handleInputChange = {
            ...survey,
            [s.target.name]: s.target.value,
        }
        setSurvey(handleInputChange);
    }

    const enviarDatos = (s) => {
        s.preventDefault();
        console.log("Datos enviados");
    }
    return (
        <div className="col-sm-7 survey mt-5">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <figure className="text-center">
                        <form class="form-card" onSubmit={enviarDatos}>
                            <div class="carousel-item carousel-item-survey active">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Tienes todas las herramientas necesarias para hacer tu mejor trabajo?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto form-check" role="group" aria-label="Basic radio toggle button group">

                                        <input type="radio" class="btn-check" name="answer1" id="option1" autocomplete="off" value={1} onChange={handleInputChange}></input><label class="btn btn-outline-primary" for="option1">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer1" id="option2" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="option2">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer1" id="option3" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="option3">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer1" id="option4" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="option4">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer1" id="option5" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="option5">Totalmente de acuerdo</label>
                                    </div>
                                    {/* <div class="d-grid gap-1 col-6 mx-auto">
                                    <button type="button" class="btn btn-dark" id="answer1" name="answer1" value="1" onClick={()=> survey.answer1 = 1}>Totalmente en desacuerdo</button>

                                    <button type="button" class="btn btn-dark" id="answer1" name="answer1" value="2" onClick={()=> survey.answer1 = 2}>En desacuerdo</button>

                                    <button type="button" class="btn btn-dark" id="answer1" name="answer1" value="3" onClick={()=> survey.answer1 = 3}>Ni en desacuerdo, ni de acuerdo</button>

                                    <button type="button" class="btn btn-dark" id="answer1" name="answer1" value="4" onClick={()=> survey.answer1 = 4}>De acuerdo </button>
                                    
                                    <button type="button" class="btn btn-dark" id="answer1" name="answer1" value="5" onClick={()=> survey.answer1 = 5}>Totalmente de acuerdo</button>
                                </div> */}
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Está satisfecho con las oportunidades de crecimiento de tu carrera en esta empresa, y hay un plan claro disponible para hacerlo?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer2" id="radio6" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio6">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer2" id="radio7" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio7">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer2" id="radio8" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio8">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer2" id="radio9" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio9">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer2" id="radio10" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio10">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Tu gerente te comunica las expectativas y te da retroalimentación de manera clara y profesional?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer3" id="radio11" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio11">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer3" id="radio12" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio12">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer3" id="radio13" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio13">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer3" id="radio14" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio14">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer3" id="radio15" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio15">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Tu equipo/departamento apoya tu trabajo y te inspira a mejorar?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer4" id="radio16" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio16">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer4" id="radio17" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio17">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer4" id="radio18" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio18">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer4" id="radio19" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio19">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer4" id="radio20" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio20">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Te sientes valorado como empleado de esta organización?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer5" id="radio21" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio21">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer5" id="radio22" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio22">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer5" id="radio23" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio23">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer5" id="radio24" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio24">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer5" id="radio25" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio25">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Está clara la declaración de la misión de la empresa y te inspira a contribuir con tu mejor trabajo?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer6" id="radio26" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio26">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer6" id="radio27" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio27">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer6" id="radio28" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio28">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer6" id="radio29" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio29">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer6" id="radio30" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio30">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Crees que la empresa fomenta la inclusión y protege a los empleados de la discriminación y el acoso?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer7" id="radio31" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio31">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer7" id="radio32" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio32">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer7" id="radio33" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio33">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer7" id="radio34" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio34">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer7" id="radio35" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio35">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Te aseguras de asumir la responsabilidad de tus acciones y decisiones en el trabajo?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer8" id="radio36" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio36">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer8" id="radio37" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio37">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer8" id="radio38" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio38">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer8" id="radio39" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio39">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer8" id="radio40" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio40">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Te aseguras de aprender de los éxitos y logros en tu trabajo y de seguir mejorando en el futuro?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer9" id="radio41" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio41">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer9" id="radio42" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio42">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer9" id="radio43" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio43">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer9" id="radio44" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio44">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer9" id="radio45" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio45">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="carousel-item carousel-item-survey">
                                <blockquote class="blockquote">
                                    <p class="mt-4">¿Te aseguras de ser transparente y honesto en tu comunicación y colaboración con tus colegas y superiores?</p>
                                    <div class="d-grid gap-1 col-6 mx-auto" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="answer10" id="radio46" autocomplete="off" value={1} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio46">Totalmente en desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer10" id="radio47" autocomplete="off" value={2} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio47">En desacuerdo</label>

                                        <input type="radio" class="btn-check" name="answer10" id="radio48" autocomplete="off" value={3} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio48">Ni en desacuerdo, ni de acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer10" id="radio49" autocomplete="off" value={4} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio49">De acuerdo</label>

                                        <input type="radio" class="btn-check" name="answer10" id="radio50" autocomplete="off" value={5} onChange={handleInputChange}></input>
                                        <label class="btn btn-outline-primary" for="radio50">Totalmente de acuerdo</label>
                                    </div>
                                </blockquote>
                                <button type="submit" class="btn btn-primary mt-1 survey-send" onClick={() => agregarEncuesta(survey)}>Enviar</button>
                            </div>
                            
                        </form>
                    </figure>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Survey;