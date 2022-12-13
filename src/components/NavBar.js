import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Links = links.map((link) => {
    return <a key={link}>{link}</a>;
  });
  console.log(Links)
  return <nav>{Links}</nav>;
}

export default NavBar;
