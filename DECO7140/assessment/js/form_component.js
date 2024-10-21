// Scroll functionality for 'Back to Top' button
window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top");
  // Show button if scrolled down 100px from the top
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Scroll back to the top when 'Back to Top' button is clicked
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const myHeaders = new Headers();
myHeaders.append("student_number", "s4546701");
myHeaders.append("uqcloud_zone_id", "71e22d87");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

// Fetch request

fetch(
  "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericevent/",
  requestOptions
)
  .then((response) => response.json()) // Parse the JSON response
  .then((data) => {
    console.log(data);
    generateEventCards(data.slice(0, 4)); //To display first 4 events
    // let output = ""; // Initialize a variable to store HTML
    if (data.length > 4) {
      document.getElementById("load-more").style.display = "block";
    }

    let allEvents = data;

    // Handle Load More functionality
    let eventsDisplayed = 4; // Start by showing 4 events
    document.getElementById("load-more").addEventListener("click", function () {
      eventsDisplayed += 4; // Show 4 more events on each click
      generateEventCards(allEvents.slice(0, eventsDisplayed));

      // Hide button if all events are displayed
      if (eventsDisplayed >= allEvents.length) {
        document.getElementById("load-more").style.display = "none";
      }
    });
  })
  .catch((error) => console.error("Error:", error)); // Handle any errors that occur

function generateEventCards(events) {
  const eventContainer = document.getElementById("event-container");

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    const eventDate = new Date(event.date_time);
    const dateHTML = `<div class="event-date">${eventDate.getDate()}<br><span>${eventDate.toLocaleString(
      "default",
      { month: "long" }
    )}</span></div>`;

    const eventInfoHTML = `
            <div class="event-info">
                <div class="event-title">${event.event_name}</div>
                <div class="event-time">Time: ${eventDate.toLocaleTimeString(
                  [],
                  { hour: "2-digit", minute: "2-digit" }
                )}</div>
                <div class="event-age">Location: ${event.location}</div>
                <div class="event-description">${event.description}</div>
            </div>
        `;

    eventCard.innerHTML = dateHTML + eventInfoHTML;
    eventContainer.appendChild(eventCard);
  });
}

// Post

document
  .getElementById("eventFormList")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Create headers for authentication
    const myHeaders = new Headers();
    myHeaders.append("student_number", "s4546701");
    myHeaders.append("uqcloud_zone_id", "71e22d87");
    // Get the form element
    const form = document.getElementById("eventFormList");
    // Create FormData from the form
    const formData = new FormData(form);
    // Prepare the fetch request options
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData, // Pass the serialized form data
      redirect: "follow",
    };
    console.log(formData);

    // Send the POST request
    fetch(
      "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericevent/",
      requestOptions
    )
      .then((response) => response.json()) // Convert response to JSON
      .then((result) => {
        console.log(result); // Log the result to the console
        // process the result here
      })

      .catch((error) => console.error("Error:", error)); // handle any errors that occur
  });

// Handle form reset when "Cancel" button is clicked
document.getElementById("cancel-form").addEventListener("click", function () {
  const form = document.getElementById("eventFormList");
  form.reset(); // This will clear all input fields
});

// // Function to load more events
// function loadMoreEvents() {
//   currentPage++;
//   const totalEvents = events.length;
//   const nextPageEnd = currentPage * eventsPerPage;
//   const endIndex = nextPageEnd < totalEvents ? nextPageEnd : totalEvents;

//   generateEventCards(events, (currentPage - 1) * eventsPerPage, endIndex);

//   // Hide the Load More button if all events are displayed
//   if (endIndex === totalEvents) {
//     document.getElementById("load-more-btn").style.display = "none";
//   }
// }
