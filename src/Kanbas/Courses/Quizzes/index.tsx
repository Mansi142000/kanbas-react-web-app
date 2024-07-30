import React from "react";
import { useParams } from "react-router-dom";
import { quizzes } from "../../Database";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

export default function Quizzes() {
  const { cid } = useParams();

  return (
    <div>
      <div className="row">
        <div className="col border border-dark rounded p-1" style={{ maxWidth: '300px' }}> {/* Adjusted the width here */}
          <input className="border-0" placeholder="Search for Quiz" style={{ width: '100%' }} /> {/* Ensures input takes full width of its parent */}
        </div>
      </div>
      <div className="row">
        <ul className="list-group">
          <li className="wd-module list-group-item p-0 mt-5 fs-5">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <GoTriangleDown/> &nbsp;
              <strong>Assignment Quizzes</strong>
            </div>
            {quizzes
              .filter((quiz) => quiz.course === cid)
              .map((quiz, index) => (
                <div key={index} className="list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col col-1">
                      <BiSolidPlaneAlt />
                    </div>
                    <div className="col col-11">
                      <h5>
                        <strong>{quiz.title}</strong>
                      </h5>
                      <h6>
                        <strong>{quiz.status}</strong> &nbsp; &nbsp; <strong>Due:</strong>{" "}
                        {quiz.dueDate} &nbsp; &nbsp; {quiz.points} pts &nbsp;
                        &nbsp; {quiz.noOfQuestions} questions
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
