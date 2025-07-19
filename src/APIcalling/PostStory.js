import React, { useState } from "react";
import axios from "axios";

const PostStory = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState(null);

  const sendData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending:", { title, body });
    sendData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Send to API</button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response:</h3>
          <p>
            <strong>ID:</strong> {result.id}
          </p>
          <p>
            <strong>Title:</strong> {result.title}
          </p>
          <p>
            <strong>Body:</strong> {result.body}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostStory;
