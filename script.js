const tbody = document.getElementById("tbody");
const countryInfo = document.getElementById("countryInfo");

// Fetch data from the API & I am storing data in response.
let storeData = {}; //Using this variable to store the fetched data grobally.
function fetchData() {
  fetch(`https://disease.sh/v3/covid-19/countries`)
    .then((responseData) => responseData.json())
    .then((responseData) => {
      storeData = responseData;
      showData();
    });
}

fetchData();

function showData() {
  storeData.map((data) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.active}</td>
        <td>${data.country}</td>
        <td><button type="button" id="showMore" onclick="showMoreInfo()">+</button></td>
        <td id="countryInfo">${
          "Id: " +
          data.countryInfo._id +
          " lat: " +
          data.countryInfo.lat +
          " long: " +
          data.countryInfo.long +
          " flag: " +
          data.countryInfo.flag
        }</td>
    `;
    tbody.append(row);
  });
}

function showMoreInfo() {
  // storeData.map((data) => {
  var x = document.getElementById("countryInfo");
  x.style.display = "block";
  console.log("show More");
  // });
}
