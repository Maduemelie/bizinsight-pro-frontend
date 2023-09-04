

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src="" alt="Profile" />
      <div>
        <h3>User</h3>
        <p>email</p>
      </div>
    </div>
  );
}




function NavigationMenu() {
  return (
    <ul className="navigation-menu">
      <li>Dashboard</li>
      <li>Sales</li>
      <li>Inventory</li>
      <li>Customers</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  );
}



function Header() {
  return (
    <header className="app-header">
      <UserProfile  />
      <NavigationMenu />
    </header>
  );
}









const PersonalAcountHome = () => {
    return (
        <div>
          <Header />
        </div>
    );
}

export default PersonalAcountHome;