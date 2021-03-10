export function RepositoryItem(props) {
  return (
    <li>
      <img src={props.repository.owner.avatar_url} alt="" />

      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar Repositório
      </a>
    </li>
  );
}
