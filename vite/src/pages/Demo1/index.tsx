import xx from "@/assets/logo.svg";
import "./index.css";

const Demo1 = () => {
  return (
    <div>
      <div className="chat-notification">
        <div className="chat-notification-logo-wrapper">
          <img
            className="chat-notification-logo"
            src={xx}
            alt="ChitChat Logo"
          />
        </div>
        <div className="chat-notification-content">
          <h4 className="chat-notification-title">ChitChat</h4>
          <p className="chat-notification-message">You have a new message!</p>
        </div>
      </div>
    </div>
  );
};

export default Demo1;
