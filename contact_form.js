var $j = jQuery.noConflict();
$j(document).ready(function(){  
$j("#submit").click(function(){
	var name = $j("#name").val();
	var email = $j("#email").val();
	var message = $j("#message").val();
	
		 //To empty previous error/success message.
		//checking for blank fields	
		
		
		// Returns successful data submission message when the entered information is stored in database.
		$j.post("contact_form.php",{ name1: name, email: email, message:message},
		
		   function(data) {
			   
			  
			   
				$j("#form")[0].reset();//To reset form fields on success
							
					});
				
		 
		});
});
