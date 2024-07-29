import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end">
      <button className="btn-secondary rounded">40% of Total</button>
      <FaTrash
        className="text-danger me-2 mb-1"
        style={{ marginLeft: '10px' }} 
        onClick={() => deleteAssignment(assignmentId)}
      />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
