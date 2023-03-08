import { useState, useEffect } from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function Layout() {
  const [posts, setPosts] = useState < any > [];

  useEffect(() => {
    fetch("https://test-clone-iota.vercel.app/api/test").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);

  return (
    <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">
      <Header />
      <Outlet />
      <h5 className="posts__pathname">
        Inicio - Lista de Lecturas -
        <span className="posts__pathname--bold"> Posts</span>
      </h5>
      {posts.length > 0 && posts.map((post, index) => <div>{post.title}</div>)}
    </div>
  );
}
