let button1 = document.getElementById("button-Fetch");
    console.log(button1);
    button1.addEventListener("click", handleClick);

function getJoke() {
    let apiURL = `https://api.chucknorris.io/jokes/random`;
    fetch(apiURL)
        .then((response) => response.json())
        .then((result) => displayJoke(result.value))
        .catch(error => console.log(error));
    console.log("Hey there from get joke function");
}

getJoke();

function displayJoke(joke) {
    console.log(joke);
    //What are we attaching to inorder to display the fetched results?
    let displayFetch = document.getElementById("display-fetch");
    //Create a P tag
    displayFetch.innerText = "";
    let para = document.createElement("p");
    //Set the Inner-text
    para.innerText = joke;
    //Append the P tag that was just created in 3 lines above
    displayFetch.appendChild(para);
}

function handleClick(){
    getJoke();
}

// async function getJokeAsync() {
//     let apiURL = `https://api.chucknorris.io/jokes/random`;
//     try {
//         const response = await fetch(apiURL)  //JSON format
//         const result = await response.json() //converts JSON to OBJ Literal
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     console.log("hey there from getJokeAsync() function");
// }

// getJokeAsync();

