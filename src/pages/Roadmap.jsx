import { useParams } from "react-router-dom";

export const Roadmap = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Roadmap page for: {id}</h1>
    </div>
  );
};
