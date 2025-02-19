import React, { useState } from "react";

import postService from "../services/postService";

function CreateComponent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const [message, setMessage] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("image", image);

    const response = await postService.create(formData);
    if (response.status === 200) {
      setMessage("Post created successfully!");
    } else {
      setMessage("Failed to create post!");
    }

    e.target.reset();
  };
  return (
    <div>
      <h2>Create Post</h2>

      <form action="" onSubmit={handleSumbit}>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          id=""
        />
        <br />
        <br />
        <input
          type="date"
          name="date"
          id=""
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <input
          type="file"
          name="file"
          id=""
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <button className="border border-black p-2">Submit</button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default CreateComponent;
