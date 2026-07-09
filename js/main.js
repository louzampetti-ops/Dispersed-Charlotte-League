function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function safeText(value, fallback = "") {
  return value ?? fallback;
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

  const standingsBody = document.getElementById("current-standings");
  const scoresBody = document.getElementById("current-scores");
  const statsBody = document.getElementById("current-team-stats");
  const title = document.getElementById("current-season-title");

  if (title) title.textContent = `${safeText(leagueData.currentSeason?.year)} Season`;

  if (standingsBody) {
    standingsBody.innerHTML = "";
    safeArray(leagueData.currentSeason?.standings).forEach(team => {
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
    safeArray(leagueData.currentSeason?.weeklyScores).forEach(game => {
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
    safeArray(leagueData.currentSeason?.teamStats).forEach(team => {
      statsBody.innerHTML += `
        <tr>
          <td>${safeText(team.team)}</td>
          <td>${safeText(team.manager)}</td>
          <td>${safeText(team.pointsFor)}</td>
          <td>${safeText(team.pointsAgainst)}</td>
          <td>${safeText(team.streak)}</td>
        </tr>
      `;
    });
  }
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
  const teamStatsBody = document.getElementById("season-team-stats");
  const powerRankingsBody = document.getElementById("season-power-rankings");
  const recordBookList = document.getElementById("season-record-book");

  if (title) title.textContent = `${season.year} Season`;
  if (summary) summary.textContent = safeText(season.summary);

  if (teamStatsBody) {
    teamStatsBody.innerHTML = "";
    safeArray(season.teamStats).forEach(team => {
      teamStatsBody.innerHTML += `
        <tr>
          <td>${safeText(team.manager)}</td>
          <td>${safeText(team.team)}</td>
          <td>${safeText(team.wins)}-${safeText(team.losses)}</td>
          <td>${safeText(team.averageScore)}</td>
          <td>${safeText(team.averageLast3)}</td>
          <td>${safeText(team.averageOpponent)}</td>
          <td>${safeText(team.differential)}</td>
          <td>${safeText(team.weeklyEarnings)}</td>
        </tr>
      `;
    });
  }

  if (powerRankingsBody) {
    powerRankingsBody.innerHTML = "";
    safeArray(season.powerRankings).forEach(item => {
      powerRankingsBody.innerHTML += `
        <tr>
          <td>${safeText(item.rank)}</td>
          <td>${safeText(item.team)}</td>
          <td>${safeText(item.tier)}</td>
          <td>${safeText(item.score)}</td>
          <td>${safeText(item.record)}</td>
          <td>${safeText(item.streak)}</td>
          <td>${safeText(item.change)}</td>
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
