interface RepositoryProps {
  repository: {
    name: string;
    description?: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryProps) {
  const { name, description, html_url } = props?.repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description ?? ""}</p>
      <a href={html_url}>Show me the code!</a>
    </li>
  );
}
