import { memo } from "react";
import { useState, useRef, useEffect } from "react";

// css!
import css from "./ChatBot.module.css";

// lucide-react!
import { Search } from "lucide-react";

// react-router!
import { Link } from "react-router-dom";

// components!
import Header2 from "../components/Header2";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello!, What’s today’s occasion?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    // Fake bot reply for now
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: " (see you after update..)",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
    setInput("");
  };
  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Header2 />
      <div className={css.bodyFlex}>
        <div className={css.container}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={
                msg.sender === "user" ? styles.userMessage : styles.botMessage
              }
            >
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className={css.inputBox}>
          <Search />
          <input
            className={css.input}
            type="text"
            placeholder="Talk to Totoro..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        </div>

        <button className={css.backHomeBtn}>
          <Link to={"/"} className="links">
            Back to Home
          </Link>
        </button>
      </div>
    </>
  );
};

const styles = {
  chatBox: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
  userMessage: {
    alignSelf: "flex-end",
    background: "#1a1f1a",
    padding: "10px 15px",
    borderRadius: "15px",
    margin: "10px 0",
    maxWidth: "60%",
    color: "white",
  },
  botMessage: {
    alignSelf: "flex-start",
    background: "#333",
    padding: "10px 15px",
    borderRadius: "15px",
    margin: "10px 0",
    maxWidth: "60%",
    color: "white",
  },
};

export default memo(ChatBot);
