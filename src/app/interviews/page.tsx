import { Table } from "@/components/Table/Table";
import { TableBody } from "@/components/Table/TableBody";
import { TableHeader } from "@/components/Table/TableHeader";
import {
  ALL_INTERVIEWS_COLUMNS,
  getTableItems,
} from "@/page-components/interviews/constant";
import { Row } from "@/types/table";

const Interviews = () => {
  const InterviewsData = [
    {
      id: 1,
      company: "Company 1",
      position: "Product Manager",
      created_at: "2023-01-01",
      credits_used: "10",
    },
    {
      id: 2,
      company: "Company 2",
      position: "Position 2",
      created_at: "2023-02-01",
      credits_used: "20",
    },
  ];

  const items = getTableItems(
    InterviewsData.map((data) => ({
      ...data,
      credits_used: Number(data.credits_used), // Convert to number
    }))
  ) as unknown as Row[];

  return (
    <div>
      <Table>
        <TableHeader columns={ALL_INTERVIEWS_COLUMNS} />
        <TableBody items={items} columns={ALL_INTERVIEWS_COLUMNS} />
      </Table>
    </div>
  );
};

export default Interviews;
