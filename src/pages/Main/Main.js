import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../redux/postsStore";

const NAV_LIST = [
  {
    name: "Weather API",
    url: "weather",
  },
  {
    name: "Posts",
    url: "/posts",
  },
];

export const Main = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const publicPosts = posts.items.filter((item) => !item.privacy);

  useEffect(() => {
    dispatch(fetchPosts()).then((res) => console.log(res.payload));
  }, []);

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
      <section className="section">
        <ul className="posts">
          {publicPosts.map((item) => (
            <li className="posts__item" key={item._id}>
              <h2 className="posts__item-title">{item.title}</h2>
              <p className="posts__item-text">{item.text}</p>
              <p className="posts__item-tags">{item.tags}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
