import React from "react";

function Footer() {
  const d = new Date();
  const day = d.getDate();
  return (
    <footer>
      <p>copyright {day}</p>
    </footer>
  );
}

export default Footer;
