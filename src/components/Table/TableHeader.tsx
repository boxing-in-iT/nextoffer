import { Column } from "@/types/table";

interface Props {
  className?: string;
  columns: Column[];
}

export const TableHeader: React.FC<Props> = ({ className, columns }) => (
  <thead className={`${className} border-b`}>
    <tr>
      {columns.map((column) => (
        <th
          key={column.key}
          className="border-b-1 border-white-lightgray px-4 pb-4   text-2xl font-bold text-gray-regular"
        >
          {column.label}
        </th>
      ))}
    </tr>
  </thead>
);
