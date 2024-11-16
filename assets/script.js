document.addEventListener("DOMContentLoaded", function () {
  // Now we know the DOM is fully loaded, and we can safely bind events
  const modalTriggers = document.querySelectorAll("h2");
  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const creature = trigger
        .getAttribute("onclick")
        .split("(")[1]
        .split(")")[0]
        .replace("'", "")
        .replace("'", "");
      openModal(creature);
    });
  });

  // Function to open modal
  function openModal(creature) {
    const modal = document.getElementById(`${creature}Modal`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  // Function to close modal
  function closeModal(creature) {
    const modal = document.getElementById(`${creature}Modal`);
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Close modal if clicked outside
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  // Close modal when the close button is clicked
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });
});
