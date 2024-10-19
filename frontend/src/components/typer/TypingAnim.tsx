import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Built With OpenAI API",
        2000,
        "Your Own Customized Chatbot",
        1500,
        "Introducing CubixGPT",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      
    />
  );
};

export default TypingAnim;
