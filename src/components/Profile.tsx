import React, { useState, useEffect } from "react";
const Index = () => {
  const [Users, setUsers] = useState({
    users: null,
  });
  useEffect(() => {
    fetch(`https://api.github.com/users/amineohn`)
      .then((res) => res.json())
      .then((users) => {
        setUsers({ users: users.avatar_url });
      });
  }, [setUsers]);
  const { users }: any = Users;
  return (
    <img
      src={users}
      className="inline w-20 h-20 mb-1 mr-5 transition transform rounded-full hover:scale-150"
    />
  );
};

export default Index;
