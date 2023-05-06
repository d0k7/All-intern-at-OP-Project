function displayInternships(internships) {
  const internshipsContainer = document.getElementById("internships-container");
  internshipsContainer.innerHTML = "";

  if (internships.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No internships found";
    internshipsContainer.appendChild(message);
  } else {
    internships.forEach((internship) => {
      const internshipCard = document.createElement("div");
      internshipCard.classList.add("internship-card");

      

      const content = document.createElement("div");
      content.classList.add("internship-content");

      const heading = document.createElement("h3");
      heading.textContent = `${internship.title} at ${internship.company}`;
      content.appendChild(heading);

      const location = document.createElement("p");
      location.textContent = `Location: ${internship.location}`;
      content.appendChild(location);

      const duration = document.createElement("p");
      duration.textContent = `Duration: ${internship.duration}`;
      content.appendChild(duration);

      const description = document.createElement("p");
      description.textContent = internship.description;
      content.appendChild(description);

      const applyButton = document.createElement("a");
      applyButton.href = internship.applyUrl;
      applyButton.textContent = "Apply";
      applyButton.target = "_blank";
      applyButton.rel = "noopener noreferrer";
      content.appendChild(applyButton);

      internshipCard.appendChild(content);

      internshipsContainer.appendChild(internshipCard);
    });
  }
}

function filterInternships() {
  const locationFilter = document.getElementById("location-filter");
  const enteredLocation = locationFilter.value;

  let filteredInternships = [];

  if (enteredLocation === "") {
    filteredInternships = internships;
  } else {
    filteredInternships = internships.filter((internship) => {
      return internship.location.toLowerCase().includes(enteredLocation.toLowerCase());
    });
  }

  displayInternships(filteredInternships);
}


 





const internshipsUrl = "intern-data.json";

let internships = [];

fetch(internshipsUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    internships = data.Internships;
    displayInternships(internships);
  })
  .catch((error) => {
    console.error(error);
  });

const locationFilter = document.getElementById("location-filter");
locationFilter.addEventListener("change", filterInternships);
