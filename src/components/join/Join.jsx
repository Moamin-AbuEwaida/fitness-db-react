import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l8s4tpl",
        "template_zdwprlf",
        form.current,
        "RPOxBZWc2by3rmLXX"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      {/* left side */}
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      {/* right side */}
      <div className="right-j">
        <form ref={form} className="email-container" on Submit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join Us</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
