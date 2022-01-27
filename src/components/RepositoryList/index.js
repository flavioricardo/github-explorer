import { RepositoryItem } from "../RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        <RepositoryItem
          {...{
            name: "unform",
            description: "Forms in React",
            url: "https://www.linkedin.com/in/flavioricardo/",
          }}
        />
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="#">Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="#">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}
