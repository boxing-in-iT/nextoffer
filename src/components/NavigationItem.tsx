// "use client";
import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

interface Props {
  item: {
    label: string;
    path: string;
    icon: any;
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
        className={`flex items-center justify-between rounded-lg p-3 transition-colors ${
          isActive && "text-[#1D4ED8] underline"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon />
          <span className="text-sm font-medium">{label}</span>
        </div>
      </Link>
    </li>
  );
};
