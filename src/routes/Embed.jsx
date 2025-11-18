import { useLocation } from "react-router-dom";
import Survey from "./Survey";

export default function Embed() {
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);

  const community = params.get("community") || "default";
  const theme = params.get("theme") || "light";
  const source = params.get("source") || "website";
  const color = params.get("color");

  return (
    <Survey
      isEmbed={true}
      community={community}
      theme={theme}
      source={source}
      color={color}
    />
  );
}
