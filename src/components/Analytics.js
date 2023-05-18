import React from "react";
import { LineChart } from "./LineChart";

const Analytics = () => {
    return (
        <div className="col-sm-7 mt-5">
            <div class="card text-center mb-3">
                <div class="card-body">
                    <LineChart/>
                </div>
            </div>
        </div>
    )
}
export default Analytics;