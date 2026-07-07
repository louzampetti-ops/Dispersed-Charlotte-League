const leagueData = {
  league: {
    name: "The Dispersed Charlotte League",
    tagline: "League history, standings, stats, and records",
    roles: [
      { title: "Commissioner", name: "TBD" },
      { title: "Director of Tomfoolery", name: "TBD" },
      { title: "Director of the Director of Tomfoolery", name: "TBD" },
      { title: "Creative Designer", name: "TBD" }
    ]
  },

  currentSeason: {
    year: 2026,
    summary: "Update this text each week with the latest league news.",
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
    { year: 2016, champion: "Kvonte", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2017, champion: "Nick", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2018, champion: "Max", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2019, champion: "Nick", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2020, champion: "Eli", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2021, champion: "Kvonte", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2022, champion: "Min", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2023, champion: "Nick", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2024, champion: "Lou", runnerUp: "TBD", summary: "Fill in season summary." },
    { year: 2025, champion: "Max", runnerUp: "TBD", summary: "Fill in season summary." }
  ],

  allTime: {
    franchiseRecords: [
      { manager: "Lou", wins: 0, losses: 0, titles: 1, playoffAppearances: 0 },
      { manager: "Nick", wins: 0, losses: 0, titles: 3, playoffAppearances: 0 },
      { manager: "Kvonte", wins: 0, losses: 0, titles: 2, playoffAppearances: 0 },
      { manager: "Max", wins: 0, losses: 0, titles: 2, playoffAppearances: 0 },
      { manager: "Eli", wins: 0, losses: 0, titles: 1, playoffAppearances: 0 },
      { manager: "Min", wins: 0, losses: 0, titles: 1, playoffAppearances: 0 },
      { manager: "Carolyn", wins: 0, losses: 0, titles: 0, playoffAppearances: 0 },
      { manager: "Kacie", wins: 0, losses: 0, titles: 0, playoffAppearances: 0 },
      { manager: "Pat", wins: 0, losses: 0, titles: 0, playoffAppearances: 0 },
      { manager: "Reid", wins: 0, losses: 0, titles: 0, playoffAppearances: 0 }
    ],
    headToHead: [
      { managerA: "Lou", managerB: "Nick", winsA: 0, winsB: 0 }
    ]
  },

  franchises: [
    { slug: "carolyn", manager: "Carolyn", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "eli", manager: "Eli", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "kacie", manager: "Kacie", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "kvonte", manager: "Kvonte", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "lou", manager: "Lou", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "max", manager: "Max", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "min", manager: "Min", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "nick", manager: "Nick", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "pat", manager: "Pat", currentTeamName: "TBD", bio: "Add franchise bio here." },
    { slug: "reid", manager: "Reid", currentTeamName: "TBD", bio: "Add franchise bio here." }
  ]
};
