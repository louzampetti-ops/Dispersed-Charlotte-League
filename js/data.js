const leagueData = {
  league: {
    name: "The Dispersed Charlotte League",
    tagline: "League history, standings, stats, and records",
    roles: [
      { title: "Commissioner", name: "Lou Zampetti" },
      { title: "Director of Tomfoolery", name: "TBD" },
      { title: "Director of the Director of Tomfoolery", name: "TBD" },
      { title: "Creative Designer", name: "TBD" }
    ]
  },

  currentSeason: {
    year: 2026,
    summary: "Offseason.",
    standings: [
      { place: 1, team: "Team Name", manager: "Manager", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
      { place: 2, team: "Team Name", manager: "Manager", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 }
    ],
    weeklyScores: [
      { week: 1, away: "Team A", awayScore: 0, home: "Team B", homeScore: 0 }
    ],
    teamStats: [
      { team: "Team Name", manager: "Manager", pointsFor: 0, pointsAgainst: 0, streak: "W0" }
    ]
  },

  seasons: [
    { year: 2016, champion: "The Nightman Cometh", runnerUp: "The Dayman", summary: "Fill in season summary." },
    { year: 2017, champion: "( o Y o )", runnerUp: "Kendrick Llama", summary: "Fill in season summary." },
    { year: 2018, champion: "Ruble Incognitus", runnerUp: "Todd GURRRLLEEEEEYYY", summary: "Fill in season summary." },
    { year: 2019, champion: "Tearible Stones", runnerUp: "Kung Fu Lou", summary: "Fill in season summary." },
    { year: 2020, champion: "Bonnie And Clyde", runnerUp: "Min Livergirll", summary: "Fill in season summary." },
    { year: 2021, champion: "We're good Once..AGAIN", runnerUp: "Min Livergirll", summary: "Fill in season summary." },
    { year: 2022, champion: "Min Livergirll", runnerUp: "The Better Swan", summary: "Fill in season summary." },
    { year: 2023, champion: "The SwanFather", runnerUp: "Q-Tip", summary: "Fill in season summary." },
    { year: 2024, champion: "Kung Fu Lou", runnerUp: "Q-Tip", summary: "Fill in season summary." },
    { year: 2025, champion: "Ruble Incognitus", runnerUp: "All You Need is Love", summary: "Fill in season summary." }
  ],

  allTime: {
    franchiseRecords: [
      { manager: "Nick", wins: 71, losses: 57, titles: 3, playoffAppearances: 5 },
      { manager: "Kvonte", wins: 70, losses: 58, titles: 2, playoffAppearances: 5 },
      { manager: "Max", wins: 64, losses: 64, titles: 2, playoffAppearances: 5 },
      { manager: "Min", wins: 75, losses: 52, titles: 1, playoffAppearances: 5 },
      { manager: "Lou", wins: 67, losses: 61, titles: 1, playoffAppearances: 6 },
      { manager: "Eli", wins: 61, losses: 67, titles: 1, playoffAppearances: 6 },
      { manager: "Reid", wins: 49, losses: 66, titles: 0, playoffAppearances: 3 },
      { manager: "Pat", wins: 45, losses: 70, titles: 0, playoffAppearances: 2 },
      { manager: "Kacie", wins: 26, losses: 27, titles: 0, playoffAppearances: 2 },
      { manager: "Carolyn", wins: 26, losses: 25, titles: 0, playoffAppearances: 1 },
      { manager: "Logan", wins: 11, losses: 15, titles: 0, playoffAppearances: 0 }
    ],
    headToHead: [
      { managerA: "Lou", managerB: "Nick", winsA: 0, winsB: 0 }
    ]
  },

  franchises: [
    { slug: "carolyn", manager: "Carolyn", currentTeamName: "All You Need is Love", bio: "Add franchise bio here." },
    { slug: "eli", manager: "Eli", currentTeamName: "Howie Dewitt", bio: "Add franchise bio here." },
    { slug: "kacie", manager: "Kacie", currentTeamName: "The Better Swan", bio: "Add franchise bio here." },
    { slug: "kvonte", manager: "Kvonte", currentTeamName: "Q-Tip", bio: "Add franchise bio here." },
    { slug: "lou", manager: "Lou", currentTeamName: "Kung Fu Lou", bio: "Add franchise bio here." },
    { slug: "max", manager: "Max", currentTeamName: "Ruble Incognitus", bio: "Add franchise bio here." },
    { slug: "min", manager: "Min", currentTeamName: "Min Livergirll", bio: "Add franchise bio here." },
    { slug: "nick", manager: "Nick", currentTeamName: "The SwanFather", bio: "Add franchise bio here." },
    { slug: "pat", manager: "Pat", currentTeamName: "Florida Man", bio: "Add franchise bio here." },
    { slug: "reid", manager: "Reid", currentTeamName: "I'm a Reidtard", bio: "Add franchise bio here." }
  ]
};
