import React, { useEffect, useState } from "react";

function User() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      console.log(result);
      setEmployees(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Page</h1>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
