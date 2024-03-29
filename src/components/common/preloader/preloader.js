import React from "react"

function Preloader() {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Preloader;
