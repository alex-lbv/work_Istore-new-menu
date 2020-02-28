if (document.querySelector(".product__present-label") !== null) {
  document.querySelectorAll(".product__present-label").forEach(function(present) {
    present.addEventListener("click", function() {
      if (this.classList.contains("product__present-label--disable")) return;
      var amountPresents = checkPresentsState();
      if (this.classList.contains("product__present-label--active")) {
        this.classList.remove("product__present-label--active");
        if (amountPresents === 2) {
          checkAvalibilityPresent(amountPresents);
        }
      } else if (amountPresents < 2) {
        this.classList.add("product__present-label--active");
        if (amountPresents === 1) {
          checkAvalibilityPresent(amountPresents);
        }
      }
    });
  });

  function checkPresentsState() {
    var inc = 0;
    document.querySelectorAll(".product__present-label").forEach(function(present) {
      if (present.classList.contains("product__present-label--active")) {
        inc++;
      }
    });
    return inc;
  }

  function checkAvalibilityPresent(amountPresents) {
    document.querySelectorAll(".product__present-label").forEach(function(present) {
      if (!present.classList.contains("product__present-label--active")) {
        if (amountPresents === 2) {
          present.classList.remove("product__present-label--disable");
          present.previousElementSibling.disabled = false;
        } else if (amountPresents === 1) {
          present.classList.add("product__present-label--disable");
          present.previousElementSibling.disabled = true;
        }
      }
    });
  }
}
