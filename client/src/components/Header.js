import logo from "./adopt a dog logo.jpg";
import DonateButton from "./DonateButton";

const Header = () => {
  return (
    
    <div class="navbar bg-base-100">
      <div class="flex-1">
       <a href="/"> <img class="h-24" src={logo}></img></a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>Test</a>
          </li>
          <li>
            <a href="/breeds">Breeds</a>
          </li>
          <li>
            <a>Images</a>
          </li>
          <li>
          <DonateButton/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
