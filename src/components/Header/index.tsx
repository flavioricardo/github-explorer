interface UsernameProps {
  username?: string;
}

export function Header({ username }: UsernameProps) {
  return (
    <h1>
      Repository list from{" "}
      <a href={`https://github.com/${username}`}>{username}</a>
    </h1>
  );
}
