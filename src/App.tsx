import { Routes, Route, Link } from "react-router-dom";
import queryString from "query-string";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

export default function App() {
  let params = new URLSearchParams(location.search);
  const username = params.get("username");

  return username ? (
    <RepositoryList username={username} />
  ) : (
    <section className="repository-list">
      <h1>No user selected!</h1>
    </section>
  );
}
