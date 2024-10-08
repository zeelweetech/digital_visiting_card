import axios from "axios";

/**
 * ADD personal Profile Details
 */
export async function addPersonalDetails({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/card/create/personal/detail`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * ADD Business Profile Details
 */
export async function addBusinessDetails({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/card/create/business/detail`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * GET Business Profile Details
 */
export async function getProfileDetails({ userName: userName }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/card/get/specific/${userName}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * GET All Card Details
 */
export async function getAllCardDetails({ id: id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/card/get/user/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
