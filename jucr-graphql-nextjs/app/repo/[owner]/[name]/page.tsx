import DynamicForm from "@/components/DynamicForm";
import { GET_REPOSITORY_DETAIL } from "@/graphql/queries/repositoryDetail";

export default async function RepositoryDetail({
  params,
}: {
  params: Promise<{ owner: string; name: string }>;
}) {
  const { owner, name } = await params;

  return (
    <div>
      <h1>Repository Details</h1>
      <DynamicForm query={GET_REPOSITORY_DETAIL} variables={{ owner, name }} />
    </div>
  );
}
