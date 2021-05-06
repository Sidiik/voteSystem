const messiVote = () => {
  voteBtn = document.getElementsByClassName("voteBtn");
  for (let i = 0; i < voteBtn.length; i++) {
    button = voteBtn[i];
    button.addEventListener("click", (e) => {
      voteCount = 1;
      clickedOne = e.target;
      var parentElem = clickedOne.parentElement;
      var counts = parentElem.getElementsByClassName("votings")[0];
      counts.innerHTML = parseInt(counts.innerHTML) + 1;
      if (counts.innerHTML == 13) {
        setwinner();
        document.querySelector(".voteBtn").disabled = true;
        button.disabled = true;
      }
    });
  }
};
messiVote();
let setwinner = () => {
  let marcelo = document.querySelector(".mVotes");
  let messi = document.querySelector(".lVotes");
  let marcResult = document.querySelector(".marcResult");
  let wonLost = document.querySelector(".messiResult");
  if (messi.innerHTML > marcelo.innerHTML) {
    wonLost.innerHTML = "MESSI LEADING THE WAY";
    wonLost.classList.add("show");
    marcResult.classList.add("lost");
    marcResult.innerHTML = "Marcello Lost";
  }
  if (marcelo.innerHTML > messi.innerHTML) {
    marcResult.classList.add("show");
    marcResult.innerHTML = "Marcello won";
    wonLost.classList.add("lost");
    wonLost.innerHTML = "Messi lost";
  }
  if (messi.innerHTML == marcelo.innerHTML) {
    wonLost.innerHTML = "withdraw";
    marcResult.innerHTML = "withdraw";
  }
};

function setBio() {
  const playerOne = {
    name1: "Lionel Messi",
    description1:
      "Lionel Andrés Messi is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. ",
    Age1: "Born : June 24, 1987 (age 33 years),",
    Education1: 'Escuela Primaria N° 66 "Gral. Las Heras"',
    spouce1: "Antonela Roccuzzo (m. 2017)",
  };

  const playerTwo = {
    name: "Marcelo Vieira",
    description:
      "Marcelo Vieira da Silva Júnior, known as Marcelo, is a Brazilian professional footballer who plays as a left back for Spanish club Real Madrid and the Brazil national team. He is widely considered as one of the greatest leftbacks of all time",
    Age:
      "Born: May 12, 1988 (age 32 years), Rio de Janeiro, State of Rio de Janeiro, Brazil",
    spouce: "Clarisse Alves (m. 2008)",
  };

  const { name, description, Age, spouce } = playerTwo;
  const { name1, description1, Age1, spouce1, Education1 } = playerOne;

  document.querySelector(".two-name").innerHTML = name;
  document.querySelector(".two-det").innerHTML = description;
  document.querySelector(".two-spouce").innerHTML = "Spouce :" + spouce;
  document.querySelector(".two-Age").innerHTML = Age;

  document.querySelector(".one-name").innerHTML = name1;
  document.querySelector(".one-det").innerHTML = description1;
  document.querySelector(".one-spouce").innerHTML = "Spouce :" + spouce1;
  document.querySelector(".one-Age").innerHTML = Age1;
  document.querySelector(".one-");
}

setBio();
