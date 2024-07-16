import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home" className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-8">
          <Modules />
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-4" >
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}

