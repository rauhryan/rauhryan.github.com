---
layout: post
title: How to run the StoryTeller test for FubuMVC
categories: [fubumvc]

---

This post is for my own purposes as well as informative for others. I've ran into a few snags getting up and running with a fresh pull of the FubuMVC source code on Github. Most of the issues I ran into were environment based and not very easy to figure out sometimes.

## Setting up IIS

You will need IIS setup correctly in order to get all the tests to run. 

First thing you want to do is get your AppPool set up correctly.  Find the AppPool that your (default) port 80 site is running on and go into the advanced settings. 
	
	* Set the .NET Framework Version to v.4.0
	* Set the Identity to NetworkService
	* Make sure Managed Pipelinde Mode is set to Integrated

Next you're gonna want to create a few virtual applications under your default website.

![fubu-testing](/images/posts/fubumvc/001.png)
![fubu-testing](/images/posts/fubumvc/002.png)

So now you *should* be all set to rock and roll. 

## This is very important

You will need to run the rake command in a windows command line instance running *AS ADMINSTRATOR* It just refuses to work unless you open the command window as an adminstrator.

Once you've done that you should be able to run ~/> rake storyteller

Thats it for now. I hope it works out for you.   
