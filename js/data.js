<nav class="site-nav">
  <a href="index.html">Home</a>
  <a href="current-season.html">Current Season</a>
  <a href="history.html">Season History</a>
  <a href="all-time.html">All-Time</a>
  <a href="teams.html">Teams</a>
  <a href="directory.html">League Directory</a>
</nav>
<header class="site-header">
  <img src="assets/logo.jpg" alt="DCL league logo" class="site-logo">
  <div>
    <h1>The Dispersed Charlotte League</h1>
    <p>League history, standings, stats, and records</p>
  </div>
</header>
const leagueData = {
  league: {
    name: "The Dispersed Charlotte League",
    commissioner: "Name Here",
    roles: {
      commissioner: "Name Here",
      tomfoolery: "Name Here",
      assistantTomfoolery: "Name Here",
      creativeDesigner: "Name Here"
    }
  },
  currentSeason: {
    year: 2026,
    standings: [],
    weeklyScores: [],
    teams: []
  },
  seasons: {
    "2025": {
      champion: "Max",
      standings: [],
      scores: [],
      stats: []
    }
  },
  franchises: {
    "lou": {
      manager: "Lou",
      currentTeamNames: [],
      titles: 1,
      record: "0-0",
      playoffAppearances: 0,
      headToHead: []
    }
  },
  allTime: {
    placements: [],
    records: [],
    headToHead: []
  }
};
