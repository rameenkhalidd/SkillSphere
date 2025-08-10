// === Modal Logic ===
document.getElementById("learnerBtn").addEventListener("click", function () {
    document.getElementById("learnerModal").style.display = "block";
});
document.querySelector(".learner-close").addEventListener("click", function () {
    document.getElementById("learnerModal").style.display = "none";
});
window.addEventListener("click", function (e) {
    if (e.target == document.getElementById("learnerModal")) {
        document.getElementById("learnerModal").style.display = "none";
    }
});

// === Step Navigation ===
let currentStep = 1;
function showStep(step) {
    document.querySelectorAll(".learner-step").forEach(s => s.style.display = "none");
    document.querySelector(`.learner-step[data-step="${step}"]`).style.display = "block";
}
document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        currentStep++;
        if (currentStep === 4) {
            document.getElementById("reviewName").textContent = document.getElementById("learnerName").value;
            document.getElementById("reviewBio").textContent = document.getElementById("learnerBio").value;
            document.getElementById("reviewInterests").textContent = getSelectedChips("interestChips").join(", ");
            document.getElementById("reviewGoals").textContent = getSelectedChips("goalChips").join(", ");
        }
        showStep(currentStep);
    });
});
document.querySelectorAll(".prev-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        currentStep--;
        showStep(currentStep);
    });
});

// === Chip Selection ===
function toggleChipSelection(containerId) {
    document.getElementById(containerId).addEventListener("click", function (e) {
        if (e.target.classList.contains("chip")) {
            e.target.classList.toggle("selected");
        }
    });
}
function getSelectedChips(containerId) {
    return Array.from(document.getElementById(containerId).querySelectorAll(".chip.selected"))
        .map(chip => chip.textContent);
}
toggleChipSelection("interestChips");
toggleChipSelection("goalChips");

// === Submit ===
document.getElementById("submitLearner").addEventListener("click", function () {
    // Optionally, you can keep alert or remove it
    // alert("Form submitted!");

    // Close the modal (optional)
    document.getElementById("learnerModal").style.display = "none";

    // Redirect to homePage.html
    window.location.href = "homePage.html";
});



// === Mentor Modal Logic ===
document.getElementById("mentorBtn").addEventListener("click", function () {
    document.getElementById("mentorModal").style.display = "block";
});

document.querySelector(".mentor-close").addEventListener("click", function () {
    document.getElementById("mentorModal").style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("mentorModal")) {
        document.getElementById("mentorModal").style.display = "none";
    }
});

// === Step Navigation ===
let currentMentorStep = 1;

function showMentorStep(step) {
    document.querySelectorAll("#mentorModal .mentor-step").forEach(s => s.style.display = "none");
    const stepElement = document.querySelector(`#mentorModal .mentor-step[data-step="${step}"]`);
    if (stepElement) stepElement.style.display = "block";
}

document.querySelectorAll("#mentorModal .next-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        currentMentorStep++;
        if (currentMentorStep === 4) {
            document.getElementById("reviewMentorName").textContent = document.getElementById("mentorName").value;
            document.getElementById("reviewMentorBio").textContent = document.getElementById("mentorBio").value;
            document.getElementById("reviewExpertise").textContent = getSelectedChips("expertiseChips").join(", ");
            document.getElementById("reviewAvailability").textContent = getSelectedChips("availabilityChips").join(", ");
        }
        showMentorStep(currentMentorStep);
    });
});

document.querySelectorAll("#mentorModal .prev-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        currentMentorStep--;
        showMentorStep(currentMentorStep);
    });
});

// === Chip Selection ===
function toggleChipSelection(containerId) {
    document.getElementById(containerId).addEventListener("click", function (e) {
        if (e.target.classList.contains("chip")) {
            e.target.classList.toggle("selected");
        }
    });
}

function getSelectedChips(containerId) {
    return Array.from(document.getElementById(containerId).querySelectorAll(".chip.selected"))
        .map(chip => chip.textContent);
}

toggleChipSelection("expertiseChips");
toggleChipSelection("availabilityChips");

// === Submit ===
document.getElementById("submitMentor").addEventListener("click", function () {
    alert("Mentor form submitted!");
    document.getElementById("mentorModal").style.display = "none";
    currentMentorStep = 1;
    showMentorStep(currentMentorStep);
});