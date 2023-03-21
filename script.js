document.addEventListener("DOMContentLoaded", () => {
  populateTeams();
});

function populateTeams() {
  const teamIds = ["team1-table", "team2-table", "team3-table"];
  teamIds.forEach(id => {
    const table = document.getElementById(id);
    populateTable(table);
  });
}

function populateTable(table) {
  const header = `<tr>
    <th>Name</th>
    <th>Goals</th>
    <th>Assists</th>
  </tr>`;
  table.innerHTML = header;

  // Generate 10 random players
  let players = [];
  for (let i = 0; i < 10; i++) {
    players.push({
      name: `Player ${Math.floor(Math.random() * 100) + 1}`,
      goals: Math.floor(Math.random() * 10),
      assists: Math.floor(Math.random() * 10),
    });
  }

  // Sort players by goals and assists
  players.sort((a, b) => b.goals - a.goals || b.assists - a.assists);

  // Add players to the table
  players.forEach((player, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = player.name;
    row.appendChild(nameCell);

    const goalsCell = document.createElement("td");
    goalsCell.textContent = player.goals;
    if (index < 3) {
      goalsCell.classList.add("highlight-goals");
    }
    row.appendChild(goalsCell);

    const assistsCell = document.createElement("td");
    assistsCell.textContent = player.assists;
    if (index < 3) {
      assistsCell.classList.add("highlight-assists");
    }
    row.appendChild(assistsCell);

    table.appendChild(row);
  });
}

function scrollToTeam(teamId) {
  const target = document.getElementById(teamId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
