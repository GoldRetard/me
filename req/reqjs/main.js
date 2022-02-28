$("button").on("click", function() {
  var title = $("#title").val();
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var message = $("#message").val().trim();

  if (title == "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Тема: поле не может быть пустым");
    return false;
  } else if (name == "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Имя: поле не может быть пустым");
    return false;
  } else if (email = "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Тема: поле не может быть пустым");
    return false;
  } else if (message = "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Тема: поле не может быть пустым");
    return false;
  }
});
