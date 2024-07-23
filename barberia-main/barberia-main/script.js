document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    var barber = document.getElementById("barber").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
  
    // Mostrar la confirmación de la cita
    document.getElementById("confirmBarber").textContent = barber;
    document.getElementById("confirmDate").textContent = date;
    document.getElementById("confirmTime").textContent = time;
    document.getElementById("confirmation").classList.remove("hidden");
  
    // Opcional: Limpiar el formulario después de enviar
    this.reset();
  });
  