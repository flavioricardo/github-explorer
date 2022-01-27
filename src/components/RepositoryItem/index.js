export function RepositoryItem(props) {
  const { name, description, url } = props;

  return (
    <li>
      <strong>{name ?? "repository"}</strong>
      <p>{description}</p>
      <a href={url}>Access repository</a>
    </li>
  );
}
