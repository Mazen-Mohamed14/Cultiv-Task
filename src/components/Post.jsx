import { Link } from "react-router-dom";

export const Post = (props) => {
  return (
    <div className="col col-sm-9 card-size">
      <div className="card shadow-lg post-card">
        <img
          className="bd-placeholder-img card-img-top post-img"
          src={props.source}
          role="img"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        ></img>
        <hr></hr>
        <div className="card-body">
          <h5 className="card-title mt-3">{props.title}</h5>
          <p className="card-desc">{props.desc}</p>
          <p className="card-text">{props.text}</p>
          <div className="d-flex justify-content-between align-items-center btn-container">
            <Link className="card-btn" to={`blogs/${props.id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
