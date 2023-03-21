import { useContext, ContextType } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
const About = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/", { replace: true })}
      className={`btn ${
        theme === "light" ? "btn-secondary" : "btn-black"
      }  btn-sm mt-4`}
    >
      Go To Home - {theme}
    </button>
  );
};

export default About;
