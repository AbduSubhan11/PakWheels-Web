import React from "react";
import Link from "next/link";

type ListItemProps = {
  title: string;
  href: string;
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({ title, href, children }) => {
  return (
    <li>
      <Link href={href}>
        <div className="block rounded-md p-3 hover:text-[#518ECB]">
          <div className="font-medium ">{title}</div>
          <p className="text-sm ">{children}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
