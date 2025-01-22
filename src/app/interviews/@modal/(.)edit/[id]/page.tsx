import { EditInerviewModal } from "@/page-components/interviews/EditCompany";

// Define a type for the params
interface EditInterviewProps {
  params: {
    id: string;
  };
}

const EditInterview = async ({ params }: EditInterviewProps) => {
  const { id } = params;
  console.log("Id: ", id);

  return <EditInerviewModal id={id} />;
};

export default EditInterview;
