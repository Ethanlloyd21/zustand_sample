import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Replace with the actual base URL of your server
});

export const getAllPokemon = () => axiosInstance.get("/pokemon/all");


// export const getAllPokemon = async () => {
//   try {
//     const response = await axiosInstance.get("/pokemon/all");
//     console.log(response);
//   } catch (error) {
//     console.error("Error fetching characters", error);
//   }
// };

// export const createUser = (name) => {
//   return axios.post("http://localhost:3004/users", { name });
// };

export const testFetch = async() => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
      return response.data;
    } catch (error) {
      throw error
    }
   
 
}