import { RepositoryItem } from "../RepositoryItem";
import "../../styles/repositories.scss";
import { useEffect, useState } from "react";
import { Header } from "../Header";
interface UsernameProps {
  username?: string;
}
interface RepositoryProps {
  name: string;
  description?: string;
  html_url: string;
  language: string;
}

interface LanguageProps {
  name: string;
  count: number;
}

export function RepositoryList(props: UsernameProps) {
  const API_URL = "https://api.github.com";

  const { username } = props;
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [languages, setLanguages] = useState<LanguageProps[]>([]);

  async function fetchRepositoriesInfo({ username }: UsernameProps) {
    return await fetch(`${API_URL}/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => data ?? []);
  }

  async function handleRepositoriesData({ username }: UsernameProps) {
    const repositories = await fetchRepositoriesInfo({ username });

    if (repositories?.length) {
      setRepositories(repositories);

      const languages: LanguageProps[] = [];

      repositories.forEach((repository: RepositoryProps) => {
        const index = languages.findIndex(
          (language) => language?.name === repository?.language
        );

        if (repository?.language) {
          if (index === -1) {
            languages.push({ name: repository?.language, count: 1 });
          } else {
            languages[index].count += 1;
          }
        }
      });

      setLanguages(languages);
    }
  }

  useEffect(() => {
    handleRepositoriesData({ username });
  }, [username]);

  return (
    <>
      <Header username="" />
      <section className="repository-list">
        <h2>Most used languages:</h2>

        <ul>
          {languages?.length
            ? languages.map((language) => (
                <li>
                  {language?.name} ({language?.count})
                </li>
              ))
            : null}
        </ul>

        <ul>
          {repositories?.length
            ? repositories.map((repository) => (
                <RepositoryItem
                  key={repository?.name}
                  repository={repository}
                />
              ))
            : null}
        </ul>
      </section>
    </>
  );
}
