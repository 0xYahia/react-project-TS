import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const [searchParams, setSeatchParams] = useSearchParams();
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
