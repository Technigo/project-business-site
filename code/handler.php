<?php
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name']; 
  $email_from = $_POST['email'];
  $dinner = $_POST['dinner'];
  $food = $_POST['food']; 
?>

<?php
	$email_from = 'ALEX 30';

	$email_subject = "New person";

  $email_message .= "First Name: ".clean_string($first_name)."\n";
  $email_message .= "Last Name: ".clean_string($last_name)."\n";
  $email_message .= "Email: ".clean_string($email_from)."\n";
  $email_message .= "Will join for dinner: ".clean_string($dinner)."\n";
  $email_message .= "Food preferences: ".clean_string($food)."\n";
?>

<?php

  $to = "petra_jud@hotmail.com";

  mail($to,$email_subject,$email_message);
?>