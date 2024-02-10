import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(`http://localhost:81/api/v1/notification`, null, {
      params: {
        email,
      },
    });
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default UserEmailDataService;
