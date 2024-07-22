import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AsignmentButtons from "./AsignmentButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown, MdOutlineLibraryBooks } from "react-icons/md";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignment() {
  const { cid } = useParams();
  return (
    <div>
      <style>
        {`
          .wd-assignment-link {
            text-decoration: none;
          }
          .red-text {
            color: red;
          }
        `}
      </style>
      <div id="wd-modules">
        <AssignmentControls />
        <br />
        <br />
        <br />
        <br />
        <ul id="wd-modules" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {assignment.name}
              <MdOutlineArrowDropDown />
              <b>ASSIGNMENTS</b>
              <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  {assignment.title}
                  <AsignmentButtons />
                </li>
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
