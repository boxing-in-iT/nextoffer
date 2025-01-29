import { EditInerviewModal } from "@/page-components/interviews/EditCompany";

type tParams = Promise<{ slug: string[] }>;

export default async function EditInterview(props: { params: tParams }) {
  return <EditInerviewModal />;
}
