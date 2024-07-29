import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

export default function AssignmentControls() {
  const { cid} = useParams();
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Link
        to={`/Kanbas/Courses/${cid}/AddAssignment`}
        className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </Link>
      <button
        id="wd-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button
        id="wd-search-btn"
        className="btn btn-outline-secondary d-flex align-items-center"
        style={{ width: "300" }}
      >
        <CiSearch className="me-2" style={{ bottom: "1px" }} />
        <span>Search...</span>
      </button>
    </div>
  );
}
