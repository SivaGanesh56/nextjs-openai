/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import a from "./a";

console.log(a);

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const users = await response.json();

  return (
    <div className="flex flex-wrap gap-5 p-10">
      {users.slice(0, 20).map((user: any) => {
        if (user.id === 4) {
          return (
            <div key={user.id} className="flex flex-col border border-gray-500">
              <p>{user.id}</p>
            </div>
          );
        }

        return (
          <div key={user.id} className="flex flex-col border border-gray-500">
            <p>{user.id}</p>
            <p>{user.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
