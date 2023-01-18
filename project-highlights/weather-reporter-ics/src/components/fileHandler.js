export default async function fileHandler(file, fileName) {

  await fetch('http://localhost:8080/http://localhost:5001/echo')
    .catch(error => console.log(error))
    .then(res => res.json())
    .then(data => console.log(data.message))

  await fetch('http://localhost:8080/http://localhost:5001/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      report: file,
      name: fileName
    })
  })
    .catch(error => console.log(error))
}