interface RepositoryProps {
  repository: {
    name: string;
    description?: string;
    html_url: string;
    language: string;
  };
}

export function RepositoryItem(props: RepositoryProps) {
  const { name, description, html_url, language } = props?.repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description ?? ""}</p>
      <div>Main language: {language}</div>
      <a href={html_url}>Show me the code!</a>
    </li>
  );
}
