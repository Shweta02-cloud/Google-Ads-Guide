let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progress-bar");

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.remove("active");
        gsap.to(s, { opacity: 0, duration: 0.3 });
    });

    steps[step].classList.add("active");
    gsap.fromTo(steps[step], { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 });

    let progress = ((step + 1) / steps.length) * 100;
    progressBar.style.width = progress + "%";
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function restart() {
    currentStep = 0;
    showStep(currentStep);
}

// Initialize first step as visible
showStep(currentStep);
