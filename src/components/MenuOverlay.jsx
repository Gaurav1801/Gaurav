import React from "react";
import NavLink from "./NavLink";

export default function MenuOverlay({ links }) {
  return (
    <div>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>

            <NavLink href={link} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
