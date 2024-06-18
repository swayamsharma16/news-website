import React from "react";
import { Link } from "react-router-dom";
import avatarImage from "../assets/avatar/01.jpg";

export default function Article({
  id,
  articleImage,
  title,
  description,
  date,
}) {
  return (
    <article className="card border-0 shadow-sm overflow-hidden mb-4">
      <div className="row g-0">
        <div
          className="col-sm-4 position-relative"
          style={{
            backgroundImage: `url(${articleImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "15rem",
          }}
        >
          <Link
            to={`/post/${encodeURIComponent(title)}`}
            className="position-absolute top-0 start-0 w-100 h-100"
            aria-label="Read more"
          ></Link>
        </div>

        <div className="col-sm-8">
          <div className="card-body">
            <h3 className="h4">
              <Link
                to={`/post/${encodeURIComponent(title)}`}
                className="text-dark text-decoration-none"
              >
                {title}
              </Link>
            </h3>
            <p className="text-muted">{description}</p>
            <div className="d-flex align-items-center mt-4">
              <img
                src={avatarImage}
                alt="Author Avatar"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div className="ms-2">
                <small className="text-muted">{date}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
