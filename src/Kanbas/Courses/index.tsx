import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useLocation, useParams} from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import Grades from "./Grades";
import { courses } from "../Database";
import AssignmentAdder from "./Assignments/Adder";
import Quizzes from "./Quizzes";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses" className="container">
      <div className="row">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
        <div className="col col-2">
          <CoursesNavigation />
        </div>
        <div className="col col-10">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Quizzes" element={<Quizzes/>}/>
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="AddAssignment" element={<AssignmentAdder />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
