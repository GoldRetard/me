$("button").on("click", function() {
  var title = $("#title").val().trim();
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var message = $("#message").val().trim();

if (title = "") {
  $("#request_anonymous_requester_email_error").text("Инициатор: Тема: поле не может быть пустым");
  return false
} else if (name == "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Имя: поле не может быть пустым");
    return false;
  } else if (email == "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Почта: поле не может быть пустым");
    return false;
  } else if (message == "") {
    $("#request_anonymous_requester_email_error").text("Инициатор: Сообщение: поле не может быть пустым");
    return false;
  }

  $("#request_anonymous_requester_email_error").text("");

  $.ajax({
    url: 'php/main.php',
    type: 'POST',
    cache: false,
    data: { 'title': title 'name': name, 'email': email, 'message': message },
    dataType: 'html',
    beforeSend: function() {
      $("#button").prop("disabled", true);
    },
    success: function(data) {
      alert(data);
      $("#button").prop("disabled", false);
    }
  })
});
