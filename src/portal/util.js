export function agentsToString(agents) {
  if (agents.length === 0) {
      return "No agent"
  }
  if (agents.length === 1) {
      let agent = agents[0];
      return `${agent["firstName"]} ${agent["lastName"]}`;
  } else if (agents.length === 2) {
      return `${agents[0]["firstName"]} ${agents[0]["lastName"]} and ${agents[1]["firstName"]} ${agents[1]["lastName"]}`;
  } else if (agents.length === 3) {
      return `${agents[0]["firstName"]} ${agents[0]["lastName"]}, ${agents[1]["firstName"]} ${agents[1]["lastName"]}, and 1 other`;
  } else {
      let remaining = agents.length - 2;
      return `${agents[0]["firstName"]} ${agents[0]["lastName"]}, ${agents[1]["firstName"]} ${agents[1]["lastName"]}, and ${remaining} others`;
  }
}