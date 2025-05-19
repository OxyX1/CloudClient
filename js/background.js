// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Vanta Clouds on the container div
    VANTA.CLOUDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0
    });
});