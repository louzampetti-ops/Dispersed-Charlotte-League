function renderHomePage() {
  const seasonYear = document.getElementById("season-year");
  const seasonSummary = document.getElementById("season-summary");
  const standingsBody = document.getElementById("homepage-standings");
  const seasonsList = document.getElementById("homepage-seasons");

  if (seasonYear) seasonYear.textContent = leagueData.currentSeason.year;
  if (seasonSummary) seasonSummary.textContent = leagueData.currentSeason.summary;

  if (standingsBody) {
    standingsBody.innerHTML = "";
    leagueData.currentSeason.standings.forEach(team => {
      standingsBody.innerHTML += `
        <tr>
          <td>${team.place}</td>
          <td>${team.team}</td>
          <td>${team.wins}-${team.losses}</td>
          <td>${team.pointsFor}</td>
        </tr>
      `;
    });
  }

  if (seasonsList) {
    seasonsList.innerHTML = "";
    leagueData.seasons.slice().reverse().forEach(season => {
      seasonsList.innerHTML += `
        <li>
          <a href="seasons/${season.year}.html">${season.year}</a> - Champion: ${season.champion}
        </li>
      `;
    });
  }
}

function renderCurrentSeasonPage() {
  const standingsBody = document.getElementById("current-standings");
  const scoresBody = document.getElementById("current-scores");
  const statsBody = document.getElementById("current-team-stats");
  const title = document.getElementById("current-season-title");

  if (title) title.textContent = `${leagueData.currentSeason.year} Season`;

  if (standingsBody) {
    standingsBody.innerHTML = "";
    leagueData.currentSeason.standings.forEach(team => {
      standingsBody.innerHTML += `
        <tr>
          <td>${team.place}</td>
          <td>${team.team}</td>
          <td>${team.manager}</td>
          <td>${team.wins}</td>
          <td>${team.losses}</td>
          <td>${team.pointsFor}</td>
          <td>${team.pointsAgainst}</td>
        </tr>
      `;
    });
  }

  if (scoresBody) {
    scoresBody.innerHTML = "";
    leagueData.currentSeason.weeklyScores.forEach(game => {
      scoresBody.innerHTML += `
        <tr>
          <td>${game.week}</td>
          <td>${game.away}</td>
          <td>${game.awayScore}</td>
          <td>${game.home}</td>
          <td>${game.homeScore}</td>
        </tr>
      `;
    });
  }

  if (statsBody) {
    statsBody.innerHTML = "";
    leagueData.currentSeason.teamStats.forEach(team => {
      statsBody.innerHTML += `
        <tr>
          <td>${team.team}</td>
          <td>${team.manager}</td>
          <td>${team.pointsFor}</td>
          <td>${team.pointsAgainst}</td>
          <td>${team.streak}</td>
        </tr>
      `;
    });
  }
}

function renderHistoryPage() {
  const list = document.getElementById("season-history-list");
  if (!list) return;

  list.innerHTML = "";
  leagueData.seasons.slice().reverse().forEach(season => {
    list.innerHTML += `
      <li>
        <strong>${season.year}</strong> - Champion: ${season.champion},
        Runner-up: ${season.runnerUp},
        <a href="seasons/${season.year}.html">View season page</a>
      </li>
    `;
  });
}

function renderAllTimePage() {
  const recordsBody = document.getElementById("all-time-records");
  const h2hBody = document.getElementById("head-to-head-records");

  if (recordsBody) {
    recordsBody.innerHTML = "";
    leagueData.allTime.franchiseRecords.forEach(item => {
      recordsBody.innerHTML += `
        <tr>
          <td>${item.manager}</td>
          <td>${item.wins}</td>
          <td>${item.losses}</td>
          <td>${item.titles}</td>
          <td>${item.playoffAppearances}</td>
        </tr>
      `;
    });
  }

  if (h2hBody) {
    h2hBody.innerHTML = "";
    leagueData.allTime.headToHead.forEach(matchup => {
      h2hBody.innerHTML += `
        <tr>
          <td>${matchup.managerA}</td>
          <td>${matchup.managerB}</td>
          <td>${matchup.winsA}</td>
          <td>${matchup.winsB}</td>
        </tr>
      `;
    });
  }
}

function renderTeamsPage() {
  const list = document.getElementById("franchise-directory");
  if (!list) return;

  list.innerHTML = "";
  leagueData.franchises.forEach(franchise => {
    list.innerHTML += `
      <div class="card">
        <h3>${franchise.manager}</h3>
        <p>Current Team Name: ${franchise.currentTeamName}</p>
        <p>${franchise.bio}</p>
        <a href="franchises/${franchise.slug}.html">View franchise page</a>
      </div>
    `;
  });
}

function renderDirectoryPage() {
  const list = document.getElementById("league-roles");
  if (!list) return;

  list.innerHTML = "";
  leagueData.league.roles.forEach(role => {
    list.innerHTML += `<li><strong>${role.title}:</strong> ${role.name}</li>`;
  });
}

function renderSeasonPage() {
  const page = document.body.dataset.season;
  const season = leagueData.seasons.find(s => String(s.year) === String(page));
  const title = document.getElementById("season-page-title");
  const summary = document.getElementById("season-page-summary");

  if (season && title) title.textContent = `${season.year} Season`;
  if (season && summary) summary.textContent = season.summary;
}

function renderFranchisePage() {
  const page = document.body.dataset.franchise;
  const franchise = leagueData.franchises.find(f => f.slug === page);
  const title = document.getElementById("franchise-page-title");
  const teamName = document.getElementById("franchise-current-team");
  const bio = document.getElementById("franchise-bio");

  if (franchise && title) title.textContent = franchise.manager;
  if (franchise && teamName) teamName.textContent = franchise.currentTeamName;
  if (franchise && bio) bio.textContent = franchise.bio;
}

renderHomePage();
renderCurrentSeasonPage();
renderHistoryPage();
renderAllTimePage();
renderTeamsPage();
renderDirectoryPage();
renderSeasonPage();
renderFranchisePage();
