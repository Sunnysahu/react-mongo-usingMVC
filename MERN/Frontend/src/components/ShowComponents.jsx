import postService from "../services/postService";

import { useState, useEffect } from "react";
function ShowComponents() {
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    try {
      const response = await postService.getPost();
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(post.data);

  return (
    <div>
      <h1>Posts</h1>

      {post.data != undefined && post.data.length > 0 && (
        <table className="w-full mt-5 border-2 border-black ">
          <thead>
            <th>Title</th>
            <th>Date</th>
            <th>Image</th>
          </thead>
          <tbody>
            {post.data.map((post, index) => (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <img
                    src={"http://localhost:5000/api/Images/" + post.image}
                    alt={"No Image to Display"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowComponents;
