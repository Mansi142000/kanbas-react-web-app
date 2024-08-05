import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${"http://localhost:4000"}/api/courses`;
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${courseId}/assignments`);
  return response.data;
};
// export const createModule = async (courseId: string, module: any) => {
//   const response = await axios.post(
//     `${COURSES_API}/${courseId}/modules`,
//     module
//   );
//   return response.data;
// };
// const MODULES_API = `${"http://localhost:4000"}/api/modules`;
// export const deleteModule = async (moduleId: string) => {
//   const response = await axios.delete(`${MODULES_API}/${moduleId}`);
//   return response.data;
// };
// export const updateModule = async (module: any) => {
//     const response = await axios.
//       put(`${MODULES_API}/${module._id}`, module);
//     return response.data;
//   };
  
