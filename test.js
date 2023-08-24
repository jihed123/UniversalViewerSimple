import fetch from "node-fetch";

const response = await fetch(
	"https://sv4ez2xiwe.execute-api.ca-central-1.amazonaws.com/dev/asset?uuid=8cae2565-683b-4909-9902-dd030af83cb2&type=IO&app=devuuid=8cae2565-683b-4909-9902-dd030af83cb2&type=IO&app=dev"
);
const data = await response.json();
const res = JSON.parse(data.API_response);
console.log(res[0].URL);
