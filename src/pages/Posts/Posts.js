import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../redux/postsStore";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()).then((res) => console.log(res.payload));
  }, []);

  return (
    <>
      <Link to={"create"} replace>
        Add new post
      </Link>
      <section className="section">
        <ul className="posts">
          {posts.items.map((item) => (
            <li className="posts__item" key={item._id}>
              <h2 className="posts__item-title">{item.title}</h2>
              <p className="posts__item-text">{item.text}</p>
              <p className="posts__item-tags">{item.tags}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
