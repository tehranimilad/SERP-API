from serpapi import GoogleSearch

params = {
  "api_key": "cba426906bb6d8e1c3f137c92f72a3cfb2fb6de4ecd9e91293b531caa94078c8",
  "engine": "google",
  "q": "Latest Cryptocurrency News",
  "location": "Pleasanton, California, United States",
  "google_domain": "google.com",
  "gl": "us",
  "hl": "en",
  "safe": "off",
  "tbm": "nws"
}

search = GoogleSearch(params)
results = search.get_dict()