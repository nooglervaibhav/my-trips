function renderTrips() {
  const container = document.getElementById("tripContainer");
  container.innerHTML = trips.map((trip, index) => `
    <div class="trip-card" onclick="openItinerary(${index})">
      <div class="trip-info">
        <h3>${trip.city}</h3>
        <p>${trip.shortDescription}</p>
      </div>
      <div class="duration-tag">${trip.days}</div>
    </div>
  `).join("");
}

function openItinerary(index) {
  const trip = trips[index];
  modalCity.innerText = trip.city;
  modalDays.innerText = trip.days;
  modalItinerary.innerHTML = trip.itinerary.map(day => `
    <div class="day-block">
      <h4>${day.day} – ${day.title}</h4>
      <div>${d.details}</div>

    </div>
  `).join("");
  itineraryModal.style.display = "block";
}

function closeModal() {
  itineraryModal.style.display = "none";
}

renderTrips();
