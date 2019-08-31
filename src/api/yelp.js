import axios from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer LuPGrmsGUBvSbWQJSDKm13vQ5vVcv8aQju78K2gqGobgscLNHQEQTnEayorE_ZHTitb695rRmIQ9b7sLGcddAakV3bw0KwBXy4wH6iUwJWZ5TIGSB6_qVlGOHepkXXYx"
  }
});

export default yelp;
