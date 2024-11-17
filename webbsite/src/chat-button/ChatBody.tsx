import axios from "axios";
import { useState } from "react";

export function ChatBody() {
  const [message, setmessage] = useState("");
  const [Messages, setMessages] = useState<
    {
      user: boolean;
      message: string;
    }[]
  >([]);

  const sendMessage = async () => {
    try {

      console.log("start");
      const { data, status } = await axios.get(
        `http://localhost:3000/ai/similar?text=${message}`
      );
      console.log("status", status);

      console.log(data, "end");
      setMessages((pre)=>[
        ...pre,
        {
          user: false,
          message:
            data.data === "false \n"
              ? "sorry i don't have the answer for that"
              : data.data,
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      style={{
        height: "700px",
        width: "500px",
        position: "absolute",
        bottom: "70px",
        right: "60px",
        backgroundColor: "white",
        borderRadius: "1%",
        overflow: "hidden",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          height: "70px",
          backgroundColor: "#3586ff",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        header
      </div>
      <div
        style={{
          height: "550px",
          backgroundColor: "#333",
          overflowY: "scroll",
        }}
      >
        {Messages.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: item.user ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                backgroundColor: item.user ? "#3586ff" : "#333",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              {item.message}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          height: "80px",
          backgroundColor: "#3586ff",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
          paddingInline: "20px",
        }}
      >
        <input
          style={{
            width: "100%",
            height: "40px",
          }}
          type="text"
          value={message}
          onChange={(e) =>{
            setmessage(e.target.value)}}
        />
        <button
          style={{
            width: "70px",
            height: "40px",
            backgroundColor: "#333",
            color: "#3586ff",
            fontWeight: "bold",
          }}
          onClick={()=>{
            setMessages((pre)=>[...pre, { user: true, message }]);
            sendMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
