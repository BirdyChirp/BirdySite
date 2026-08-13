// Add a new game by adding one object here.
// Both missions.html and mission.html read from this file —
// nothing else needs to change when you add a game.

const GAMES = [
  {
    slug: "bird-dash",
    title: "Bird Dash",
    tagline: "What is the only thing better than birds? Space Birds!",
    description: "Save the universe, one reckless flight at a time. Alas, you just finished your agent boot camp, and all you ever wanted was to eat a little sandwich. Unfortunately for you, the universe is never one to wait.",
    thumbnail: "images/bird-dash-thumb.jpeg",
    status: "active", // "active" or "dev"
    statusLabel: "Playable",
    path: "games/Bird-Dash/bird-dash-index.html"
  },
  {
    slug: "mission-two",
    title: "Broken Bird",
    tagline: "A stealth mission gone slightly wrong",
    description: "Ghost through pipes and scans for potential threats. Oh, and beware the cats.",
    thumbnail: "images/broken-bird-thumb.png",
    status: "dev",
    statusLabel: "In Development",
    path: "games/Broken-Bird/index.html"
  }
];
