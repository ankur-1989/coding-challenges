import { GET_REPOSITORIES } from "@/graphql/queries/repositoryList";
import { client } from "@/lib/apollo-client";
import Card from "@/components/repositoryCard/Card";
import styles from "./page.module.scss";

export default async function RepositoryList() {
  const { data, loading } = await client.query({
    query: GET_REPOSITORIES,
    variables: { login: "octocat" }, // TODO: Need to remove the hardcoding.
  });
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Repositories</h1>
      <ul className={styles.gridContainer}>
        {data.user.repositories.nodes.map((repo) => (
          <li key={repo.id}>
            <a href={`/repo/${repo.owner.login}/${repo.name}`} target="_blank">
              <Card repository={repo} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
