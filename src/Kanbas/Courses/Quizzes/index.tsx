import { BiSolidPlaneAlt } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { FaPlus, FaPencilAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteQuiz } from "./reducer";

export default function Quizzes() {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { cid } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (quizId: string) => {
    dispatch(deleteQuiz(quizId));  
  };
  return (
    <div>
      <div className="row">
        <div className="col col-6">
          <div
            className="col border border-dark rounded p-1"
            style={{ maxWidth: "300px" }}
          >
            <input
              className="border-0"
              placeholder="Search for Quiz"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col col-6">
          <Link
            to={`/Kanbas/Courses/${cid}/AddQuiz`}
            className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            <button
              id="wd-add-assignment-btn"
              className="btn btn-lg btn-danger me-1 float-end"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Quiz
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <ul className="list-group">
          <li className="wd-quiz list-group-item p-0 mt-5 fs-5">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <GoTriangleDown /> &nbsp;
              <strong>Assignment Quizzes</strong>
            </div>
            {quizzes
              .filter((quiz: any) => quiz.course === cid)
              .map((quiz: any) => (
                <div key={quiz._id} className="list-group-item p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="col-1 d-flex justify-content-center">
                      <BiSolidPlaneAlt />
                    </div>
                    <div className="col-10">
                      <h5>
                        <strong>{quiz.title}</strong>
                      </h5>
                      <h6>
                        {/* <strong>{quiz.status}</strong> &nbsp; &nbsp;{" "} */}
                        <strong>Due:</strong>
                        {quiz.dueDate} &nbsp; &nbsp; {quiz.points} pts
                        {/* &nbsp;&nbsp; {quiz.noOfQuestions} questions */}
                      </h6>
                    </div>
                    <div className="col-1 d-flex justify-content-center">
                      <Link
                        to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/QuizEdit`}
                        className="link-dark"
                        style={{ textDecoration: "none" }}
                      >
                        <FaPencilAlt />
                        &nbsp;&nbsp;
                      </Link>
                      <FaTrash onClick={() => handleDelete(quiz._id)} style={{ cursor: 'pointer' }}/>
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
