async function plantQuestion(value) {
  let text = " "
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({question: value})
  }
  const response = await fetch("http://localhost:3000/plant", options);
  const funtext = await response.text();
  document.getElementById("response").innerText = funtext
  document.getElementById("btn").disabled = false;
  console.log(funtext);
}

// async function getFact(){
//   let result = await fetch("http://localhost:3000/fun")
//   let fact = await result.text()
//   console.log(fact)
// }



document.getElementById("btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value
  document.getElementById("btn").disabled = true;
  
  plantQuestion(userInput);
})