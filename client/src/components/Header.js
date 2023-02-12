import logo from "./adopt a dog logo.jpg";

const Header = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <img class="h-24" src={logo}></img>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>Test</a>
          </li>
          <li>
            <a>Breeds</a>
          </li>
          <li>
            <a>Images</a>
          </li>
          <li>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="SSZXJ3HYFF2TA" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_ES/i/scr/pixel.gif" width="1" height="1" />
</form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
