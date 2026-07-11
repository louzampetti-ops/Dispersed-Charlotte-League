function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function safeText(value, fallback = "") {
  return value ?? fallback;
}

function safeNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function formatSignedNumber(value) {
  const num = safeNumber(value, 0);
  return num > 0 ? `+${num.toFixed(2)}` : num.toFixed(2);
}

function destroyExistingChart(canvasId) {
  const chart = Chart.getChart(canvasId);
  if (chart) chart.destroy();
}

function renderHomePage() {
  if (typeof leagueData === "undefined") return;

  const seasonYear = document.getElementById("season-year");
  const seasonSummary = document.getElementById("season-summary");
  const standingsBody = document.getElementById("homepage-standings");
  const seasonsList = document.getElementById("homepage-seasons");

  if (seasonYear) seasonYear.textContent = safeText(leagueData.currentSeason?.year);
  if (seasonSummary) seasonSummary.textContent = safeText(leagueData.currentSeason?.summary);

  if (standingsBody) {
    standingsBody.innerHTML = "";
    safeArray(leagueData.currentSeason?.standings).forEach(team => {
      standingsBody.innerHTML += `
        <tr>
          <td>${safeText(team.place)}</td>
          <td>${safeText(team.team)}</td>
          <td>${safeText(team.wins)}-${safeText(team.losses)}</td>
          <td>${safeText(team.pointsFor)}</td>
        </tr>
      `;
    });
  }

  if (seasonsList) {
    seasonsList.innerHTML = "";
    safeArray(leagueData.seasons).slice().reverse().forEach(season => {
      seasonsList.innerHTML += `
        <li>
          <a href="seasons/${season.year}.html">${season.year}</a> - Champion: ${safeText(season.champion, "TBD")}
        </li>
      `;
    });
  }
}

function renderCurrentSeasonPage() {
  if (typeof leagueData === "undefined") return;

  const season = leagueData.currentSeason || {};

  const title = document.getElementById("current-season-title");
  const standingsBody = document.getElementById("current-standings");
  const scoresBody = document.getElementById("current-scores");
  const statsBody = document.getElementById("current-team-stats");
  const powerRankingsBody = document.getElementById("current-power-rankings");
  const playoffPictureBody = document.getElementById("current-playoff-picture");
  const recordBookList = document.getElementById("current-record-book");

  if (title) title.textContent = `${safeText(season.year)} Season`;

  if (standingsBody) {
    standingsBody.innerHTML = "";
    safeArray(season.standings).forEach(team => {
      standingsBody.innerHTML += `
        <tr>
          <td>${safeText(team.place)}</td>
          <td>${safeText(team.team)}</td>
          <td>${safeText(team.manager)}</td>
          <td>${safeText(team.wins)}</td>
          <td>${safeText(team.losses)}</td>
          <td>${safeText(team.pointsFor)}</td>
          <td>${safeText(team.pointsAgainst)}</td>
        </tr>
      `;
    });
  }

  if (scoresBody) {
    scoresBody.innerHTML = "";
    safeArray(season.weeklyScores).forEach(game => {
      scoresBody.innerHTML += `
        <tr>
          <td>${safeText(game.week)}</td>
          <td>${safeText(game.away)}</td>
          <td>${safeText(game.awayScore)}</td>
          <td>${safeText(game.home)}</td>
          <td>${safeText(game.homeScore)}</td>
        </tr>
      `;
    });
  }

  if (statsBody) {
    statsBody.innerHTML = "";
    safeArray(season.teamStats).forEach(team => {
      statsBody.innerHTML += `
        <tr>
          <td>${safeText(team.team)}</td>
          <td>${safeText(team.manager)}</td>
          <td>${safeNumber(team.averageScore).toFixed(2)}</td>
          <td>${safeNumber(team.last3Average).toFixed(2)}</td>
          <td>${safeNumber(team.averageOpponent).toFixed(2)}</td>
          <td>${formatSignedNumber(team.differential)}</td>
          <td>${safeText(team.weeklyEarnings)}</td>
          <td>${safeText(team.streak)}</td>
        </tr>
      `;
    });
  }

  if (powerRankingsBody) {
    powerRankingsBody.innerHTML = "";
    safeArray(season.powerRankings).forEach(item => {
      const change = safeNumber(item.change, 0);
      const changeText = change > 0 ? `+${change}` : `${change}`;
      powerRankingsBody.innerHTML += `
        <tr>
          <td>${safeText(item.rank)}</td>
          <td>${safeText(item.team)}</td>
          <td>${safeText(item.tier)}</td>
          <td>${safeText(item.score)}</td>
          <td>${safeText(item.record)}</td>
          <td>${safeText(item.streak)}</td>
          <td>${changeText}</td>
        </tr>
      `;
    });
  }

  if (playoffPictureBody) {
    playoffPictureBody.innerHTML = "";
    safeArray(season.playoffPicture).forEach(item => {
      playoffPictureBody.innerHTML += `
        <tr>
          <td>${safeText(item.seed)}</td>
          <td>${safeText(item.team)}</td>
          <td>${safeText(item.manager)}</td>
          <td>${safeText(item.status)}</td>
        </tr>
      `;
    });
  }

  if (recordBookList) {
    recordBookList.innerHTML = "";
    safeArray(season.recordBook).forEach(item => {
      recordBookList.innerHTML += `
        <li>
          <strong>${safeText(item.label)}:</strong>
          ${safeText(item.holder)} - ${safeText(item.value)}
          ${item.note ? `(${item.note})` : ""}
        </li>
      `;
    });
  }

  renderCurrentSeasonCharts();
}

function renderHistoryPage() {
  if (typeof leagueData === "undefined") return;

  const list = document.getElementById("season-history-list");
  if (!list) return;

  list.innerHTML = "";
  safeArray(leagueData.seasons).slice().reverse().forEach(season => {
    list.innerHTML += `
      <li>
        <strong>${season.year}</strong> - Champion: ${safeText(season.champion, "TBD")},
        Runner-up: ${safeText(season.runnerUp, "TBD")},
        <a href="seasons/${season.year}.html">View season page</a>
      </li>
    `;
  });
}

function renderAllTimePage() {
  if (typeof leagueData === "undefined") return;

  const recordsBody = document.getElementById("all-time-records");
  const h2hBody = document.getElementById("head-to-head-records");

  if (recordsBody) {
    recordsBody.innerHTML = "";
    safeArray(leagueData.allTime?.franchiseRecords).forEach(item => {
      recordsBody.innerHTML += `
        <tr>
          <td>${safeText(item.manager)}</td>
          <td>${safeText(item.wins)}</td>
          <td>${safeText(item.losses)}</td>
          <td>${safeText(item.titles)}</td>
          <td>${safeText(item.playoffAppearances)}</td>
        </tr>
      `;
    });
  }

  if (h2hBody) {
    h2hBody.innerHTML = "";
    safeArray(leagueData.allTime?.headToHead).forEach(matchup => {
      h2hBody.innerHTML += `
        <tr>
          <td>${safeText(matchup.managerA)}</td>
          <td>${safeText(matchup.managerB)}</td>
          <td>${safeText(matchup.winsA)}</td>
          <td>${safeText(matchup.winsB)}</td>
        </tr>
      `;
    });
  }
}

function renderTeamsPage() {
  if (typeof leagueData === "undefined") return;

  const list = document.getElementById("franchise-directory");
  if (!list) return;

  list.innerHTML = "";
  safeArray(leagueData.franchises).forEach(franchise => {
    list.innerHTML += `
      <div class="card">
        <h3>${safeText(franchise.manager)}</h3>
        <p>Current Team Name: ${safeText(franchise.currentTeamName)}</p>
        <p>${safeText(franchise.bio)}</p>
        <a href="franchises/${franchise.slug}.html">View franchise page</a>
      </div>
    `;
  });
}

function renderDirectoryPage() {
  if (typeof leagueData === "undefined") return;

  const list = document.getElementById("league-roles");
  if (!list) return;

  list.innerHTML = "";
  safeArray(leagueData.league?.roles).forEach(role => {
    list.innerHTML += `<li><strong>${safeText(role.title)}:</strong> ${safeText(role.name)}</li>`;
  });
}

function renderSeasonPage() {
  if (typeof leagueData === "undefined") return;

  const page = document.body.dataset.season;
  const season = safeArray(leagueData.seasons).find(s => String(s.year) === String(page));
  if (!season) return;

  const title = document.getElementById("season-page-title");
  const summary = document.getElementById("season-page-summary");
  const finalStandingsBody = document.getElementById("season-final-standings");
  const teamStatsBody = document.getElementById("season-team-stats");
  const recordBookList = document.getElementById("season-record-book");

  if (title) title.textContent = `${season.year} Season`;
  if (summary) summary.textContent = safeText(season.summary);

  if (finalStandingsBody) {
    finalStandingsBody.innerHTML = "";
    safeArray(season.finalStandings).forEach(item => {
      finalStandingsBody.innerHTML += `
        <tr>
          <td>${safeText(item.place)}</td>
          <td>${safeText(item.team)}</td>
          <td>${safeText(item.manager)}</td>
          <td>${safeText(item.winnings)}</td>
        </tr>
      `;
    });
  }

  if (teamStatsBody) {
    teamStatsBody.innerHTML = "";
    safeArray(season.teamStats).forEach(team => {
      teamStatsBody.innerHTML += `
        <tr>
          <td>${safeText(team.manager)}</td>
          <td>${safeText(team.team)}</td>
          <td>${safeText(team.wins)}-${safeText(team.losses)}</td>
          <td>${safeText(team.averageScore)}</td>
          <td>${safeText(team.averageOpponent)}</td>
          <td>${safeText(team.differential)}</td>
          <td>${safeText(team.weeklyEarnings)}</td>
        </tr>
      `;
    });
  }

  if (recordBookList) {
    recordBookList.innerHTML = "";
    safeArray(season.recordBook).forEach(item => {
      recordBookList.innerHTML += `
        <li>
          <strong>${safeText(item.label)}:</strong>
          ${safeText(item.holder)} - ${safeText(item.value)}
          ${item.note ? `(${item.note})` : ""}
        </li>
      `;
    });
  }
}

function renderCurrentSeasonCharts() {
  if (typeof Chart === "undefined" || typeof leagueData === "undefined") return;

  const season = leagueData.currentSeason || {};
  const chartColors = [
    "#2e1f93", "#f2ab1d", "#198754", "#dc3545", "#0d6efd",
    "#6f42c1", "#fd7e14", "#20c997", "#6c757d", "#111111"
  ];

  const standingsCanvas = document.getElementById("standings-history-chart");
  if (standingsCanvas && season.weeklyStandingsHistory && Array.isArray(season.weeklyStandingsHistory.labels)) {
    destroyExistingChart("standings-history-chart");
    new Chart(standingsCanvas, {
      type: "line",
      data: {
        labels: season.weeklyStandingsHistory.labels,
        datasets: safeArray(season.weeklyStandingsHistory.teams).map((team, index) => ({
          label: team.team,
          data: safeArray(team.places).map(place => safeNumber(place, null)),
          borderColor: chartColors[index % chartColors.length],
          backgroundColor: chartColors[index % chartColors.length],
          tension: 0.25,
          spanGaps: true
        }))
      },
      options: {
        responsive: true,
        interaction: { mode: "nearest", intersect: false },
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: {
            reverse: true,
            min: 1,
            max: 10,
            ticks: { stepSize: 1 },
            title: { display: true, text: "Standing" }
          },
          x: { title: { display: true, text: "Week" } }
        }
      }
    });
  }

  const playoffCanvas = document.getElementById("playoff-odds-chart");
  if (playoffCanvas && Array.isArray(season.playoffOdds)) {
    destroyExistingChart("playoff-odds-chart");
    const labels = season.playoffOdds.map(t => t.team);
    const makeData = season.playoffOdds.map(t => safeNumber(t.makePlayoffs));
    const winData = season.playoffOdds.map(t => safeNumber(t.winTitle));

    new Chart(playoffCanvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: "Make playoffs %", data: makeData, backgroundColor: "rgba(242, 171, 29, 0.75)" },
          { label: "Win title %", data: winData, backgroundColor: "rgba(46, 31, 147, 0.75)" }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: "Probability (%)" }
          }
        }
      }
    });
  }

  const averageCanvas = document.getElementById("average-scores-chart");
  if (averageCanvas && Array.isArray(season.teamStats)) {
    destroyExistingChart("average-scores-chart");
    const labels = season.teamStats.map(t => t.team);
    const averageScores = season.teamStats.map(t => safeNumber(t.averageScore));
    const last3Scores = season.teamStats.map(t => safeNumber(t.last3Average));
    const leagueAverage = averageScores.length
      ? averageScores.reduce((sum, value) => sum + value, 0) / averageScores.length
      : 0;

    new Chart(averageCanvas, {
      data: {
        labels,
        datasets: [
          {
            type: "bar",
            label: "Season average",
            data: averageScores,
            backgroundColor: "rgba(46, 31, 147, 0.75)"
          },
          {
            type: "bar",
            label: "Last 3 weeks average",
            data: last3Scores,
            backgroundColor: "rgba(242, 171, 29, 0.75)"
          },
          {
            type: "line",
            label: "League average",
            data: labels.map(() => leagueAverage),
            borderColor: "#198754",
            backgroundColor: "#198754",
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0,
            order: 0
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Points" }
          }
        }
      }
    });
  }

  const allPlayCanvas = document.getElementById("all-play-chart");
  if (allPlayCanvas && Array.isArray(season.allPlay)) {
    destroyExistingChart("all-play-chart");
    const labels = season.allPlay.map(t => t.team);
    const winsData = season.allPlay.map(t => safeNumber(t.wins));
    const lossesData = season.allPlay.map(t => safeNumber(t.losses));

    new Chart(allPlayCanvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: "All-play wins", data: winsData, backgroundColor: "rgba(46, 31, 147, 0.75)" },
          { label: "All-play losses", data: lossesData, backgroundColor: "rgba(242, 171, 29, 0.75)" }
        ]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: { legend: { position: "bottom" } },
        scales: {
          x: { beginAtZero: true, title: { display: true, text: "Games" } }
        }
      }
    });
  }
}

function renderFranchisePage() {
  if (typeof leagueData === "undefined") return;

  const page = document.body.dataset.franchise;
  const franchise = safeArray(leagueData.franchises).find(f => f.slug === page);
  if (!franchise) return;

  const title = document.getElementById("franchise-page-title");
  const teamName = document.getElementById("franchise-current-team");
  const bio = document.getElementById("franchise-bio");

  if (title) title.textContent = safeText(franchise.manager);
  if (teamName) teamName.textContent = safeText(franchise.currentTeamName);
  if (bio) bio.textContent = safeText(franchise.bio);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  renderCurrentSeasonPage();
  renderHistoryPage();
  renderAllTimePage();
  renderTeamsPage();
  renderDirectoryPage();
  renderSeasonPage();
  renderFranchisePage();
});
