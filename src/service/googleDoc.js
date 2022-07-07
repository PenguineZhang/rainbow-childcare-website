import axios from "axios";

const handlePostData = (userData) => {
  const email = userData[0].email;
  const name = userData[0].name;
  const age = userData[0].age;
  const gender = userData[0].gender;
  const dipper = userData[0].dipper;

  return axios.post(
    `https://sheet.best/api/sheets/43e1efac-ee4f-4208-9e7b-ab320d5f8a81`,
    { email, name, age, gender, dipper }
  );
};

const googleDocService = {
  handlePostData,
};

export default googleDocService;
