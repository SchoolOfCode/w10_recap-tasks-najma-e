import Article from "../Article/Article";
import css from "./App.module.css";
import LoginButton from "../LoginButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return <LoginButton />;
  }

  if (isAuthenticated) {
    return (
      <main className="App">
        <div className={css.navContainer}>
          <h1 className={css.title}>WikiPigeon</h1>
          <h2 className={css.greeting}>Welcome back {user.name}</h2>
          <LogoutButton />
        </div>
        <Article />
      </main>
    );
  }
}

export default App;

/* function App() {
  const [ArticleArray, setArticleArray] = useState(articles);
  return (
    <main className="App">
      <h1>WikiPigeon</h1>
      {articles.map((article) => {
        return (
          <article key={article.id} className="post">
            <h2>{article.title}</h2>
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <button className="like-button">Like 👍</button>
            <section className="comment-section">
              {article.comments.map((comment) => {
                return (
                  <div key={comment.id} className="comment">
                    <h4>{comment.name} says:</h4>
                    <p>{comment.text}</p>
                  </div>
                );
              })}
            </section>
          </article>
        );
      })}
    </main>
  );
} */
