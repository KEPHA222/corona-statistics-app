import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/countries",
  headers: {
    "X-RapidAPI-Key": "d28d2bf077mshe2e45e344bbc036p1a38b8jsna7170ce70020",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
