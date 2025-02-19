import axios from "axios";

class Post {
  create(formData) {
    const url = "http://localhost:5000/api/createpost";

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }

  getPost() {
    const url = "http://localhost:5000/api/getpost";

    return axios.get(url);
  }
}

export default new Post();
