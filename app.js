const fetchData = () => {
  const mediumApi =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ademilter'
  var i = 0
  return fetch(mediumApi)
    .then((res) => res.json())
    .then((data) => {
      return data.items
    })
}
const data = fetchData()
const printData = () => {
  for (i = 0; i < data.Length; i++) console.log(data[i].title)
}

printData()
