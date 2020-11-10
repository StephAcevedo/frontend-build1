window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#d2d2d7', '#C4D4DA'],
    connectParticles: true
  });

  $( "section.skills" ).fadeIn( "slow" );
  
  new TypeIt('#element', {
      strings: ["Hello, I'm Stephanie Acevedo", "I am a Front-end Web Developer."],
      speed: 50,
      breakLines: false,
      autoStart: true
  });

};

