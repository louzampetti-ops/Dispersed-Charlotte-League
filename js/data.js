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
      { place: 1, team: "Kung Fu Lou", manager: "Lou", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 },
      { place: 2, team: "Q-Tip", manager: "Kvonte", wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 }
    ],
    weeklyScores: [
      { week: 1, away: "Team A", awayScore: 0, home: "Team B", homeScore: 0 }
    ],
    teamStats: [
      { team: "Kung Fu Lou", manager: "Lou", pointsFor: 0, pointsAgainst: 0, streak: "W0" }
    ]
  },

  seasons: [
    {
      year: 2025,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      teamStats: [
        { manager: "Lou",      team: "Kung Fu Lou",           wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Kvonte",   team: "Q-Tip",                 wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Pat",      team: "Florida Man",           wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Eli",      team: "Howie Dewitt",          wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Min",      team: "Min Livergirll",        wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Kacie",    team: "The Better Swan",       wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Max",      team: "Ruble Incognitus",      wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Carolyn",  team: "All You Need is Love",  wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Nick",     team: "The SwanFather",        wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" },
        { manager: "Reid",     team: "I'm a Reidtard",        wins: "TBD", losses: "TBD", allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: "TBD", averageLast3: "TBD", averageOpponent: "TBD", differential: "TBD", weeklyEarnings: "TBD", powerRank: "TBD" }
      ],
      weeklyPoints: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16", "Week 17"],
        teams: [
          { team: "Kung Fu Lou",           scores: Array(17).fill("TBD") },
          { team: "Q-Tip",                 scores: Array(17).fill("TBD") },
          { team: "Florida Man",           scores: Array(17).fill("TBD") },
          { team: "Howie Dewitt",          scores: Array(17).fill("TBD") },
          { team: "Min Livergirll",        scores: Array(17).fill("TBD") },
          { team: "The Better Swan",       scores: Array(17).fill("TBD") },
          { team: "Ruble Incognitus",      scores: Array(17).fill("TBD") },
          { team: "All You Need is Love",  scores: Array(17).fill("TBD") },
          { team: "The SwanFather",        scores: Array(17).fill("TBD") },
          { team: "I'm a Reidtard",        scores: Array(17).fill("TBD") }
        ]
      },
      averageScoresChart: [
        { team: "Kung Fu Lou",           average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "Q-Tip",                 average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "Florida Man",           average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "Howie Dewitt",          average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "Min Livergirll",        average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "The Better Swan",       average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "Ruble Incognitus",      average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "All You Need is Love",  average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "The SwanFather",        average: "TBD", actual: "TBD", last3: "TBD" },
        { team: "I'm a Reidtard",        average: "TBD", actual: "TBD", last3: "TBD" }
      ],
      playoffOdds: [
        { team: "Kung Fu Lou",           makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "Q-Tip",                 makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "Florida Man",           makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "Howie Dewitt",          makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "Min Livergirll",        makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "The Better Swan",       makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "Ruble Incognitus",      makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "All You Need is Love",  makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "The SwanFather",        makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" },
        { team: "I'm a Reidtard",        makePlayoffs: "TBD", winTitle: "TBD", missPlayoffs: "TBD" }
      ],
      allPlay: [
        { team: "Kung Fu Lou",           wins: "TBD", losses: "TBD" },
        { team: "Q-Tip",                 wins: "TBD", losses: "TBD" },
        { team: "Florida Man",           wins: "TBD", losses: "TBD" },
        { team: "Howie Dewitt",          wins: "TBD", losses: "TBD" },
        { team: "Min Livergirll",        wins: "TBD", losses: "TBD" },
        { team: "The Better Swan",       wins: "TBD", losses: "TBD" },
        { team: "Ruble Incognitus",      wins: "TBD", losses: "TBD" },
        { team: "All You Need is Love",  wins: "TBD", losses: "TBD" },
        { team: "The SwanFather",        wins: "TBD", losses: "TBD" },
        { team: "I'm a Reidtard",        wins: "TBD", losses: "TBD" }
      ],
      powerRankings: [
        { rank: 1, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 2, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 3, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 4, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 5, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 6, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 7, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 8, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 9, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 },
        { rank: 10, team: "TBD", tier: "TBD", score: "TBD", record: "TBD", streak: "TBD", change: 0 }
      ],
      recordBook: [
        { label: "Most Points (Week)",             holder: "TBD", value: "TBD", note: "TBD" },
        { label: "Biggest Win (Week)",            holder: "TBD", value: "TBD", note: "TBD" },
        { label: "Highest Scoring Player (Week)", holder: "TBD", value: "TBD", note: "TBD" },
        { label: "Best Record (Regular Season)",  holder: "TBD", value: "TBD", note: "TBD" },
        { label: "Most Points (Regular Season)",  holder: "TBD", value: "TBD", note: "TBD" },
        { label: "Highest Scoring Player (Season)", holder: "TBD", value: "TBD", note: "TBD" }
      ]
    },

    {
      year: 2024,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      averageScoresChart: [],
      playoffOdds: [],
      allPlay: [],
      powerRankings: [],
      recordBook: []
    },

    {
      year: 2023,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      averageScoresChart: [],
      playoffOdds: [],
      allPlay: [],
      powerRankings: [],
      recordBook: []
    },

    {
      year: 2022,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      averageScoresChart: [],
      playoffOdds: [],
      allPlay: [],
      powerRankings: [],
      recordBook: []
    },

    {
      year: 2021,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      averageScoresChart: [],
      playoffOdds: [],
      allPlay: [],
      powerRankings: [],
      recordBook: []
    },

    {
      year: 2020,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      averageScoresChart: [],
      playoffOdds: [],
      allPlay: [],
      powerRankings: [],
      recordBook: []
    }
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
