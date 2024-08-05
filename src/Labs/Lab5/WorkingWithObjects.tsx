import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: true,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const [module, setModule] = useState({
    id: 1,
    name: "Module1",
    description: "This is first Module",
    course: "Web Dev",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />
      <h4>Getting Module - On your Own </h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
      <h4>Getting Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Name
      </a>
      <hr />
      <h4>Update Name</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />
      <h4>Update Description</h4>
      <a
        id="wd-update-module-desc"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/desc/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
      <h4>Modifying Score</h4>
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <input
        className="form-control w-75"
        id="wd-assignment-score"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <hr />

      <h4>Modifying Completed</h4>
      <form>
        <input
          type="checkbox"
          id="completedCheckbox"
          name="completed"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label htmlFor="completedCheckbox">Completed</label><br />
      </form>
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        View Change
      </a>
    </div>
  );
}
