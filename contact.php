<?php
//if btn pressed
if (isset($_POST['btn'])) {
  //create vars for the form fields
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];

//send to me
  $mailTo = "farnworthwork@gmail.com";
  $header = "From: " .$email;
  //$txt gives a nice format to the email \n is an underscore.
  $txt = "You have recived an email from ".$name.".\n\n".$subject;

  //create the email
  mail($mailTo, $subject, $txt, $header);
  header("Location: index.php?mailsend");
}

?>
