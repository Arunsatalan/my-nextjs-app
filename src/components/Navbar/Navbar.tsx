import Link from "next/link";
import React from "react";
 

const navbar = () => {

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contacts" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <div>
      <Link href="/">nav</Link>

      <div>
        {links.map(links =>(
          <Link key={links.id} href={links.url}>{links.title}</Link>
        ))}

        
      </div>
    </div>
  );
};

export default navbar;
