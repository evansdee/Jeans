import { FaWindowClose } from "react-icons/fa";
import Button from "./button";

export default function PopUp({onClick}) {
  return (
    <div className="pop-container">
      <div className="pop">
        <form action="">
          <h3>sign up for newsletters, promotions & updates</h3>
          <input type="email" required placeholder="Email" />
          <br />
          <input type="name" required placeholder="First Name" />
          <br />
          <input type="name" required placeholder="Last Name" />
          <br />
          <Button>Continue</Button>
        </form>

        <div className="img">
          <img src="./img/one.jpg" alt="" />
        </div>

        <div className="close">
          <FaWindowClose onClick={onClick}/>
        </div>
      </div>
    </div>
  );
}
