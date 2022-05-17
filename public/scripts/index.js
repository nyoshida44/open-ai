$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    let prompt = document.getElementById("prompt-area").value;
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/generate",
      data: JSON.stringify({"prompt": prompt })
    })
  })
});