import React from "react";

const Sprints = () => {
    return (
        <div className='mt-5 col-md-2'>
            <h4 class="text-center mb-3">Sprint</h4>
            <div class="mb-3 gap-2 d-grid ">
                <button class="btn btn-outline-secondary ms-2  btn-dark" type="añadir" id="button-addon1 me-2">Sprint 1</button>
            </div>
            <div class="mb-3 gap-2 d-grid  ">
                <button class="btn btn-outline-secondary ms-2  btn-dark" type="añadir" id="button-addon2 ">Sprint 2</button>
            </div>
            <div class="mb-3 gap-2 d-grid">
                <button class="btn btn-outline-secondary ms-2 btn-dark " type="añadir" id="button-addon3">Sprint 3</button>
            </div>
            <div class="mb-3 gap-2 d-grid ">
                <button class="btn btn-outline-secondary ms-2 btn-dark" type="añadir" id="button-addon4">Sprint 4</button>
            </div>
            <div class="mb-3 gap-2 d-grid">
                <button class="btn btn-outline-secondary ms-2  btn-dark " type="añadir" id="button-addon5">Sprint 5</button>
            </div>
            <div class="mb-3 gap-2 d-grid  ">
                <button class="btn btn-outline-secondary ms-2 btn-sm  btn-dark " type="añadir" id="button-addon+">+</button>
            </div>
        </div>
    )
}

export default Sprints;