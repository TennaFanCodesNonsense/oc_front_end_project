const API_ORIGIN = "https://6afca864892984c4494bd776.mockapi.io";
const API_URL = `${API_ORIGIN}/api/v1`;

let all_stories = [];

async function fetchStories() {
  const response = await fetch(`${API_URL}/Story`);
  all_stories = await response.json();
  console.log(all_stories); }

function do_something(){
  // console.log('goodbye world')
  document.getElementById('landing_space').innerText = 'Hello World'
}