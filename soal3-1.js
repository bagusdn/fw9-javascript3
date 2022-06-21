
let chara = [
    { nama: "Batman", team: " Justice League", class: "Hero" },
    { nama: "Superman", team: "Justice League", class: "Hero" },
    { nama: "Iron Man", team: "Avenger", class: "Hero" },
    { nama: "Doctor Strange", team: "Avenger", class: "Hero" },
    { nama: "Deadpool", team: "X-Force", class: "Anti-Hero" },
    { nama: "Blue Beetle", team: "Teen Titans", class: "Hero" },
    { nama: "Black Adam", team: ["Legion of Doom", "Injustice League"], class: "Villain" },
    { nama: "Riddler", team: ["Legion of Doom", "Suicide Squad"], class: "Villain" },
    { nama: "Darkseid", team: "Legion of Doom", class: "Villain" },
  ];
  
searchTeam = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let filterName = chara.filter((chara) => {
        return chara.team.includes("X-Force");
        });
        if (filterName) {
          resolve(filterName);
        } else {
          reject(new Error("Team Not Found"));
        }
      }, 3000);
    }); 
};
searchTeam()
.then((response) => {
    response = filterName.map((response) => response.nama);
    console.log(response);
})
.catch((err) => {
    console.log(err.message);
});