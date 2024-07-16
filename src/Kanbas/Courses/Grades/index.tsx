import { FaFileImport } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { CiSearch, CiFilter } from "react-icons/ci";

export default function Grades() {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-auto pe-1">
          <button id="wd-collapse-all-1" className="btn btn-lg btn-secondary">
            <FaFileImport />
            Import
          </button>
        </div>
        <div className="col-auto px-1">
          <button id="wd-collapse-all-2" className="btn btn-lg btn-secondary">
            <LiaFileImportSolid />
            Export
          </button>
        </div>
        <div className="col-auto ps-1">
          <button id="wd-collapse-all-3" className="btn btn-lg btn-secondary">
            <IoMdSettings />
          </button>
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col m-2">
          <div className="row">
            <div className="col">
              <label htmlFor="studentNames">
                <b>Student Names</b>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col border border-dark rounded p-1">
              <input
                className="border-0"
                placeholder="&#x1F50E; Search Stundents"
              />
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="row">
            <div className="col">
              <label htmlFor="studentNames">
                <b>Assignments Search</b>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col border border-dark rounded p-1">
              <input
                className="border-0"
                placeholder="&#x1F50E; Search Assignments"
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <button id="wd-filter-btn" className="btn btn-secondary">
            <CiFilter />
            Apply Filter
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered border border-2 rounded m-2">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th scope="col">A1 SETUP <br/> Out of 100</th>
                <th scope="col">A2 HTML <br/> Out of 100</th>
                <th scope="col">A3 CSS<br/> Out of 100</th>
                <th scope="col">A4 BOOTSTRAP<br/> Out of 100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-danger">Jane Adams</th>
                <td>100%</td>
                <td>78.6%</td>
                <td>89.5%</td>
                <td>95.6%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Simone Wanner</th>
                <td>100%</td>
                <td className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control me-2"
                    defaultValue="100%"
                    style={{ width: "80px" }}
                  />
                  <LiaFileImportSolid />
                </td>
                <td>85.6%</td>
                <td>97.6%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Deep Patel</th>
                <td>100%</td>
                <td>85.7%</td>
                <td>93.6%</td>
                <td>100%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Akshay Singh</th>
                <td>100%</td>
                <td>97.4%</td>
                <td>95.3%</td>
                <td>89.4%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Matt Williams</th>
                <td>92.1%</td>
                <td>95.7%</td>
                <td>100%</td>
                <td>94.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
