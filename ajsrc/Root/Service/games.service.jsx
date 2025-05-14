import axios from "axios";
import dataservice  from "../Config/api.config";

export const FOR_GET_LIST = async (URL, sendData) => {
  try {
    const response = await dataservice.get(`${URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return { status: "error", data: error.response?.data?.message };
  }
};