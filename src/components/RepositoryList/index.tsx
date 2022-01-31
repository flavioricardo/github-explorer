import { RepositoryItem } from "../RepositoryItem";
import "../../styles/repositories.scss";
import { useEffect, useState } from "react";
interface UsernameProps {
  username?: string | string[];
}
interface Repository {
  name: string;
  description?: string;
  html_url: string;
}

export function RepositoryList(props: UsernameProps) {
  const API_URL = "https://api.github.com";

  const { username } = props;
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data ?? []));
  }, []);

  return (
    <section className="repository-list">
      <h1>
        Repository list from{" "}
        <a href={`https://github.com/${username}`}>{username}</a>
      </h1>

      <ul>
        {repositories?.length &&
          repositories.map((repository) => (
            <RepositoryItem key={repository?.name} repository={repository} />
          ))}
      </ul>
    </section>
  );
}
