<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'samik.ytd@gmail.com'; 
    $mail->Password = 'uiznfgcsiqzovyzb'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';

    $mail->setFrom('samik.ytd@gmail.com'); 
    $mail->addAddress('samik.ytd@gmail.com'); 

    $mail->isHTML(true);
    $mail->Subject = "Subject";
    $mail->Body = "<h3>Name : $name <br>Email: $email <br>Message : $message</h3>";

    $mail->send();
    $alert = '<div class="alert alert-success">
    <span>Message Sent Successfully</span>
  </div>';

  } catch (Exception $e){
    $alert = '<div class="alert alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>
      