<?php	
	function sendOTP($email,$otp) {

        $to = $email;
        $subject = 'Secret OTP';
        $from = 'test@testmail.com';

        $headers = "From: $from";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $message = '<p><strong>Secrete OTP code:</strong></p><br/>';
        $message .= $otp;
        $message .= '<br/><br/>';

        if (mail($to, $subject, $message, $headers)) {
            return 'Main sent successfully.';
        } else {
            return 'Unable to send mail. Please try again.';
        }
	}
?>