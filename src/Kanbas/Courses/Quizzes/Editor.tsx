import { useSelector, useDispatch } from "react-redux";
import { updateQuiz } from "./reducer";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function QuizEditor() {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { qid, cid } = useParams();
  const quiz = quizzes.find(
    (q: any) => q.course === cid && q._id === qid
  );
  const [title, setTitle] = useState(quiz?.title);
  const [description, setDescription] = useState(quiz?.description);
  const [points, setPoints] = useState(quiz?.points);
  const [dueDate, setDueDate] = useState(quiz?.dueDate);
  const [notAvailableUntil, setNotAvailableUntil] = useState(
    quiz?.notAvailableUntil
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const udtQuiz = () => {
    return {
      _id: quiz._id,
      title: title,
      course: cid,
      description: description,
      points: points,
      dueDate: dueDate,
      notAvailableUntil: notAvailableUntil,
    };
  };

  const backToQuizzes = () =>{
    navigate(`/Kanbas/Courses/${cid}/Quizzes`); 
  }

  const updateQz = () => {
    const quiz = udtQuiz();
    dispatch(updateQuiz(quiz));
    setTitle("");
    setDescription("");
    setPoints(0);
    setDueDate("");
    setNotAvailableUntil("");
    backToQuizzes();
  };
  return (
    <div className="container p-4">
      <form>
        <div className="form-group row mt-3 mb-3 p-2">
          <label htmlFor="quizTitle">
            <b>Quiz Title</b>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="quizTitle"
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
                onChange={(e) => setPoints(e.target.value)}
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
              <label htmlFor="quizType">
                <b>Quiz Type</b>
              </label>
            </div>
            <div className="col col-9 mb-3">
              <select className="form-control" id="quizType">
                <option value="">Select Type</option>
                <option value="timed">Timed</option>
                <option value="untimed">Untimed</option>
              </select>
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
                <label htmlFor="dueDate">
                  <b>Due</b>
                </label>
                <input
                  onChange={(e) => setDueDate(e.target.value)}
                  type="date"
                  className="form-control"
                  id="dueDate"
                  value={dueDate}
                />
              </div>

              <div className="row">
                <div className="mb-2 col col-6">
                  <label htmlFor="wd-available-from">
                    <b>Available from</b>
                  </label>
                  <input
                    onChange={(e) => setNotAvailableUntil(e.target.value)}
                    type="date"
                    className="form-control"
                    id="notAvailableUntil"
                    value={notAvailableUntil}
                  />
                </div>

                <div className="mb-2 col col-6">
                  <label htmlFor="wd-available-until">
                    <b>Until</b>
                  </label>
                  <input type="date" className="form-control" id="until" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          id="wd-save-quiz-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={()=>updateQz()}
        >
          Save
        </button>
        <button
          id="wd-cancel-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
          onClick={()=>backToQuizzes()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
