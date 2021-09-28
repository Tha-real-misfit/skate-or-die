    window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })

    function myFunction(event) {
      event.preventDefault();
      alert("Thank you, weve received your deets, now grab a deck and hit the STREETS!");
      window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
      document.getElementById("newForm").reset();
    }
