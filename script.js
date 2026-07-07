const champions = [
  { year: 2016, name: "Kvonte" },
  { year: 2017, name: "Nick" },
  { year: 2018, name: "Max" },
  { year: 2019, name: "Nick" },
  { year: 2020, name: "Eli" },
  { year: 2021, name: "Kvonte" },
  { year: 2022, name: "Min" },
  { year: 2023, name: "Nick" },
  { year: 2024, name: "Lou" },
  { year: 2025, name: "Max" }
];

const championsList = document.getElementById("champions-list");

champions.forEach(champion => {
  const li = document.createElement("li");
  li.textContent = `${champion.year}: ${champion.name}`;
  championsList.appendChild(li);
});
