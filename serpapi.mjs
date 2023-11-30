const { getJson } = require("serpapi");

getJson({
  api_key: "cba426906bb6d8e1c3f137c92f72a3cfb2fb6de4ecd9e91293b531caa94078c8",
  engine: "google",
  q: "Cryptocurrency",
  google_domain: "google.com",
  gl: "us",
  hl: "en",
  safe: "off",
  start: "0",
  tbm: "nws"
}, (json) => {
  console.log(json);
});

// const { getJson, getHtmlBySearchId } = require("serpapi");

// async function fetchData() {
//   try {
//     const response = await getJson({
//       engine: "google",
//       api_key: "cba426906bb6d8e1c3f137c92f72a3cfb2fb6de4ecd9e91293b531caa94078c8",
//       async: true,
//       q: "crypto",
//     });

//     const { id } = response.search_metadata;

//     // async/await
//     const html = await getHtmlBySearchId(id, { api_key: "cba426906bb6d8e1c3f137c92f72a3cfb2fb6de4ecd9e91293b531caa94078c8" });

//     // Log the HTML data
//     console.log(html);
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// }

// // Call the function
// fetchData();