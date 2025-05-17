document.getElementById('reserva-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.');
  this.reset();
});