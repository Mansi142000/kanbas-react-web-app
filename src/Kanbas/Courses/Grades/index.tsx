import React, { useEffect, useState } from 'react';
import { FaFileImport } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

import usersData from '../../Database/users.json';
import gradesData from '../../Database/grades.json';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

interface Grade {
  _id: string;
  student: string;
  assignment: string;
  grade: string;
}

export default function Grades() {
  const [students, setStudents] = useState<User[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [assignmentNames, setAssignmentNames] = useState<string[]>([]);

  useEffect(() => {
    setStudents(usersData as User[]);
    setGrades(gradesData as Grade[]);
    const uniqueAssignments = Array.from(new Set(gradesData.map(grade => grade.assignment)));
    setAssignmentNames(uniqueAssignments);
  }, []);

  const getStudentGrades = (studentId: string) => {
    const studentGrades = grades.filter(grade => grade.student === studentId);
    return assignmentNames.map((assignmentName) => {
      const grade = studentGrades.find(g => g.assignment === assignmentName);
      return <td key={`${studentId}-${assignmentName}`}>{grade ? `${grade.grade}%` : '0%'}</td>;
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-auto pe-1">
          <button className="btn btn-lg btn-secondary">
            <FaFileImport />
            Import
          </button>
        </div>
        <div className="col-auto px-1">
          <button className="btn btn-lg btn-secondary">
            <LiaFileImportSolid />
            Export
          </button>
        </div>
        <div className="col-auto ps-1">
          <button className="btn btn-lg btn-secondary">
            <IoMdSettings />
          </button>
        </div>
      </div>
      <div className="row mt-3">
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
                placeholder="&#x1F50E; Search Students"
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
          <button className="btn btn-secondary">
            <CiFilter />
            Apply Filter
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered border border-2 rounded m-2">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                {assignmentNames.map((name) => (
                  <th key={name} scope="col">{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student._id}>
                  <th scope="row" className="text-danger">{`${student.firstName} ${student.lastName}`}</th>
                  {getStudentGrades(student._id)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
