import { FaPlus } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div className="container p-4">
      <form>
        <div className="form-group row mt-3 mb-3">
          <label htmlFor="name">
            <b>Assignment Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="A1 - ENV + HTML"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control w-100 mh-100"
            placeholder="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include your full name and section, links to each of the lab assignments, a link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
          />
        </div>
        <div className="form-group">
          <label htmlFor="points">
            <b>Points</b>
          </label>
          <input
            type="number"
            className="form-control"
            id="points"
            placeholder="Enter total points"
          />
        </div>
        <div className="form-group">
          <label htmlFor="assignmentGroup">
            <b>Assignment Group</b>
          </label>
          <select className="form-control" id="assignmentGroup">
            <option value="">Select Group</option>
            <option value="homework">Homework</option>
            <option value="project">Project</option>
            <option value="exam">Exam</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="displayGrade">
            <b>Display Grade As</b>
          </label>
          <select className="form-control" id="displayGrade">
            <option value="">Select Format</option>
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter">Letter Grade</option>
          </select>
        </div>
        <div>
          <label htmlFor="submission-type">
            <b>Submission Type</b>
          </label>
          <div className="border border-1 p-3 rounded">
            <select className="form-control mb-3" id="submission-type">
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <h6>
              <b>Online Entry Options</b>
            </h6>
            <label>
              <input
                type="checkbox"
                id="wd-text-entry"
                name="entry_options"
                value="text_entry"
              />{" "}
              Text Entry
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                id="wd-website-url"
                name="website_options"
                value="website_url"
              />{" "}
              Website URL
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                id="wd-media-recordings"
                name="media_options"
                value="media_recordings"
              />{" "}
              Media Recordings
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                id="wd-student-annotation"
                name="student_options"
                value="student_annotation"
              />{" "}
              Student Annotation
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                id="wd-file-upload"
                name="file_options"
                value="file_uploads"
              />{" "}
              File Uploads
            </label>
            <br />
            <br />
          </div>
        </div>
        <div>
          <label htmlFor="assign">
            <b>Assign</b>
          </label>
          <div className="border border-1 p-3 rounded">
            <label htmlFor="assign-to">
              <b>Assign to</b>
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="name"
              placeholder="A1 - ENV + HTML"
            />

            <div className="mb-2">
              <label htmlFor="wd-available-from">
                <b>Due</b>
              </label>
              <br />
              <div className="row">
                <div className="col col-11 border border 1" >
                  <input
                  type="text"
                  className="form-control mb-2 border border-0"
                  id="name"
                  placeholder="May 13, 2024, 11:59 PM"
                /></div>
                <div className="col col-1 border border-1 rounded-right">
                  <FaRegCalendarAlt />
                </div>
              </div>
            </div>





            <div className="row">
            <div className="mb-2 col col-6">
              <label htmlFor="wd-available-from">
                <b>Available from</b>
              </label>
              <br />
              <div className="row">
              <div className="col col-11 border border 1" >
                <input
                  type="text"
                  className="form-control mb-2 border border-0"
                  id="name"
                  placeholder="May 6, 2024, 11:59 PM"
                /></div>
                <div className="col col-1 border border-1 rounded-right">
                <FaRegCalendarAlt />
                </div>
              </div>
            </div>

            <div className="mb-2 col col-6">
              <label htmlFor="wd-available-until">
                <b>Until</b>
              </label>
              <br />
              <div className="row">
              <div className="col col-11 border border 1" >
                <input
                  type="text"
                  className="form-control mb-2 border border-0"
                  id="name"
                  placeholder="May 6, 2024, 11:59 PM"
                /></div>
                <div className="col col-1 border border-1 rounded-right">
                <FaRegCalendarAlt />
                </div>
              </div>
            </div>
            </div>



          </div>
        </div>
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          Save
        </button>
        <button
          id="wd-collapse-all"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
