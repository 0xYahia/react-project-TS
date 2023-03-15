import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/", { replace: true })}
      className="btn btn-secondary btn-sm"
    >
      Go To Home
    </button>
  );
};

export default About;
