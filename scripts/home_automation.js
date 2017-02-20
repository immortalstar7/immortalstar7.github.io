// JavaScript Document
window.onload=function() {
		//var a = document.getElementById("svgObject");
		//var svgDoc = a.contentDocument;
	// declare vars
	 bedroom1_svg = document.getElementById("bedroom1");
	 bedroom2_svg = document.getElementById("bedroom2");
	 livingroom_svg = document.getElementById("livingroom");
	 bathroom_svg=document.getElementById("bathroom");
	 dining_svg = document.getElementById("dining");
	 kitchen_svg = document.getElementById("kitchen");
	 hall_svg = document.getElementById("hall");
	 stairs_svg = document.getElementById("stairs");
	
	 temp = $('#temp').val();
	var bedroom1_lightson= new Boolean();
	var bedroom1_curtainsopen= new Boolean();
	var bedroom2_lightson= new Boolean();
	var bedroom2_curtainsopen= new Boolean();
	var bedroom2_curtainsopen_1= new Boolean();
	
	var livingroom_lightson= new Boolean();
	var livingroom_curtainsopen= new Boolean();
	
	var dining_lightson= new Boolean();
	var dining_curtainsopen= new Boolean();
	
	var kitchen_lightson= new Boolean();
	var kitchen_curtainsopen= new Boolean();
	var bathroom_lightson= new Boolean();
	var bathroom_curtainsopen= new Boolean();
	
	var hall_lightson= new Boolean();
	var hall_curtainsopen= new Boolean();
	
	var stairs_lightson= new Boolean();
	var stairs_curtainsopen= new Boolean();
	$('input[type="checkbox"]').click(function(){
automation();	
});
automation();	       
};

function automation()
{
		    

  if($('#bedroom1_lights').is(":checked")) {
		bedroom1_lightson=true;
	} else {
		bedroom1_lightson=false;
	} ;
	if($('#bedroom1_curtains').is(":checked")) {
		bedroom1_curtainsopen=false;
	} else {
		bedroom1_curtainsopen=true;
	};
	
	if($('#bedroom2_lights').is(":checked")) {
		bedroom2_lightson=true;
		
	} else {
		bedroom2_lightson=false;
		
	};
	if($('#bedroom2_curtains').is(":checked")) {
		bedroom2_curtainsopen=false;
	} else {
		bedroom2_curtainsopen=true;
	};
	if($('#bedroom2_curtains_1').is(":checked")) {
		bedroom2_curtainsopen_1=false;
	} else {
		bedroom2_curtainsopen_1=true;
	};
	
	 if($('#livingroom_lights').is(":checked")) {
		livingroom_lightson=true;
	} else {
		livingroom_lightson=false;
	}; 
	if($('#livingroom_curtains').is(":checked")) {
		livingroom_curtainsopen=false;
	} else {
		livingroom_curtainsopen=true;
	};
	
	
	 if($('#kitchen_lights').is(":checked")) {
		kitchen_lightson=true;
	} else {
		kitchen_lightson=false;
	}
	if($('#kitchen_curtains').is(":checked")) {
		kitchen_curtainsopen=false;
	} else {
		kitchen_curtainsopen=true;
	};
	
	 if($('#dining_lights').is(":checked")) {
		dining_lightson=true;
	} else {
		dining_lightson=false;
	};
	if($('#dining_curtains').is(":checked")) {
		dining_curtainsopen=false;
	} else {
		dining_curtainsopen=true;
	};
	
		 if($('#bathroom_lights').is(":checked")) {
		bathroom_lightson=true;
	} else {
		bathroom_lightson=false;
	}; 
	if($('#bathroom_curtains').is(":checked")) {
		bathroom_curtainsopen=false;
	} else {
		bathroom_curtainsopen=true;
	};
	
	 if($('#hall_lights').is(":checked")) {
		hall_lightson=true;
	} else {
		hall_lightson=false;
	} ;
	if($('#hall_curtains').is(":checked")) {
		hall_curtainsopen=false;
	} else {
		hall_curtainsopen=true;
	};
	
	 if($('#stairs_lights').is(":checked")) {
		stairs_lightson=true;
	} else {
		stairs_lightson=false;
	} ;
	if($('#stairs_curtains').is(":checked")) {
		stairs_curtainsopen=false;
	} else {
		stairs_curtainsopen=true;
	};
	
	// indivisual situations
	
	//bedroom #1
	if(!bedroom1_lightson && !bedroom1_curtainsopen)
	{
		
		bedroom1_svg.setAttribute("fill","#2F50EA");
	}
	else  if(!bedroom1_lightson && bedroom1_curtainsopen)
	{
		bedroom1_svg.setAttribute("fill","#4764ED");
	}
	else if(bedroom1_lightson && !bedroom1_curtainsopen)
	{
		bedroom1_svg.setAttribute("fill","#637BEF");
	}
	else
	{
		bedroom1_svg.setAttribute("fill","#7C91F1");
	}

	//bedroom #2
if(!bedroom2_lightson && !bedroom2_curtainsopen && !bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#2DB200");
	}
	else if (!bedroom2_lightson && !bedroom2_curtainsopen && bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#34CE00");
	}
	else if (!bedroom2_lightson && bedroom2_curtainsopen && !bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#3AE800");
	}
		else if (!bedroom2_lightson && bedroom2_curtainsopen && bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#3FFB00");
	}
	
	
	
	if(bedroom2_lightson && !bedroom2_curtainsopen && !bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#7C91F1");
	}
	else if (bedroom2_lightson && !bedroom2_curtainsopen && bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#52FF17");
	}
	else if (bedroom2_lightson && bedroom2_curtainsopen && !bedroom2_curtainsopen_1)
	{
		
		bedroom2_svg.setAttribute("fill","#68FF35");
	}
		else 
	{
		
		bedroom2_svg.setAttribute("fill","#72FF42");
	}
	
	//livingroom
	if(!livingroom_lightson && !livingroom_curtainsopen)
	{
		
		livingroom_svg.setAttribute("fill","#FF4000");
	}
	else  if(!livingroom_lightson && livingroom_curtainsopen)
	{
		livingroom_svg.setAttribute("fill","#FF531A");
	}
	else if(livingroom_lightson && !livingroom_curtainsopen)
	{
		livingroom_svg.setAttribute("fill","#FF6937");
	}
	else
	{
		livingroom_svg.setAttribute("fill","#FF855B");
	}
//bathroom
if(!bathroom_lightson && !bathroom_curtainsopen)
	{
		
		bathroom_svg.setAttribute("fill","#0059B2");
	}
	else  if(!bathroom_lightson && bathroom_curtainsopen)
	{
		bathroom_svg.setAttribute("fill","#006BD7");
	}
	else if(bathroom_lightson && !bathroom_curtainsopen)
	{
		bathroom_svg.setAttribute("fill","#0079F2");
	}
	else
	{
		bathroom_svg.setAttribute("fill","#208FFF");
	}
//kitchen

if(!kitchen_lightson && !kitchen_curtainsopen)
	{
		
		kitchen_svg.setAttribute("fill","#8000FF");
	}
	else  if(!kitchen_lightson && kitchen_curtainsopen)
	{
		kitchen_svg.setAttribute("fill","#8B17FF");
	}
	else if(kitchen_lightson && !kitchen_curtainsopen)
	{
		kitchen_svg.setAttribute("fill","#9A35FF");
	}
	else
	{
		kitchen_svg.setAttribute("fill","#A953FF");
	}
	
	//hall
	
	if(!hall_lightson && !hall_curtainsopen)
	{
		
		hall_svg.setAttribute("fill","#FF7373");
	}
	else  if(!hall_lightson && hall_curtainsopen)
	{
		hall_svg.setAttribute("fill","#FF9D9D");
	}
	else if(hall_lightson && !hall_curtainsopen)
	{
		hall_svg.setAttribute("fill","#FFB9B9");
	}
	else
	{
		hall_svg.setAttribute("fill","#FFCCCC");
	}


//stairs

if(!stairs_lightson && !stairs_curtainsopen)
	{
		
		stairs_svg.setAttribute("fill","#00B2B2");
	}
	else  if(!stairs_lightson && stairs_curtainsopen)
	{
		stairs_svg.setAttribute("fill","#00CCCC");
	}
	else if(stairs_lightson && !stairs_curtainsopen)
	{
		stairs_svg.setAttribute("fill","#00ECEC");
	}
	else
	{
		stairs_svg.setAttribute("fill","#17FFFF");
	}
//dining
if(!dining_lightson && !dining_curtainsopen)
	{
		
		dining_svg.setAttribute("fill","#2F50EA");
	}
	else  if(!dining_lightson && dining_curtainsopen)
	{
		dining_svg.setAttribute("fill","#4764ED");
	}
	else if(dining_lightson && !dining_curtainsopen)
	{
		dining_svg.setAttribute("fill","#637BEF");
	}
	else
	{
		dining_svg.setAttribute("fill","#7C91F1");
	}
  // POST data to server and recieve response
  /*
 $.post( 
                  "test.php",
                  {cpanel:JSON.stringify ({
					  "temp":temp,
					  "bedroom1":{"lightson" : bedroom1_lightson , "curtainclosed" : !bedroom1_curtainsopen },
				  "bedroom2":{"lightson" : bedroom2_lightson , "curtainclosed" : !bedroom2_curtainsopen, "secondcurtainclosed": !bedroom2_curtainsopen_1 },
				  "livingroom":{"lightson" : livingroom_lightson , "curtainclosed" : !livingroom_curtainsopen },
				  "bathroom":{"lightson" : bathroom_lightson , "curtainclosed" : !bathroom_curtainsopen },
				  "kitchen":{"lightson" : kitchen_lightson , "curtainclosed" : !kitchen_curtainsopen },
				   "hall":{"lightson" : hall_lightson , "curtainclosed" : !hall_curtainsopen },
				  "stairs":{"lightson" : stairs_lightson , "curtainclosed" : !stairs_curtainsopen },
				  
				  })},
                  function(data) {
                     $('#stage').html(data);
					 alert(data);
                  }
               );
			    
	*/
};
