let _data = [
  { rank: 0, name: "dog", lastName: 'Salchicha', score: 0, color: "var(--purple-color)" },
  { rank: 0, name: "horse", lastName: 'Caballo', score: 0, color: "var(--purple-color)" },
  { rank: 0, name: "dove", lastName: 'Paloma', score: 0, color: "var(--purple-color)" },
  { rank: 0, name: "cat", lastName: 'Gato', score: 0, color: "var(--purple-color)" },
  { rank: 0, name: "spider", lastName: 'arania', score: 0, color: "var(--purple-color)" },
  { rank: 0, name: "fish", lastName: 'Pezcado', score: 0, color: "var(--purple-color)" },
];

let container = document.querySelector(".table-container");

_data
  .sort((a, b) => {
    if (b.score === a.score) {
      return a.name.localeCompare(b.name); // Sort by name if scores are equal
    }
    return b.score - a.score; // Sort by score in descending order
  })
  .forEach((e, i) => (e.rank = i));

_data.forEach((el, i) => {
  let box = document.createElement("div");
  box.className = "team";
  box.style.setProperty("--i", i);
  let name = document.createElement("span");
  name.className = "name";
  name.innerHTML = el.name;
  let score = document.createElement("span");
  score.className = "score";
  // let icon = document.createElement("i");
  // icon.className = "fa-solid fa-" + el.name;
  let icon = document.createElement("img");
  icon.src = 'https://ui-avatars.com/api/?name=' + el.name + '+' + el.lastName + '&size=128';
  icon.classList.add('icon-avatar');
  score.innerHTML = el.score;
  box.appendChild(icon);
  box.appendChild(name);
  box.appendChild(score);
  box.style.setProperty("--color", el.color);
  container.appendChild(box);

  box.addEventListener("click", () => {
    let elName = box.querySelector(".name").innerHTML;
    _data.find((team) => team.name === elName);
    _data.find((team) => team.name === elName).score += 1;
    _data
      .sort((a, b) => {
        if (b.score === a.score) {
          return a.name.localeCompare(b.name); // Sort by name if scores are equal
        }
        return b.score - a.score; // Sort by score in descending order
      })
      .forEach((e, i) => (e.rank = i));
    let AllTeams = Array.from(document.querySelectorAll(".team"));
    console.clear();
    AllTeams.forEach((element) => {
      let elementName = element.querySelector(".name");
      let elementScore = element.querySelector(".score");
      if (elementName.innerHTML == elName) {
        elementScore.innerHTML++;
      }
      let newRank = _data.find(
        (team) => team.name === elementName.innerHTML
      ).rank;
      element.style.setProperty("--i", newRank);
      console.log(_data.find((team) => team.name === elementName.innerHTML));
    });
  });
});
