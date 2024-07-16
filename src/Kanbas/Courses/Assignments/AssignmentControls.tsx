import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button id="wd-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
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
