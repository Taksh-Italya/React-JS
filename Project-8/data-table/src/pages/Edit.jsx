import { useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  return (
    <div className="container mt-4">
      <UserForm mode="edit" userId={id} />
    </div>
  );
}
