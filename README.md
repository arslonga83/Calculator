# Calculator

Another OdinProject piece that seemed impossible at first but came together surprisingly fast. The hardest part was coming up with a way to store the numbers until they were ready to be used. It was pretty easy to do single digits but then I had to rewrite most of the code when upgrading to bigger numbers....finally worked to use take the numbers directly from the display instead of storing them in two places at once. 
At first I had a separate id for every button, but figured there must be a better way. By grabbing all the numbers by class and using a forEach function I was able to cut out dozens of lines of code. 
The Emojis are just for fun and will definitely mess up any attempt at math, but they probably won't crash the computer. 
I added keydown event listeners to simulate all the button clicks - it does not fire the button.active border settings from css but otherwise the keyboard works the same as a mouse click.

