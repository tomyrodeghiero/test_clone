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
      {posts.length > 0 &&
        posts.map((post, index) => (
          <div className="posts__container">
            <Card
              _id={post._id}
              cover={post.cover}
              title={post.title}
              number={index}
              author={post.author}
              createdAt={post.createdAt}
              summary={post.summary}
            />
          </div>
        ))}
    </div>
  );
}
