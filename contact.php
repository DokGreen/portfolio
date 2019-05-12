<?php
  //vars for form inputs
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];

  //send to me
  $mailTo = "farnworthwork@gmail.com";
  $mailSubject = "Job opportunity";
  $headers = "From: " .$email;
  //$txt gives a nice format to the email \n is an underscore.
  $txt = "You have recived an email from ".$name."\n".$email".\n\n".$subject;
  //create the email
  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");
?>
