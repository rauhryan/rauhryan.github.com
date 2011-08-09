Simpleserve
===========

For quite some time now I've really wanted a code free way to turn my current directory into a static webserver. 

I've run into several occasions where I'm spiking out some javascript and ran into chrome ajax HTTP only policy. 

I tried out python's [SimpleHTTPServer](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) and found it **plainfully** slow and difficult to get install and working on Windows. Then I fell apon this nuget of awesome. I'm sorry I do not recall where I found this snippet it was late and buried in about 40 open chrome tabs from late night google searchs. 

 <script src="https://gist.github.com/1133398.js"> </script>

 It's pretty much exactly how I found it. Except I've tweeked the code a little bit to handle different OSs' `open` commands.

 So basically I've turned this little beauty into a ruby gem and now its totally awesome/tubular/radical man. 

 Teach me how to use it 
 ======================

 1. `gem install simpleserve
 2. `simpleserve

 Thats it... yep its that simple. No codes, no config, no apache, no IIS nothing nadda just one command. Feel free to shoot me some feedback, or [Fork Me](http://github.com/rauhryan/simpleserve)

 Enjoy

 -Ryan
