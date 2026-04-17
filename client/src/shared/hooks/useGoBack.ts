import { useNavigate } from "react-router";

/**
 * Custom hook to handle "go back" navigation safely.
 * If browser history exists => go back.
 * Otherwise => navigate to fallback route.
 */
export function useGoBack(fallback: string = "/") {
  const navigate = useNavigate();

  const goBack = () => {
    // Check if there is navigation history
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return goBack;
}
