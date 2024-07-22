import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import './index.css';

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams<{ cid: string }>();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  const getCurrentPage = () => {
    return links.find(link => pathname.includes(link)) || "Home";
  };

  const getPath = (link: string) => `/Kanbas/Courses/${cid}/${link}`;

  const currPage = getCurrentPage();

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActiveLink = currPage === link;
        const linkClass = isActiveLink ? 'text-danger active' : 'text-dark';

        return (
          <Link
            key={link}
            to={getPath(link)}
            className={`list-group-item border-0 ${linkClass}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
