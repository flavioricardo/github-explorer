import { RepositoryItem } from "../RepositoryItem";
import "../../styles/repositories.scss";
import { useEffect, useState } from "react";

// https://api.github.com/users/flavioricardo/repos

interface Repository {
  name: string;
  description?: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/flavioricardo/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories?.length &&
          repositories.map((repository) => (
            <RepositoryItem key={repository?.name} repository={repository} />
          ))}
      </ul>
    </section>
  );
}
