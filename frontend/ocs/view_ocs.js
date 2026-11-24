const API_ORIGIN = "https://6afca864892984c4494bd776.mockapi.io";
const API_URL = `${API_ORIGIN}/api/v1`;

let all_ocs = [];

async function fetchStories() {
  const response = await fetch(`${API_URL}/OCs`);
  all_ocs = await response.json();
  console.log(all_ocs); }