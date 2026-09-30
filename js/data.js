const leagueData = {
  league: {
    name: "The Dispersed Charlotte League",
    tagline: "League history, standings, stats, and records",
    roles: [
      { title: "Commissioner", name: "Lou Zampetti" },
      { title: "Director of Tomfoolery", name: "Pat Conway" },
      { title: "Director of the Director of Tomfoolery", name: "Nick Swan" },
      { title: "Media Director", name: "Eli Clevenger" },
      { title: "Former Comissioner", name: "Min Hartmann"}
    ]
  },

  currentSeason: {
    year: 2026,
    summary: "After three weeks, Jimmy Hanes and Q-Tip are tied for the league’s best record at 3–0, with Jimmy Hanes leading the standings on 435.76 points. Min Livergirll leads the league in scoring average at 152.40 points per game, while The Better Swan is looking for a turnaround after an 0–3 start.",
    standings: [
      { place: 1, team: "Jimmy Hanes", manager: "Reid", wins: 3, losses: 0, pointsFor: 435.76, pointsAgainst: 339.54 },
      { place: 2, team: "Q-Tip", manager: "Kvonte", wins: 3, losses: 0, pointsFor: 381.93, pointsAgainst: 337.28 },
      { place: 3, team: "All You Need is Love", manager: "Carolyn", wins: 2, losses: 1, pointsFor: 400.32, pointsAgainst: 413.38 },
      { place: 4, team: "Howie Dewitt", manager: "Eli", wins: 2, losses: 1, pointsFor: 374.37, pointsAgainst: 384.53 },
      { place: 5, team: "Min Livergirll", manager: "Min", wins: 1, losses: 2, pointsFor: 457.19, pointsAgainst: 411.05 },
      { place: 6, team: "Ruble Incognitus", manager: "Max", wins: 1, losses: 2, pointsFor: 395.18, pointsAgainst: 421.12 },
      { place: 7, team: "The SwanFather", manager: "Nick", wins: 1, losses: 2, pointsFor: 379.74, pointsAgainst: 418.16 },
      { place: 8, team: "Kung Fu Lou", manager: "Lou", wins: 1, losses: 2, pointsFor: 306.30, pointsAgainst: 291.30 },
      { place: 9, team: "Mrs Hartmann", manager: "Pat", wins: 1, losses: 2, pointsFor: 351.78, pointsAgainst: 391.73 },
      { place: 10, team: "The Better Swan", manager: "Kacie", wins: 0, losses: 3, pointsFor: 330.41, pointsAgainst: 404.89 }
    ],
    teamStats: [
      { team: "Kung Fu Lou", manager: "Lou", averageScore: 102.10, last3Average: 102.10, averageOpponent: 97.10, differential: 15.00, weeklyEarnings: "$0", streak: "L1" },
      { team: "Q-Tip", manager: "Kvonte", averageScore: 127.31, last3Average: 127.31, averageOpponent: 112.43, differential: 44.53, weeklyEarnings: "$30", streak: "W3" },
      { team: "Mrs Hartmann", manager: "Pat", averageScore: 117.26, last3Average: 117.26, averageOpponent: 130.58, differential: -39.95, weeklyEarnings: "$0", streak: "L2" },
      { team: "Howie Dewitt", manager: "Eli", averageScore: 124.79, last3Average: 124.79, averageOpponent: 128.18, differential: -10.16, weeklyEarnings: "$0", streak: "W1" },
      { team: "Min Livergirll", manager: "Min", averageScore: 152.40, last3Average: 152.40, averageOpponent: 137.02, differential: 46.14, weeklyEarnings: "$0", streak: "L1" },
      { team: "The Better Swan", manager: "Kacie", averageScore: 110.14, last3Average: 110.14, averageOpponent: 134.96, differential: -74.48, weeklyEarnings: "$0", streak: "L3" },
      { team: "Ruble Incognitus", manager: "Max", averageScore: 131.73, last3Average: 131.73, averageOpponent: 140.37, differential: -25.94, weeklyEarnings: "$30", streak: "L2" },
      { team: "All You Need is Love", manager: "Carolyn", averageScore: 133.44, last3Average: 133.44, averageOpponent: 137.79, differential: -13.06, weeklyEarnings: "$30", streak: "W2" },
      { team: "The SwanFather", manager: "Nick", averageScore: 126.58, last3Average: 126.58, averageOpponent: 139.39, differential: -38.42, weeklyEarnings: "$0", streak: "W1" },
      { team: "Jimmy Hanes", manager: "Reid", averageScore: 145.25, last3Average: 145.25, averageOpponent: 113.18, differential: 96.22, weeklyEarnings: "$0", streak: "W3" }
    ],
    powerRankings: [
      { rank: 1, team: "Jimmy Hanes", tier: 1, score: 1597.79, record: "3-0", streak: "W3", change: 0 },
      { rank: 2, team: "Min Livergirll", tier: 1, score: 1523.97, record: "1-2", streak: "L1", change: 0 },
      { rank: 3, team: "Q-Tip", tier: 1, score: 1400.41, record: "3-0", streak: "W3", change: 0 },
      { rank: 4, team: "All You Need is Love", tier: 2, score: 1200.96, record: "2-1", streak: "W2", change: 0 },
      { rank: 5, team: "Howie Dewitt", tier: 3, score: 1123.11, record: "2-1", streak: "W1", change: 0 },
      { rank: 6, team: "Ruble Incognitus", tier: 3, score: 1053.81, record: "1-2", streak: "L2", change: 0 },
      { rank: 7, team: "The SwanFather", tier: 3, score: 1012.64, record: "1-2", streak: "W1", change: 0 },
      { rank: 8, team: "Mrs Hartmann", tier: 3, score: 938.08, record: "1-2", streak: "L2", change: 0 },
      { rank: 9, team: "Kung Fu Lou", tier: 4, score: 714.70, record: "1-2", streak: "L1", change: 0 },
      { rank: 10, team: "The Better Swan", tier: 4, score: 660.82, record: "0-3", streak: "L3", change: 0 }
    ],
    playoffPicture: [
      { seed: 1, team: "TBD", manager: "TBD", status: "Projected" },
      { seed: 2, team: "TBD", manager: "TBD", status: "Projected" },
      { seed: 3, team: "TBD", manager: "TBD", status: "Projected" },
      { seed: 4, team: "TBD", manager: "TBD", status: "Projected" }
    ],
    playoffOdds: [
      { team: "Kung Fu Lou", makePlayoffs: 13, winTitle: 2, missPlayoffs: 87 },
      { team: "Q-Tip", makePlayoffs: 63, winTitle: 14, missPlayoffs: 37 },
      { team: "Mrs Hartmann", makePlayoffs: 22, winTitle: 5, missPlayoffs: 78 },
      { team: "Howie Dewitt", makePlayoffs: 60, winTitle: 18, missPlayoffs: 40 },
      { team: "Min Livergirll", makePlayoffs: 61, winTitle: 21, missPlayoffs: 39 },
      { team: "The Better Swan", makePlayoffs: 17, winTitle: 3, missPlayoffs: 83 },
      { team: "Ruble Incognitus", makePlayoffs: 31, winTitle: 7, missPlayoffs: 69 },
      { team: "All You Need is Love", makePlayoffs: 40, winTitle: 6, missPlayoffs: 60 },
      { team: "The SwanFather", makePlayoffs: 22, winTitle: 4, missPlayoffs: 78 },
      { team: "Jimmy Hanes", makePlayoffs: 71, winTitle: 20, missPlayoffs: 29 }
    ],
    weeklyStandingsHistory: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14"],
      teams: [
        { team: "Kung Fu Lou", places: [1] },
        { team: "Q-Tip", places: [2] },
        { team: "Florida Man", places: [3] },
        { team: "Howie Dewitt", places: [4] },
        { team: "Min Livergirll", places: [5] },
        { team: "The Better Swan", places: [6] },
        { team: "Ruble Incognitus", places: [7] },
        { team: "All You Need is Love", places: [8] },
        { team: "The SwanFather", places: [9] },
        { team: "I'm a Reidtard", places: [10] }
      ]
    },
    allPlay: [
      { team: "Kung Fu Lou", wins: 6, losses: 21 },
      { team: "Q-Tip", wins: 18, losses: 9 },
      { team: "Mrs Hartmann", wins: 7, losses: 20 },
      { team: "Howie Dewitt", wins: 16, losses: 11 },
      { team: "Min Livergirll", wins: 21, losses: 6 },
      { team: "The Better Swan", wins: 7, losses: 20 },
      { team: "Ruble Incognitus", wins: 15, losses: 12 },
      { team: "All You Need is Love", wins: 18, losses: 9 },
      { team: "The SwanFather", wins: 10, losses: 17 },
      { team: "Jimmy Hanes", wins: 17, losses: 10 }
    ],
    recordBook: [
      { label: "Most Points (Week)", holder: "TBD", value: "0", note: "Week TBD" },
      { label: "Biggest Win (Week)", holder: "TBD", value: "0", note: "Week TBD" },
      { label: "Highest Scoring Player (Week)", holder: "TBD", value: "0", note: "Player TBD" },
      { label: "Best Record", holder: "TBD", value: "0-0", note: "" },
      { label: "Most Points", holder: "TBD", value: "0", note: "" },
      { label: "Highest Scoring Player (Season)", holder: "TBD", value: "0", note: "Player TBD" }
    ]
  },

  seasons: [
    {
      year: 2025,
      champion: "Ruble Incognitus",
      runnerUp: "All You Need is Love",
      summary: "Fill in season summary.",
      finalStandings: [
        { place: 1, team: "Ruble Incognitus", manager: "Max", winnings: "$960" },
        { place: 2, team: "All You Need is Love", manager: "Carolyn", winnings: "$375" },
        { place: 3, team: "Howie Dewitt", manager: "Eli", winnings: "$240" },
        { place: 4, team: "The Better Swan", manager: "Kacie", winnings: "$135" },
        { place: 5, team: "The SwanFather", manager: "Nick", winnings: "$90" },
        { place: 6, team: "Q-Tip", manager: "Kvonte", winnings: "$0" },
        { place: 7, team: "Kung Fu Lou", manager: "Lou", winnings: "$60" },
        { place: 8, team: "Min Livergirll", manager: "Min", winnings: "$90" },   
        { place: 9, team: "I'm a Reidtard", manager: "Reid", winnings: "$30" },
        { place: 10, team: "Florida Man", manager: "Pat", winnings: "$30" }
      ],
      teamStats: [
        { manager: "Lou", team: "Kung Fu Lou", wins: 5, losses: 8, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 123.12, averageOpponent: 125.47, differential: -2.35, weeklyEarnings: "$60" },
        { manager: "Kvonte", team: "Q-Tip", wins: 6, losses: 7, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 120.32, averageOpponent: 124.76, differential: -4.44, weeklyEarnings: "$0" },
        { manager: "Pat", team: "Florida Man", wins: 4, losses: 9, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 114.54, averageOpponent: 133.80, differential: -19.26, weeklyEarnings: "$30" },
        { manager: "Eli", team: "Howie Dewitt", wins: 8, losses: 5, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 130.94, averageOpponent: 117.02, differential: 13.91, weeklyEarnings: "$90" },
        { manager: "Min", team: "Min Livergirll", wins: 7, losses: 6, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 129.43, averageOpponent: 138.03, differential: -8.60, weeklyEarnings: "$90" },
        { manager: "Kacie", team: "The Better Swan", wins: 7, losses: 6, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 125.48, averageOpponent: 126.30, differential: -0.82, weeklyEarnings: "$60" },
        { manager: "Max", team: "Ruble Incognitus", wins: 9, losses: 4, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 137.63, averageOpponent: 121.28, differential: 16.36, weeklyEarnings: "$60" },
        { manager: "Carolyn", team: "All You Need is Love", wins: 9, losses: 4, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 126.96, averageOpponent: 115.61, differential: 11.35, weeklyEarnings: "$0" },
        { manager: "Nick", team: "The SwanFather", wins: 5, losses: 8, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 130.37, averageOpponent: 118.16, differential: 12.21, weeklyEarnings: "$90" },
        { manager: "Reid", team: "I'm a Reidtard", wins: 5, losses: 8, allPlayWins: "TBD", allPlayLosses: "TBD", averageScore: 120.83, averageOpponent: 133.23, differential: -12.40, weeklyEarnings: "$30" }
      ],
      averageScoreChart: {
  teams: [
    { team: "Kung Fu Lou", averageScore: 123.12 },
    { team: "Q-Tip", averageScore: 120.32 },
    { team: "Florida Man", averageScore: 114.54 },
    { team: "Howie Dewitt", averageScore: 130.94 },
    { team: "Min Livergirll", averageScore: 129.43 },
    { team: "The Better Swan", averageScore: 125.48 },
    { team: "Ruble Incognitus", averageScore: 137.63 },
    { team: "All You Need is Love", averageScore: 126.96 },
    { team: "The SwanFather", averageScore: 130.37 },
    { team: "I'm a Reidtard", averageScore: 120.83 }
  ]
},
      allPlay: [
        { team: "Kung Fu Lou", wins: "TBD", losses: "TBD" },
        { team: "Q-Tip", wins: "TBD", losses: "TBD" },
        { team: "Florida Man", wins: "TBD", losses: "TBD" },
        { team: "Howie Dewitt", wins: "TBD", losses: "TBD" },
        { team: "Min Livergirll", wins: "TBD", losses: "TBD" },
        { team: "The Better Swan", wins: "TBD", losses: "TBD" },
        { team: "Ruble Incognitus", wins: "TBD", losses: "TBD" },
        { team: "All You Need is Love", wins: "TBD", losses: "TBD" },
        { team: "The SwanFather", wins: "TBD", losses: "TBD" },
        { team: "I'm a Reidtard", wins: "TBD", losses: "TBD" }
      ],
      recordBook: [
        { label: "Most Points (Week)", holder: "Ruble Incognitus", value: "199.70", note: "Week 10" },
        { label: "Biggest Win (Week)", holder: "The Better Swan", value: "95.95", note: "Week 8 vs Florida Man" },
        { label: "Highest Scoring Player (Week)", holder: "Ruble Incognitus", value: "54.65", note: "Jahmry Gibbs" },
        { label: "Best Record (Regular Season)", holder: "Ruble Incognitus and All You Need is Love", value: "9 Wins" },
        { label: "Most Points (Regular Season)", holder: "Ruble Incognitus", value: "1781.42" },
        { label: "Highest Scoring Player (Season)", holder: "Florida Man", value: "396.62", note: "Josh Allen" }
      ]
    },

    {
      year: 2024,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      finalStandings: [],
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      allPlay: [],
      recordBook: []
    },

    {
      year: 2023,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      finalStandings: [],
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      allPlay: [],
      recordBook: []
    },

    {
      year: 2022,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      finalStandings: [],
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      allPlay: [],
      recordBook: []
    },

    {
      year: 2021,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      finalStandings: [],
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      allPlay: [],
      recordBook: []
    },

    {
      year: 2020,
      champion: "TBD",
      runnerUp: "TBD",
      summary: "Fill in season summary.",
      finalStandings: [],
      teamStats: [],
      weeklyPoints: { labels: [], teams: [] },
      allPlay: [],
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
    { slug: "carolyn", manager: "Carolyn", currentTeamName: "All You Need is Love", bio: "Previously known as Cobb Salad." },
    { slug: "eli", manager: "Eli", currentTeamName: "Howie Dewitt", bio: "Previously known as Bonnie and Clyde; Mahomes Alone II, lost in KC; No place like Mahomes; Pepperoni Butterfly; Dollary Clump." },
    { slug: "kacie", manager: "Kacie", currentTeamName: "The Better Swan", bio: "Previously co-manager of We're good Once..AGAIN; We were good Once; TemporaREID." },
    { slug: "kvonte", manager: "Kvonte", currentTeamName: "Q-Tip", bio: "Previously known as A Nightmare on Bonnie Lane 2; We were good Once; #METOO STOP RAPE; No Stat Corrections; The Nightman Cometh. Previously co-manager of We're good Once..AGAIN; We were good Once." },
    { slug: "lou", manager: "Lou", currentTeamName: "Kung Fu Lou", bio: "Previously known as Todd GURRRLLEEEEEYYY; Va Jay Jay's Smelly Cuntler; The Dayman." },
    { slug: "max", manager: "Max", currentTeamName: "Ruble Incognitus", bio: "Previously known as Paulie Walnuts; The Pheonix." },
    { slug: "min", manager: "Min", currentTeamName: "Min Livergirll", bio: "Previously known as Kendrick Llama." },
    { slug: "nick", manager: "Nick", currentTeamName: "The SwanFather", bio: "Previously known as Tearible Stones; Prison Mike; ( o Y o ); Macklemore and Ryan Lewis." },
    { slug: "pat", manager: "Pat", currentTeamName: "Florida Man", bio: "Previously known as Leather Helmet; Lou and Eli's Scraps; Team Conway." },
    { slug: "reid", manager: "Reid", currentTeamName: "I'm a Reidtard", bio: "Previously known as Zanzi DOG; Blue Eyes White Dragon. Previously co-manager of TemporaREID aka Kried." }
  ]
};
