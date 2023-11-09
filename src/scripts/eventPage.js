const registeredEvents = JSON.parse(`{
  "CarShow": [ "Car Show", "July 29th", "Event showcasing cars from 1990 to now."],
  
  "FanMeet": [ "Fan Meet", "July 30th", "Dedicated day where fans can meet me, and my assistant who founded this convention."],
  
  "SportCars": ["Sports Cars", "July 31st", "Day dedicated to showcasing sports cars of all varieties, we have some real winners here."],
  "SpecialGuests": ["Guest Show", "August 2nd", "A day some special guests are expected to show up."],
  
  "VintageShow": ["Vintage Cars", "August 3rd", "Day dedicated to showcasing some vintage cars, like Ford Model As"],
  
  "FanRace": ["Fan Car Race", "August 4th", "Something a bit different. Come bring your cars and lets race."]
}`)


if (localStorage.getItem("registeredEvents") == null) localStorage.setItem("registeredEvents", "");

document.querySelectorAll('.eventDisplayDiv').forEach((div) => {
  const originalWidth = div.style.width, 
    originalHeight = div.style.height;

  const eventData = registeredEvents[`${div.id}`];
  
  div.addEventListener('mouseenter', () => {
    console.log('div clicked')
    div.style.width = "150px";
    div.style.height = "300px";
    document.getElementById(`${div.id}-d`).textContent = eventData[2];
  })

  div.addEventListener('mouseleave', () => {
    document.getElementById(`${div.id}-d`).textContent = "";
    div.style.width = originalWidth;
    div.style.height = originalHeight;
  })
})

document.querySelectorAll('.registerButton').forEach((button) => {
  function setClicked() {
    document.getElementById(`${button.name}`).style.boxShadow = "0 4px 8px 0 lightgreen";
    button.style.backgroundColor = "lightgray";
    button.textContent = "Registered";
    button.disabled = true;
  }
  
  if (localStorage.getItem("registeredEvents").includes(button.name)) {
    setClicked();
  } else button.addEventListener('click', () => {
    setClicked();
    
    let currentEvents = localStorage.getItem("registeredEvents"),
        newRegisteredEventsString = currentEvents += currentEvents == "" ? button.name : `:${button.name}`;
      
    localStorage.setItem("registeredEvents", newRegisteredEventsString);
  
    console.log("\n"+ localStorage.getItem("registeredEvents"));
  });
});

document.getElementById('unregisterButton').addEventListener('click', () => {
  console.log("Reloading page.")
  localStorage.clear();
  window.location.reload();
});

/*
function renderNewEvent(event) {
  const eventDisplayDiv = document.createElement("div");
  const eventDisplayContainer = document.createElement("div");

  const eventData = registeredEvents[`${event}`];
  console.log(eventData)
  const eventName = document.createElement("h4").textContent = eventData[0],
    eventDate = document.createElement("p").textConent = eventData[1];

  eventDisplayDiv.className = "registeredEventDisplayDiv"; 
  eventDisplayContainer.className = "registeredEventDisplayContainer";

  eventDisplayContainer.append(eventName, eventDate);
  eventDisplayDiv.append(eventDisplayContainer);
  
  document.getElementById("myEventsDisplay").append(eventDisplayDiv);
  
}

function renderMyEvents() {
  const eventsArray = localStorage.getItem("registeredEvents").split(":");

  console.log(eventsArray);
  eventsArray.forEach((event) => {
    renderNewEvent(event);
  })
};
*/
