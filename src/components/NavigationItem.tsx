import { INavigationItemProps } from "@/types/INavigationItemProps";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: INavigationItemProps;
}

export const NavigationItem = ({
  item: { label, path, icon: Icon },
}: Props) => {
  return (
    <li>
      <Link
        href={path}
        className="flex items-center justify-between rounded-lg p-3"
      >
        <div className="flex items-center gap-3">
          <Icon />
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      </Link>
    </li>
  );
};
