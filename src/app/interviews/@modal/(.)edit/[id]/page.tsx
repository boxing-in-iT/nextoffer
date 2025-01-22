import { EditInerviewModal } from "@/page-components/interviews/EditCompany";

const EditInterview = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log("Id: ", id);

  return <EditInerviewModal id={id} />;
};

export default EditInterview;
