import React from "react";
import img from "../../assets/avatar/01.jpg";
import { Link } from "react-router-dom";

export default function Header({ title, date, author }) {
  return (
    <section className="container mt-4 pt-lg-2 pb-3">
      <h1 className="pb-3" style={{ maxWidth: "970px" }}>
        {title}
      </h1>
      <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3">
        <div className="d-flex align-items-center flex-wrap text-muted mb-md-0 mb-4">
          <div className="fs-sm border-end pe-3 me-3 mb-2">{date}</div>
          <div className="d-flex mb-2">
            <div className="d-flex align-items-center me-3">
              <i className="bx bx-like fs-base me-1"></i>
              <span className="fs-sm">8</span>
            </div>
            <div className="d-flex align-items-center me-3">
              <i className="bx bx-comment fs-base me-1"></i>
              <span className="fs-sm">4</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bx bx-share-alt fs-base me-1"></i>
              <span className="fs-sm">2</span>
            </div>
            <div className="d-flex align-items-center mx-2">
              <Link to="/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA50lEQVRIS+2V4Q2CQAyFYQNXcAPdACcwbiKTMAJuoBvoCI7gCI7gewkkTYmXFnrij2vyEg4u97W9x11drRT1StyqgH/W+dLqv2/1GRkeoYPKtMG4G96/U1XM2WNCuTjjBp2GZ0Kv0AZ6QvtIsISyIlZMiITyfQtdosBhUCZkbXUo1AoOh1rAWaAWMN1LOEOb6S7MQ5M9UmbS3yx7nAVuATPZcLgVHA73gEPhXrCG6yNzNNwLE7dRJ5dch3u+g3hOy8ugwbiH6HLCv8acisfFeBkkb6BcYM9vO5m7pOICdnWgtNrVriWTP4wVRx8sKv8hAAAAAElFTkSuQmCC" />
                <span className="fs-sm">Back</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center position-relative ps-md-3 pe-lg-5 mb-2">
          <img src={img} className="rounded-circle" width="60" alt="Avatar" />
          <div className="ps-3">
            <h6 className="mb-1">Author</h6>
            <a href="#" className="fw-semibold stretched-link">
              {author}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
