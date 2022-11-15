<?php

$name = $_POST['name'];
$email = $_POST['email']:
$message = $_POST['message']:
$email = $_POST['email']:

$mailheader = "From: ".$name."<".$email.">/r/n";

$recipient = "dylan.osullivan03@gmail.com";

mail($recipient, "contact form", $message, $mailheader);
or die("error");

echo"message sent";

?>