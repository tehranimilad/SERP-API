require 'google_search_results' 

params = {
  api_key: "cba426906bb6d8e1c3f137c92f72a3cfb2fb6de4ecd9e91293b531caa94078c8",
  engine: "google",
  q: "Cryptocurrency",
  google_domain: "google.com",
  gl: "us",
  hl: "en",
  safe: "off",
  start: "0",
  tbm: "nws"
}

search = GoogleSearch.new(params)
hash_results = search.get_hash
puts hash_results
