import React from "react";

function NavbarComponent() {
  const _renderTitleCompany = () => <h2>DANS Job Portals</h2>;

  const _renderMenu = () => (
    <ul className=" flex justify-center items-center gap-4">
      <li>Login</li>
      <li>Profile</li>
      <li>Notif</li>
    </ul>
  );
  
  return (
    <nav className="mt-4 bg max-w-5xl p-4 mx-auto h-10 flex rounded-xl items-center justify-between bg-white/25 text-white">
      <_renderTitleCompany />
      <_renderMenu />
    </nav>
  );
}

export default NavbarComponent;
