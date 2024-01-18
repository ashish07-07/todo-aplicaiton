import { useState } from "react";

export function CreateTodo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const currentvalue = e.target.value;
          settitle(title);
        }}
      ></input>
      <br></br>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const current = e.target.value;
          setdescription(current);
        }}
      ></input>
      <br></br>
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("to do addede");
          });
        }}
      >
        {" "}
        Add Todo
      </button>
    </div>
  );
}
