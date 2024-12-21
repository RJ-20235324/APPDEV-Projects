import React from "react";

const Support = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "44px" }}>
        Customer Support
      </h2>
      <p style={{ marginBottom: "20px", textAlign: "center" }}>
        If you need help or have questions, please chat with us using the
        support chatbot below.
      </p>

      {/* Embed the chatbot iframe */}
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/6aV5i39Ma0UoiU_TMdD9u"
        width="100%"
        style={{
          height: "600px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Support;
