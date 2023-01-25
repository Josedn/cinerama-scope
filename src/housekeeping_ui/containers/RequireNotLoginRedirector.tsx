import { useEffect } from "react";
import { useAppSelector } from "../../housekeeping_state/hooks";
import { selectToken } from "../../housekeeping_state/reducers/loginSlice";
import { useNavigate } from "react-router-dom";

export default function RequireNotLoginRedirector() {
  const loginToken = useAppSelector(selectToken);
  const loggedIn = loginToken.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return <></>;
}