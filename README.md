# firstshoppingcart
creating a simple shopping cart

Issues/Notes:
1.  I spent a lot of time on the visual aspect of this site.  Safest aspect I suppose.  
In another file(yogastorefront-I'll provide link), I set up SASS and Foundation.  I got lost
in the possiblities of Foundation.  I really want to dig deep into that!!!  So I watched
a tutorial on introduction to the grid here:

http://foundation.zurb.com/learn/introduction-to-the-foundation-grid.html
http://foundation.zurb.com/forum/posts/24690-new-article-5-ways-to-use-zurb-foundation

I found a great series on building a site up with Zurb:
https://www.youtube.com/watch?v=WlqTTBul7ik

I got really excited by Emmet, however I realized after conversation with you
that the end result was really bloated html.  I did appreciate how it layed out the 
grid and I could see using it as a reference if I feel lost.

2.  I really wanted to dig into building out a top-bar for my store with a drop down menu
just because.  I found a lot of tutorials to follow including:
http://zurb.com/building-blocks/f6-top-bar
http://foundation.zurb.com/sites/docs/v/5.5.3/components/topbar.html#clickable

I'm still not entirely clear on whether the stuff I find in the tutorial for Foundation 5
is still relevant for Foundation 6?  So I started to get a little lost in the differences
and decided to focus on the Javascript.  I realized there are a lot of really useful elements
and attributes when building out the bar:  data-options, data-top-bar-role, contain-to-grid,
$top-bar-sticky(scss)....

I also realized that I needed to upload the js file for top-bar...I got really frustrated
building out toggle menus and they didn't work!  Duh...realized I was missing this:
    <script src="js/foundation/foundation.js"></script>
    <script src="js/foundation/foundation.topbar.js"></script>

3. I need work with good old vanilla JavaScript.  I found this AWESOME tutorial about setting
up a shopping cart.  It was so great to go through the work flow.  This person really
paid a lot of attention to best practices, how to console.log effectively, and testing.
I really loved this....Took me most of my day Sunday to work through the first half.  and
the shopping cart functions are all Javascript.  

I decided to teach myself JQuery.  I know that there is a purpose to your approach but
I couldn't find help.  The anxiety of not being able to access the right info is frustrating
and I know I need better skills at using plain vanilla JavaScript.  I reread the textbook
and watched this tutorial:
https://www.youtube.com/watch?v=zPHerhks2Vg

But rather than continue with a blank screen I decided to follow some tutorials and teach it to myself since a lot of tutorials
online seem to use it.  

I followed these tutorials on how to install & to learn some of the syntax.  I couldn't figure
out how to make the CDN link work.  I think I was conflicting with what may have already beeon
established with my Foundation upload?  I spent some time trying to play with script placement
and finally decided to find a tutorial.  I saw that there may have been some steps to serve
up the local version of JQuery?  I followed the upload file method.  
I'm sure this causes bloat.  I'll ask you about it later.  I used this for install and syntax:
https://www.youtube.com/watch?v=4XO3JkKDr24 
https://www.youtube.com/watch?v=QpepYlxPJkQ

4.  It may seem that watching a tutorial is easy.  I actually judged myself at first.  BUT DAMN.
I have to say I have learned a lot about catching my mistakes.  Because I'm sitting here
following the code and then OOPS.  It's not working.  So then I'm spending time using my console to inspect
and then, in many cases, having to rewatch the tutorial segment only to find that I didn't
mark a class item with the appropriate period before the name.  On the upside, it is 
awesome to rewatch the explanations because they seem to stick better.

5.  WHY IS ADDING THE VALUE OF TWO FUNCTIONS SO HARD????  I basically tried to create a
function that would add my tax and total.  I was so pleased to figure out the tax function
I thought this would be a cake walk.  I tried a simple function that mirrored the others, wher
I added the two functions by name.  Then I did some research and tried these two variations:
// function add() {
    // let sum = 0;
    // $(".add").each(function() {   
    //     sum += +this.value;
    // });
    // return sum; 

    // function finalTotalCart(a, b) {
    //     let totalcost = 0;
    //     let a = totalTaxCart();
    //     let b = totalCostCart();
    //     totalcost = add(a + b);
    // }
    //     console.log(totalcost);

    Nothing was working.  Somehow I'm not accessing the value of the functions.  
    I did try calling the two functions for tax and subtotal before and in my function.

6.  In the yogastorefront repo -->  I wanted to use svg images and so I ended up 
learning about Modernizer, which I did install.  I used svg images and replaced
them with png images.  But I could never get the images (either form) to look
good or be adequately responsive.  

7.  I stopped using yogastorefront repo because I couldn't figure out JQuery
install with foundation.  It didn't work.  Also, the whole repo, while fun to 
play with foundation layout, became a mess.  I did include it though so you
could see that I was working, researching, etc over break.

8.  I started playing with some simple CSS to style the cart, mainly for my eyes.
However, somehow I've messed up my code?  So maybe take the link to my style sheet
out to see what I really was working with through most of my project.

9.  I watched 24 of the 34 videos for the shopping cart tutorial.  I took a lot
of notes (both in yogastorefront and firstshoppingcart).  It helps me to be
very active with this stuff.  I tell my students all the time that reading isn't
a poolside activity necessarily...you have to work it, rework it in your head.
Coding is very similiar.


