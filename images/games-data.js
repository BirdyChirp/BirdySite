// Add a new game by adding one object here.
// Both missions.html and mission.html read from this file —
// nothing else needs to change when you add a game.

const GAMES = [
  {
    slug: "bird-dash",
    title: "Bird Dash",
    tagline: "Update this tagline whenever you're ready",
    description: "Update this description with the real story/rules for Bird Dash.",
    thumbnail: "🕊️",
    status: "active", // "active" or "dev"
    statusLabel: "Playable",
    path: "Bird-Dash/bird-dash-index.html"
  },
  {
    slug: "mission-two",
    title: "Case File: Pigeon Protocol",
    tagline: "Surveillance duty at the park",
    description: "Tail a suspicious pigeon across the park without blowing your cover. Currently in development — some systems may be experimental.",
    thumbnail: "🐦",
    status: "dev",
    statusLabel: "In Development",
    path: "games/mission-two/index.html"
  }
];
