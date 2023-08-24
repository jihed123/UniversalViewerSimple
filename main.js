import * as indexJs from "./node_modules/universalviewer/dist/esm/index.js";

const startime = performance.now();
const data = {
	manifest:
		// "https://edsilv.github.io/test-manifests/download-service-enabled.json",
		"https://wellcomelibrary.org/iiif/b18035723/manifest",
	// "https://www.e-rara.ch/i3f/v20/6069569/manifest",
	// "https://dms-data.stanford.edu/data/manifests/RomanCoins/bb853kn3021/manifest.json",
	embedded: true,
	// debug: true,
};
const uv = indexJs.init("uv", data);

uv.on("openseadragonExtension.animationFinish", () => {
	const endtime = performance.now();
	console.log("load time", endtime - startime);
});
// 7.2k
// 5.1k
// 6k
import fetch from "node-fetch";

const response = await fetch(
	"https://sv4ez2xiwe.execute-api.ca-central-1.amazonaws.com/dev/asset?uuid=8cae2565-683b-4909-9902-dd030af83cb2&type=IO&app=devuuid=8cae2565-683b-4909-9902-dd030af83cb2&type=IO&app=dev"
);
const data1 = await response.json();
const res = JSON.parse(data1.API_response);
console.log(res[0].URL);
