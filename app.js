renderTrips(trips);

function renderTrips(data){
  document.getElementById("tripContainer").innerHTML = data.map((t,i)=>`
    <div class="trip-card" onclick="openItinerary(${i})">
      <div class="trip-info">
        <h3>${t.city}</h3>
        <p>${t.shortDescription}</p>
      </div>
      <div class="duration-tag">${t.days}</div>
    </div>
  `).join("");
}

function openItinerary(i){
  const t = trips[i];
  modalCity.innerText = t.city;
  modalDays.innerText = t.days;
  modalImage.src = t.heroImage;
  modalItinerary.innerHTML = t.itinerary.map(d=>`
    <div class="day-block">
      <h4>${d.day} – ${d.title}</h4>
      <p>${d.details}</p>
    </div>
  `).join("");
  itineraryModal.style.display = "block";
}

function closeModal(){
  itineraryModal.style.display = "none";
}

function filterTrips(){
  const v = citySearch.value.toLowerCase();
  renderTrips(trips.filter(t =>
    t.city.toLowerCase().includes(v)
  ));
}
