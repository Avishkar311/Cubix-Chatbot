import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
        
          src="cubix.png"
          alt="cubix"
          width={"60px"}
          height={"60px"}
          className="image-inverted rotate"
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "700",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "30px" }}>CUBIX</span>
      </Typography>
    </div>
  );
};

export default Logo;
