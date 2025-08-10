
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
            alert("Form submitted!");
            document.getElementById("learnerModal").style.display = "none";
        });
    