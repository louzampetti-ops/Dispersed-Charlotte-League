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
      { place: 1, team: "Jimmy Hanes", manager: "Reid", wins: 5, losses: 1, pointsFor: 810.58, pointsAgainst: 728.33 },
      { place: 2, team: "All You Need is Love", manager: "Carolyn", wins: 5, losses: 1, pointsFor: 849.80, pointsAgainst: 788.60 },
      { place: 3, team: "Q-Tip", manager: "Kvonte", wins: 4, losses: 2, pointsFor: 724.42, pointsAgainst: 719.58 },
      { place: 4, team: "Howie Dewitt", manager: "Eli", wins: 4, losses: 2, pointsFor: 770.22, pointsAgainst: 737.60 },
      { place: 5, team: "Ruble Incognitus", manager: "Max", wins: 3, losses: 3, pointsFor: 805.11, pointsAgainst: 808.79 },
      { place: 6, team: "Min Livergirll", manager: "Min", wins: 2, losses: 4, pointsFor: 841.46, pointsAgainst: 805.67 },
      { place: 7, team: "Kung Fu Lou", manager: "Lou", wins: 2, losses: 4, pointsFor: 725.44, pointsAgainst: 712.07 },
      { place: 8, team: "The SwanFather", manager: "Nick", wins: 2, losses: 4, pointsFor: 729.96, pointsAgainst: 778.63 },
      { place: 9, team: "Mrs Hartmann", manager: "Pat", wins: 2, losses: 4, pointsFor: 685.94, pointsAgainst: 753.69 },
      { place: 10, team: "The Better Swan", manager: "Kacie", wins: 1, losses: 5, pointsFor: 670.44, pointsAgainst: 780.41 }
    ],
    teamStats: [
      { team: "Kung Fu Lou", manager: "Lou", averageScore: 120.91, last3Average: 139.71, averageOpponent: 118.68, differential: 13.37, weeklyEarnings: "$30", streak: "W1" },
      { team: "Q-Tip", manager: "Kvonte", averageScore: 120.74, last3Average: 114.16, averageOpponent: 119.93, differential: 4.84, weeklyEarnings: "$30", streak: "L1" },
      { team: "Mrs Hartmann", manager: "Pat", averageScore: 114.32, last3Average: 111.39, averageOpponent: 125.62, differential: -67.75, weeklyEarnings: "$0", streak: "L2" },
      { team: "Howie Dewitt", manager: "Eli", averageScore: 128.37, last3Average: 131.95, averageOpponent: 122.93, differential: 32.62, weeklyEarnings: "$0", streak: "W2" },
      { team: "Min Livergirll", manager: "Min", averageScore: 138.92, last3Average: 125.45, averageOpponent: 134.28, differential: 27.87, weeklyEarnings: "$0", streak: "L2" },
      { team: "The Better Swan", manager: "Kacie", averageScore: 111.74, last3Average: 113.34, averageOpponent: 130.07, differential: -109.97, weeklyEarnings: "$0", streak: "W1" },
      { team: "Ruble Incognitus", manager: "Max", averageScore: 134.19, last3Average: 136.64, averageOpponent: 134.80, differential: -3.68, weeklyEarnings: "$60", streak: "L1" },
      { team: "All You Need is Love", manager: "Carolyn", averageScore: 141.63, last3Average: 149.83, averageOpponent: 130.11, differential: 69.12, weeklyEarnings: "$60", streak: "W5" },
      { team: "The SwanFather", manager: "Nick", averageScore: 121.66, last3Average: 116.74, averageOpponent: 129.77, differential: -48.67, weeklyEarnings: "$0", streak: "L2" },
      { team: "Jimmy Hanes", manager: "Reid", averageScore: 135.10, last3Average: 124.94, averageOpponent: 121.39, differential: 82.25, weeklyEarnings: "$0", streak: "W2" }
    ],
    powerRankings: [
      { rank: 1, team: "All You Need is Love", tier: 1, score: 2832.67, record: "5-1", streak: "W5", change: 0 },
      { rank: 2, team: "Jimmy Hanes", tier: 1, score: 2701.93, record: "5-1", streak: "W2", change: 0 },
      { rank: 3, team: "Min Livergirll", tier: 1, score: 2664.62, record: "2-4", streak: "L2", change: 0 },
      { rank: 4, team: "Howie Dewitt", tier: 2, score: 2439.03, record: "4-2", streak: "W2", change: 0 },
      { rank: 5, team: "Ruble Incognitus", tier: 2, score: 2415.33, record: "3-3", streak: "L1", change: 0 },
      { rank: 6, team: "Q-Tip", tier: 2, score: 2294.00, record: "4-2", streak: "L1", change: 0 },
      { rank: 7, team: "Kung Fu Lou", tier: 3, score: 2055.41, record: "2-4", streak: "W1", change: 0 },
      { rank: 8, team: "The SwanFather", tier: 3, score: 1946.56, record: "2-4", streak: "L2", change: 0 },
      { rank: 9, team: "Mrs Hartmann", tier: 4, score: 	1829.17, record: "2-4", streak: "L2", change: 0 },
      { rank: 10, team: "The Better Swan", tier: 4, score: 1564.36, record: "1-5", streak: "W1", change: 0 }
    ],
    playoffPicture: [
      { seed: 1, team: "Jimmy Hanes", manager: "Reid", status: "Projected" },
      { seed: 2, team: "All You Need is Love", manager: "Carolyn", status: "Projected" },
      { seed: 3, team: "Q-Tip", manager: "Kvonte", status: "Projected" },
      { seed: 4, team: "Howie Dewitt", manager: "Eli", status: "Projected" }
    ],
    playoffOdds: [
      { team: "Kung Fu Lou", makePlayoffs: 14, winTitle: 4, missPlayoffs: 86 },
      { team: "Q-Tip", makePlayoffs: 53, winTitle: 12, missPlayoffs: 47 },
      { team: "Mrs Hartmann", makePlayoffs: 9, winTitle: 2, missPlayoffs: 91 },
      { team: "Howie Dewitt", makePlayoffs: 59, winTitle: 12, missPlayoffs: 41 },
      { team: "Min Livergirll", makePlayoffs: 45, winTitle: 16, missPlayoffs: 55 },
      { team: "The Better Swan", makePlayoffs: 5, winTitle: 1, missPlayoffs: 95 },
      { team: "Ruble Incognitus", makePlayoffs: 37, winTitle: 8, missPlayoffs: 63 },
      { team: "All You Need is Love", makePlayoffs: 89, winTitle: 22, missPlayoffs: 11 },
      { team: "The SwanFather", makePlayoffs: 6, winTitle: 1, missPlayoffs: 94 },
      { team: "Jimmy Hanes", makePlayoffs: 82, winTitle: 23, missPlayoffs: 18 }
    ],
    weeklyStandingsHistory: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14"],
      teams: [
        { team: "Kung Fu Lou", places: [10] [8] [8] [9] [9] [7]},
        { team: "Q-Tip", places: [5] [2] [2] [3] [3] [3] },
        { team: "Mrs Hartmann", places: [3] [6] [9] [8] [8] [9] },
        { team: "Howie Dewitt", places: [4] [7] [4] [6] [5] [4] },
        { team: "Min Livergirll", places: [6] [3] [5] [4] [6] [6] },
        { team: "The Better Swan", places: [9] [10] [10] [10] [10] [10] },
        { team: "Ruble Incognitus", places: [1] [5] [6] [5] [4] [5] },
        { team: "All You Need is Love", places: [8] [4] [3] [1] [1] [2] },
        { team: "The SwanFather", places: [7] [9] [7] [7] [7] [8] },
        { team: "I'm a Reidtard", places: [2] [1] [1] [2] [2] [1] }
      ]
    },
    allPlay: [
      { team: "Kung Fu Lou", wins: 27, losses: 27 },
      { team: "Q-Tip", wins: 26, losses: 28 },
      { team: "Mrs Hartmann", wins: 11, losses: 43 },
      { team: "Howie Dewitt", wins: 31, losses: 23 },
      { team: "Min Livergirll", wins: 34, losses: 20 },
      { team: "The Better Swan", wins: 14, losses: 40 },
      { team: "Ruble Incognitus", wins: 35, losses: 19 },
      { team: "All You Need is Love", wins: 43, losses: 11 },
      { team: "The SwanFather", wins: 20, losses: 34 },
      { team: "Jimmy Hanes", wins: 29, losses: 25 }
    ],
    recordBook: [
      { label: "Most Points (Week)", holder: "Jimmy Hanes", value: "176.17", note: "Week 1" },
      { label: "Biggest Win (Week)", holder: "Min Livergirll", value: "54.86", note: "Week 2" },
      { label: "Highest Scoring Player (Week)", holder: "Min Livergirll", value: "46.07", note: "Josh Allen" },
      { label: "Best Record", holder: "Jimmy Hanes and All You Need is Love", value: "5-1"),
      { label: "Most Points", holder: "All You Need is Love", value: "849.80"},
      { label: "Highest Scoring Player (Season)", holder: "Min Livergirll", value: "174.01", note: "Josh Allen" }
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
    { slug: "pat", manager: "Pat", currentTeamName: "Mrs Hartmann", bio: "Previously known as Florida Man; Leather Helmet; Lou and Eli's Scraps; Team Conway." },
    { slug: "reid", manager: "Reid", currentTeamName: "Jimmy Hanes", bio: "Previously known as I'm a Reidtard; Zanzi DOG; Blue Eyes White Dragon. Previously co-manager of TemporaREID aka Kried." }
  ]
};
