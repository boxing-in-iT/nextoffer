"use client";
import Link from "next/link";

interface Props {
  item: {
    label: string;
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  isActive: boolean;
}

export const NavigationItem = ({
  item: { label, path, icon: Icon },
  isActive,
}: Props) => {
  return (
    <li>
      <Link
        href={path}
        className={`flex items-center gap-5 px-4 py-3 rounded-lg transition-all  ${
          isActive
            ? "bg-gray-100 text-[0f172a] shadow-md "
            : "text-[#64748b]  hover:text-gray-900"
        }`}
      >
        <Icon className="w-6 h-6" color={isActive ? "#0f172a" : "#64748b"} />
        <span className="text-lg  font-medium ">{label}</span>
      </Link>
    </li>
  );
};
