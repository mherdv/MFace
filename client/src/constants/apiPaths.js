const host = "http://localhost:8080";

const paths = {
  login: host + "/api/authorization/login",
  registragion: host + "/api/authorization/registration",
  searchUser: host + "/api/users/search"
};

export default paths;
