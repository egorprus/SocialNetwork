import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NAV_LIST = [
    {
        name: 'Weather API',
        url: 'weather'
    },
    {
        name: 'Posts',
        url: '/posts'
    }
]

export const Main = () => {
  const { data } = useSelector((state) => state.auth);

  if (!data) {
    return <h1>loading...</h1>;
  }

  return (
        <div>
            <nav className="nav">
                <ul className="nav-list">
                    {NAV_LIST.map((item, index) => (
                        <li className="nav-list__item" key={index}>
                            <Link className="nav-list__btn" replace to={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
};