function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

// Actualizar la hora cada segundo
setInterval(updateTime, 1000);
updateTime();

// Obtener ubicación
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        document.getElementById('location').textContent = `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
    }, error => {
        document.getElementById('location').textContent = "No se pudo obtener la ubicación";
    });
} else {
    document.getElementById('location').textContent = "Geolocalización no soportada";
}
