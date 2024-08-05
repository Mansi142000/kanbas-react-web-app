import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${"http://localhost:4000"}/api/courses`;
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/AddAssignment`,
    assignment
  );
  return response.data;
};
const ASSIGNMENTS_API = `${"http://localhost:4000"}/api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
// export const updateModule = async (module: any) => {
//     const response = await axios.
//       put(`${MODULES_API}/${module._id}`, module);
//     return response.data;
//   };
  
