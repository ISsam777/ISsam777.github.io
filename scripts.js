const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/New.png") {
    myImage.setAttribute("src", "images/old.png");
  } else {
    myImage.setAttribute("src", "images/New.png");
  }
};

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() { 
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is cool, ${myName}';

}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};





