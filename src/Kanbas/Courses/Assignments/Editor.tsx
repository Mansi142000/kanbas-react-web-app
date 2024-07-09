export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <style>
        {`
          .btn-container {
            text-align: right;
          }
        `}
      </style>
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="assignments">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="display">
                <option value="display">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="submission">
                <option value="submission">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>Online Entry Options</p>
              <label>
                <input type="checkbox" id="wd-text-entry" name="entry_options" value="text_entry" /> Text Entry
              </label><br />

              <label>
                <input type="checkbox" id="wd-website-url" name="website_options" value="website_url" /> Website URL
              </label><br />

              <label>
                <input type="checkbox" id="wd-media-recordings" name="media_options" value="media_recordings" /> Media Recordings
              </label><br />

              <label>
                <input type="checkbox" id="wd-student-annotation" name="student_options" value="student_annotation" /> Student Annotation
              </label><br />

              <label>
                <input type="checkbox" id="wd-file-upload" name="file_options" value="file_uploads" /> File Uploads
              </label><br /><br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label><br />
            </td>
            <td>
              <input type="text" id="wd-assign-to" name="assign-to" placeholder="Everyone" /><br /><br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label><br />
            </td>
            <td>
              <input type="date" id="wd-due-date" name="due_date" defaultValue="2021-01-01" /><br /><br />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div>
                  <label htmlFor="wd-available-from">Available from</label><br />
                  <input type="date" id="wd-available-from" name="available_from" defaultValue="2021-01-01" />
                </div>
                <div>
                  <label htmlFor="wd-available-until">Until</label><br />
                  <input type="date" id="wd-available-until" name="available_until" defaultValue="2021-01-01" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <hr/>
              <div className="btn-container">
                <button type="button">Cancel</button>
                <button type="button">Save</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
