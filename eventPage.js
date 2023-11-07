if (localStorage.getItem("registeredEvents") == null) localStorage.setItem("registeredEvents", "");
else if(localStorage.getItem("registeredEvents") != "") renderMyEvents();

document.querySelectorAll('.registerButton').forEach((button) => {
    button.addEventListener('click', () => {

      button.style.backgroundColor = "lightgray";
      button.textContent = "Registered";
      button.disabled = true;
      
      let currentEvents = localStorage.getItem("registeredEvents"),
        newRegisteredEventsString = currentEvents += currentEvents == "" ? button.name : `:${button.name}`;
      
      localStorage.setItem("registeredEvents", newRegisteredEventsString);
  
      console.log("\n"+ localStorage.getItem("registeredEvents"));

      renderNewEvent(button.name);
  });
});

document.getElementById('unregisterButton').addEventListener('click', () => {
  console.log("Reloading page.")
  localStorage.clear();
  window.location.reload();
});

let registeredEvents = [
  [], [], []
];

function renderNewEvent(event) {
  const eventDisplayDiv = document.createElement("div");
  const eventDisplayContainer = document.createElement("div");

  const eventName = document.createElement("h4").textContent = event,
    eventDate = document.createElement("p").textConent = "1000";

  eventDisplayDiv.className = "eventDisplayDiv"; 
  eventDisplayContainer.className = "eventDisplayContainer";

  eventDisplayContainer.append(eventName, eventDate);
  eventDisplayDiv.append(eventDisplayContainer);
  
  document.getElementById("myEventsDisplay").append(eventDisplayDiv);
  
}

function renderMyEvents() {
  const eventsArray = localStorage.getItem("registeredEvents").split(":");

  console.log(eventsArray);
  eventsArray.forEach((event) => {
    renderNewEvent(document.getElementsByClassName(event)[0])
  })
}