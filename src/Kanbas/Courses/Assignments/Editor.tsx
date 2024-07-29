import { FaPlus } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { aid, cid } = useParams();
  const assignment = assignments.find(
    (a: any) => a.course === cid && a._id === aid
  );
  const [title, setTitle] = useState(assignment?.title);
  const [description, setDescription] = useState(assignment?.description);
  const [points, setPoints] = useState(assignment?.points);
  const [dueDate, setDueDate] = useState(assignment?.dueDate);
  const [availableDate, setAvailableDate] = useState(assignment?.availableDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const udtAssignment = () => {
    return {
      _id: assignment._id,
      title: title,
      course: cid,
      description: description,
      points: points,
      dueDate: dueDate,
      availableDate: availableDate,
    };
  };

  const backToAssignments = () =>{
    navigate(`/Kanbas/Courses/${cid}/Assignments`); 
  }

  const updateAsg = () => {
    const assignment = udtAssignment();
    dispatch(updateAssignment(assignment));
    setTitle("");
    setDescription("");
    setPoints(0);
    setDueDate("");
    setAvailableDate("");
    backToAssignments();
  };
  return (
    <div className="container p-4">
      <form>
        <div className="form-group row mt-3 mb-3 p-2">
          <label htmlFor="name">
            <b>Assignment Name</b>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            value={title}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="form-control w-100 mb-3"
            style={{ height: "200px" }}
            value={description}
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <label htmlFor="points" className="text-end">
                <b>Points</b>
              </label>
            </div>
            <div className="col col-9 mb-3">
              <input
                onChange={(e) => setPoints(Number(e.target.value))}
                type="number"
                className="form-control"
                id="points"
                value={points}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <label htmlFor="assignmentGroup">
                <b>Assignment Group</b>
              </label>
            </div>
            <div className="col col-9 mb-3">
              <select className="form-control" id="assignmentGroup">
                <option value="">Select Group</option>
                <option value="homework">Homework</option>
                <option value="project">Project</option>
                <option value="exam">Exam</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <label htmlFor="displayGrade">
                <b>Display Grade As</b>
              </label>
            </div>
            <div className="col col-9 mb-3">
              <select className="form-control" id="displayGrade">
                <option value="">Select Format</option>
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter">Letter Grade</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <label htmlFor="submission-type">
              <b>Submission Type</b>
            </label>
          </div>
          <div className="col col-9 mb-3">
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
        </div>

        <div className="row">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <label htmlFor="assign">
              <b>Assign</b>
            </label>
          </div>
          <div className="col col-9 mb-3">
            <div className="border border-1 p-3 rounded">
              <label htmlFor="assign-to">
                <b>Assign to</b>
              </label>
              <input type="text" className="form-control mb-2" id="name" />

              <div className="mb-2">
                <label htmlFor="wd-available-from">
                  <b>Due</b>
                </label>
                <br />
                <div className="row">
                  <div className="col col-11 border border 1">
                    <input
                      onChange={(e) => setDueDate(e.target.value)}
                      type="text"
                      className="form-control mb-2 border border-0"
                      id="name"
                      value={dueDate}
                    />
                  </div>
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
                    <div className="col col-10 border border 1">
                      <input
                        onChange={(e) => setAvailableDate(e.target.value)}
                        type="text"
                        className="form-control mb-2 border border-0"
                        id="name"
                        value={availableDate}
                      />
                    </div>
                    <div className="col col-2 border border-1 rounded-right">
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
                    <div className="col col-10 border border 1">
                      <input
                        type="text"
                        className="form-control mb-2 border border-0"
                        id="name"
                      />
                    </div>
                    <div className="col col-2 border border-1 rounded-right ">
                      <FaRegCalendarAlt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={() => updateAsg()}
        >
          Save
        </button>
        <button
          id="wd-collapse-all"
          className="btn btn-lg btn-secondary me-1 float-end"
          onClick={() => backToAssignments()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
