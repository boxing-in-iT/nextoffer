import { EditInerviewModal } from "@/page-components/interviews/EditCompany";

type tParams = Promise<{ slug: string[] }>;

export default async function EditInterview(props: { params: tParams }) {
  const id = props;
  console.log("Id: ", id);

  return <EditInerviewModal id={id.toString()} />;
}
