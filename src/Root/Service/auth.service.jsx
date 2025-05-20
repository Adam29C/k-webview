import axios from "axios";
// const header = {
//   "Content-Type": "application/json",
//   "auth-token":
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJkMDFlZjgyNGNjNGJlNmIwIiwiaWF0IjoxNzQ0NzgzMzkyfQ.0BckhRvq3uqlxtbEtMoKhVcsKvzv6k8Dh9jeKKvfIfc",
//   "x-api-key":
//     "JDJhJDEwJGJDay9ZN25MMUlFT3l4ZHJNOXJybWV1bHM4SldUZ3NUblFXZ3RhLzlFc0REUXBLbWI5YUky",
//   Authorization: "d01ef824cc4be6b0",
// };

export const FOR_GET_LIST = async (URL, sendData) => {
  try {
    const response = await axios.get(`${URL}`, {
      headers: header,
    });

    return response.data;
  } catch (error) {
    return { status: "error", data: error.response?.data?.message };
  }
};

export const FOR_POST_REQUEST = async (URL, sendData) => {
  try {
    const response = await axios.post(`${URL}`, sendData, {
      // headers: header,
    });

    
    return response.data;
  } catch (error) {
    return error;
  }
};

export const FOR_DELETE_REQUEST = async (URL, sendData) => {
  try {
    const response = await axios.delete(`${URL}/${sendData}`, {
      headers: header,
    });

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const FOR_UPDATE_REQUEST = async (URL, sendData) => {
  try {
    const response = await axios.patch(`${URL}`, sendData, {
      headers: header,
    });

    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const GET_UPLOAD_DOCUMENT_LINK = async (URL, sendData) => {
  try {
    const response = await axios.post(`${URL}`, sendData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return error.response;
  }
};
