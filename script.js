document.getElementById("registerButton").addEventListener("click", function() {
    // Open the Google Form in a new tab
    window.open("YOUR_GOOGLE_FORM_LINK_HERE", "_blank");
  
    // Reveal the WhatsApp Link Card
    document.getElementById("whatsappLink").classList.remove("hidden");
  
    // Optionally, scroll to the WhatsApp link
    document.getElementById("whatsappLink").scrollIntoView({ behavior: "smooth" });
  });
  