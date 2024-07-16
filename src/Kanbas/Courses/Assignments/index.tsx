import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AsignmentButtons from "./AsignmentButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown, MdOutlineLibraryBooks } from "react-icons/md";

export default function Assignment() {
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
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineArrowDropDown />
              <b>ASSIGNMENTS</b>
              <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineLibraryBooks />
                  <span className="red-text">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 am | <br></br>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Due</b> May 12 at 11:59pm | 100 pts
                  <AsignmentButtons />
                </li>
              </a>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineLibraryBooks />
                  <span className="red-text">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00 am | <br></br>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                  <AsignmentButtons />
                </li>
              </a>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineLibraryBooks />
                  <span className="red-text">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00 am | <br></br>{" "}
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                  <AsignmentButtons />
                </li>
              </a>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
