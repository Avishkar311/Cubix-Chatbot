import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";


const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 2,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 2,
          }}
        >
          <img
            src="login.png"
            alt="login"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>

        <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    mx: "auto",
    width: isBelowMd ? "80%" : "60%",
    height: isBelowMd ? "800px" : "500px", // Fixed height for scrollable area
    overflowY: "scroll ", // Enables vertical scrolling
    padding: 9, // Adds padding inside the scrollable box
    border: "2px solid #330066", // Optional border for clarity
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 0 20px rgba(0, 191, 255, 0.5), 0 0 40px rgba(0, 191, 255, 0.3)",
    backgroundColor: "black",
    marginBottom: 10,
    '&::-webkit-scrollbar': {
      width: '12px',
      backgroundColor: '#white',
      borderRadius: "5px"
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
      borderRadius: '10px',
      border: '3px solid transparent',
      backgroundClip: 'padding-box',
    },
    '&::-webkit-scrollbar-track': {
      background: '000080',
      borderRadius: '10px',
    },
  
  }}
>
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 1 }}>
    <img
      className="image-inverted "
      src="cubix.png" // Replace with your logo path
      alt="Cubix Logo"
      style={{
        width: isBelowMd ? "40px" : "60px", // Adjust size based on screen size
        height: "auto",
        marginRight: 10, // Space between the logo and heading
        
      }}
    />
    <h2
      style={{
        textAlign: "center",
        fontSize: isBelowMd ? "1.5rem" : "2rem",
        fontWeight: "bold",
      }}
    >
      Overview of Cubix
    </h2>
  </Box>
  <p
    style={{
      textAlign: "justify",
      marginBottom: 20,
      fontSize: isBelowMd ? "1rem" : "1.2rem",
    }}
  >
    Cubix is a  chatbot developed using the MERN stack (MongoDB, Express, React, Node.js) integrated with OpenAI’s API. It is designed to provide intuitive and intelligent user interactions, making it suitable for various use cases such as customer support, content generation, and educational assistance.
  </p>

  <h3
    style={{
      textAlign: "center",
      marginBottom: 10,
      fontSize: isBelowMd ? "1.2rem" : "1.5rem",
      fontWeight: "bold"
    }}
  >
    Key Features
  </h3>

  <p
    style={{
      textAlign: "justify",
      marginBottom: 20,
      fontSize: isBelowMd ? "1rem" : "1.2rem",
    }}
  >
    <strong>1. Natural Language Processing:</strong> Cubix utilizes OpenAI's advanced natural language processing (NLP) capabilities, allowing it to understand and respond to user queries in a conversational manner. This enables it to handle a wide range of topics and inquiries effectively.
  </p>

  <p
    style={{
      textAlign: "justify",
      marginBottom: 20,
      fontSize: isBelowMd ? "1rem" : "1.2rem",
    }}
  >
    <strong>2. User Friendly Interface:</strong> The chatbot features a clean and intuitive user interface built with React. This design prioritizes user experience, allowing for easy navigation and interaction. Users can easily input their questions and receive prompt responses.
  </p>

  <p
    style={{
      textAlign: "justify",
      marginBottom: 20,
      fontSize: isBelowMd ? "1rem" : "1.2rem",
    }}
  >
    <strong>3. Integration with OpenAI API:</strong> By leveraging the OpenAI API, Cubix is capable of generating contextually relevant and coherent responses. This integration allows the chatbot to continuously learn and improve, adapting to user needs and preferences over time.
  </p>

  <p
    style={{
      textAlign: "justify",
      marginBottom: 20,
      fontSize: isBelowMd ? "1rem" : "1.2rem",
    }}
  >
    <strong>4. Customizable:</strong> Cubix can be tailored to meet specific user needs or business requirements. This includes adjusting its responses, tone, and behavior to align with brand voice or to address particular domains of inquiry.
  </p>

  <p
    style={{
      textAlign: "justify",
      marginBottom: 20,
      fontSize: isBelowMd ? "1rem" : "1.2rem",
    }}
  >
    <strong>5. Scalability:</strong>  Built on the MERN stack, Cubix is highly scalable, making it suitable for both small-scale projects and enterprise-level applications. This ensures that it can handle increased traffic and user interactions without compromising performance.
  </p>


</Box>

      </Box>
    </Box>
  );
};

export default Home;
