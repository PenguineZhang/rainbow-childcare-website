import axios from "axios";

const handlePostData = (userData) => {
  const email = userData[0].email;
  const name = userData[0].name;
  const age = userData[0].age;
  const gender = userData[0].gender;
  const dipper = userData[0].dipper;

  return axios.post(
    `https://sheet.best/api/sheets/49ea226b-ca26-42e2-90f9-d5417d9bba1d`,
    { email, name, age, gender, dipper }
  );
};

const googleDocService = {
  handlePostData,
};

export default googleDocService;
