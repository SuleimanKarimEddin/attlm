import { ChatBody } from "./ChatBody";
import roboInage from "./robot.jpg";
export function OuterButton() {
  return (
    <>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          zIndex: "10000",
          cursor: "pointer",
        }}
      >
        <img
          src={roboInage}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          alt=""
        />
      </button>
      <ChatBody/>
    </>
  );
}
