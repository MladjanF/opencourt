<?php
$action=$_REQUEST['action'];
if ($action=="contact")    
    {
    } 
    else               
        {
        $name=$_REQUEST['name'];
        $email=$_REQUEST['email'];
        $message=$_REQUEST['message'];
        if (($name=="")||($email=="")||($message==""))
            {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
          }
        else{		
          $from="From: $name<$email>\r\nReturn-path: $email";
            $subject="Message sent using your contact form";
        mail("mladjanf@gmail.com", $subject, $message, $from);
        echo "Email sent!";
          }
        }  
    ?>