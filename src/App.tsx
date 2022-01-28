import queryString from "query-string";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

export default function App() {
  const query = queryString.parse(location.search);
  const { user } = query;

  return user ? (
    <RepositoryList user={user} />
  ) : (
    <section className="repository-list">
      <h1>No user selected!</h1>
    </section>
  );
}
