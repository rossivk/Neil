<?php

    $postData = json_decode(file_get_contents('php://input'), true);

    $name = $postData['name'];
    $email = $postData['email'];
    $message = $postData['message'];

    if ($name && $email && $message) {

        $mail_to_send_to = "neil.marks.71@googlemail.com";
        $from_email = "enquiry@HertEssexPlanning.com";

        // Send to the site owner
        $headers = "From: $from_email" . "\r\n" . "Reply-To: $email" . "\r\n" ;

        $a = mail($mail_to_send_to, 'CONTACT FORM', 
                "FORM INPUT DATA: \n 
                Name: {$name} \n 
                E-mail: {$email} \n 
                Message: \n {$message} \n 
                ", $headers);

        // Send to the client
        $headers2 = "From: $from_email" . "\r\n" . "Reply-To: $from_email" . "\r\n" ;
        $b = mail($email, 'CONTACT FORM', 
                "Hi, {$name}! \n 
                We have received your message and will get back to you as soon as possible! \n
                Kind regards, \n
                Neil Marks
                ", $headers2);

        // Return true to the FE
        echo json_encode(true);
        return;
    }

    // Return to the FE
    echo json_encode(false);
