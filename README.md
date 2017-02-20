<p>
 A JavaScript application simulating house automation: pressing a button on a control panel would visually turn on a light, change the temperature or close the curtains. Some constraints: 
</p>
<ul>
<li>the application must use jQuery.</li>
<li>the components must have HTTP based "server" interaction (use a static file for simplicity, data persistence is not required). For example, the heating component retrieves the current temperature from the server and also sends the desired one back to the server.</li>
<li>the solution has to be extensible and documented, so that we can develop our own components that react to events.</li>
</ul>
<p>The application will be executed on a plain HTTP server with no possibility to run code server side and is being viewed in 2 major browsers of your choice.</p>

<p>A home automation panel is created here by me. The goal for creating this automation panel is creating an automation system using static assets and visual effects. The current implementation is done in jQuery and some asynchronous calls are made for server interaction. 
The layout for home is a typical home layout which is converted in to SVG for providing the visual lighting animations.</p>

<h2>Setting up the Web Page</h2>
<p>
The web page markup isn’t hugely involved.  It has just a few necessary pieces.
</p>
<ol>
<h2>Feature Type Data Types</h2>
<p>There are currently two supported data types: integer and boolean. </p>
<pre>
{  
      "temp":temp,
      "bedroom1":{  
         "lightson":bedroom1_lightson,
         "curtainclosed":!bedroom1_curtainsopen
      },
      "bedroom2":{  
         "lightson":bedroom2_lightson,
         "curtainclosed":!bedroom2_curtainsopen,
         "secondcurtainclosed":!bedroom2_curtainsopen_1
      },
      "livingroom":{  
         "lightson":livingroom_lightson,
         "curtainclosed":!livingroom_curtainsopen
      },
      "bathroom":{  
         "lightson":bathroom_lightson,
         "curtainclosed":!bathroom_curtainsopen
      },
      "kitchen":{  
         "lightson":kitchen_lightson,
         "curtainclosed":!kitchen_curtainsopen
      },
      "hall":{  
         "lightson":hall_lightson,
         "curtainclosed":!hall_curtainsopen
      },
      "stairs":{  
         "lightson":stairs_lightson,
         "curtainclosed":!stairs_curtainsopen
      }
</pre>
<h2>Feature Types</h2>
<p>There are currently 3 supported feature types: lights, curtains, and temperature.  To add another one, add something to the “features” attribute of your home object.
</p>
<p>
All feature objects should have a name and a data type.  The other attributes depend on your data type.
</p>
<h3>Boolean Type Features</h3>
<p>
A Boolean needs a “true” value and a “false” value.  And, the true & false opacity changes for controlling the SVG effect.
</p>

<h2>The SVG home map graphic</h2>
<pre>
You can use just about any SVG home graphic; the important thing to remember is that each room needs its own ID for animation, and each room ID needs to be labeled in the HOME JSON file.
</pre>

Reference:
The inspiration for the project is taken from Home Automation by Mary Shaw:
https://github.com/marybeshaw/Just-Another-Automated-Home
