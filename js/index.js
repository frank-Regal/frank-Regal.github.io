$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"none"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
 $('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})

// Video Carousel Control
$(document).ready(function() {
    const videos = document.querySelectorAll('.carousel-video');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-video');
    const nextBtn = document.getElementById('next-video');
    let currentVideoIndex = 0;
    let autoPlayInterval;
    
    // Initialize carousel
    function initCarousel() {
        console.log('Initializing video carousel with', videos.length, 'videos');
        
        // Start the first video
        if (videos.length > 0) {
            videos[0].play().catch(function(error) {
                console.log('Initial video play failed:', error);
            });
        }
        
        // Start auto-play
        startAutoPlay();
        
        // Add event listeners
        if (prevBtn) prevBtn.addEventListener('click', previousVideo);
        if (nextBtn) nextBtn.addEventListener('click', nextVideo);
        
        // Add dot click listeners
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToVideo(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                previousVideo();
            } else if (e.key === 'ArrowRight') {
                nextVideo();
            }
        });
        
        // Pause auto-play on hover
        const videoControls = document.getElementById('video-controls');
        if (videoControls) {
            videoControls.addEventListener('mouseenter', stopAutoPlay);
            videoControls.addEventListener('mouseleave', startAutoPlay);
        }
    }
    
    function showVideo(index) {
        // Hide all videos
        videos.forEach((video, i) => {
            video.classList.remove('active');
            if (i !== index) {
                video.pause();
            }
        });
        
        // Show current video
        if (videos[index]) {
            videos[index].classList.add('active');
            videos[index].play().catch(function(error) {
                console.log('Video play failed:', error);
            });
        }
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentVideoIndex = index;
    }
    
    function nextVideo() {
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(nextIndex);
        restartAutoPlay();
    }
    
    function previousVideo() {
        const prevIndex = currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
        showVideo(prevIndex);
        restartAutoPlay();
    }
    
    function goToVideo(index) {
        showVideo(index);
        restartAutoPlay();
    }
    
    function startAutoPlay() {
        stopAutoPlay(); // Clear any existing interval
        autoPlayInterval = setInterval(nextVideo, 8000); // Change video every 8 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    function restartAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Handle video loading errors
    videos.forEach((video, index) => {
        video.addEventListener('error', function(e) {
            console.error(`Video ${index} error:`, e);
            console.error('Video error details:', video.error);
        });
        
        video.addEventListener('loadstart', function() {
            console.log(`Video ${index} loading started`);
        });
        
        video.addEventListener('canplay', function() {
            console.log(`Video ${index} can start playing`);
        });
    });
    
    // Pause videos when page is not visible (saves battery)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            videos.forEach(video => video.pause());
            stopAutoPlay();
        } else {
            if (videos[currentVideoIndex]) {
                videos[currentVideoIndex].play().catch(function(err) {
                    console.log('Video play on visibility change failed:', err);
                });
            }
            startAutoPlay();
        }
    });
    
    // Initialize the carousel
    initCarousel();
    
    // Ensure videos play on user interaction (for autoplay restrictions)
    $(document).on('click touchstart', function() {
        videos.forEach(video => {
            video.play().catch(function(err) {
                console.log('Video play on interaction failed:', err);
            });
        });
    });
});

// Mobile hamburger menu functionality
$(document).ready(function() {
    const menubar = document.getElementById('menubar');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenu = document.getElementById('close-menu');
    
    if (menubar && mobileNav) {
        // Open mobile menu
        menubar.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
        
        // Close mobile menu
        if (closeMenu) {
            closeMenu.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto'; // Restore scrolling
            });
        }
        
        // Close menu when clicking on links
        const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-links a');
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close menu when clicking outside
        mobileNav.addEventListener('click', function(e) {
            if (e.target === mobileNav) {
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});