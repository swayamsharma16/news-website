import React from "react";

export default function Content({ img, title, description, date, content }) {
  return (
    <section className="container mb-5 pt-4 pb-2 py-lg-4">
      <div className="row gy-4">
        <div className="col-lg-9">
          <div
            className="mb-lg-5 mb-4"
            style={{ height: "36.45vw", minHeight: "300px" }}
          >
            <img
              src={img}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h2 className="h4">{title}</h2>
          <h3 className="h5 mb-4 pb-2 fw-medium">{description}</h3>
        </div>
      </div>
    </section>
  );
}
