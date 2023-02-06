import React from "react";

function UserForm({ name, setName }) {
  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default UserForm;
