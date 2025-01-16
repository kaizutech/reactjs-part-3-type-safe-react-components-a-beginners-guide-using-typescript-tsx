import { useState } from "react";

interface UserCardProps {
  name: string;
  age: number;
}

const UserCard = ({ name, age }: UserCardProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <div>
      <h1>{name}</h1>
      {!isHidden && <p>Age: {age}</p>}
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show Age" : "Hide Age"}
      </button>
    </div>
  );
};

export default UserCard;
