<?php
    $title = $_POST['title'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = "=?utf-8?B".base64_encode($title)."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html";

    $success = mail("support@yougro.xyz", $subject, $message, $headers);
?>