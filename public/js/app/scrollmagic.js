  //ScrollMagic
  $(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // loop through each .timeline element
    $('#home').each(function(){

      // build a scene
      var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.1,
        reverse: true,
        duration: '90%'
      })
      .setClassToggle('#index1 span', 'text-white') 
      // .addIndicators({
      //   name: 'scene',
      //   colorTrigger: 'yellow',
      //   colorStart: '#75C695',
      //   colorEnd: 'pink'
      // }) 
      .addTo(controller);

    });

          // loop through each .timeline element
          $('#2000').each(function(){

            // build a scene
            var ourScene = new ScrollMagic.Scene({
              triggerElement: this.children[0],
              triggerHook: 0.1,
              reverse: true,
              duration: '100%'
            })
            .setClassToggle('#index2 span', 'text-white') 
            // .addIndicators({
            //   name: 'scene',
            //   colorTrigger: 'yellow',
            //   colorStart: '#75C695',
            //   colorEnd: 'pink'
            // }) 
            .addTo(controller);
      
          });


      // loop through each .timeline element
      $('#footer').each(function(){

        // build a scene
        var ourScene = new ScrollMagic.Scene({
          triggerElement: this.children[0],
          triggerHook: 0.1,
          reverse: true,
          duration: '9%'
        })
        .setClassToggle('#index3 span', 'text-white') 
        // .addIndicators({
        //   name: 'scene',
        //   colorTrigger: 'yellow',
        //   colorStart: '#75C695',
        //   colorEnd: 'pink'
        // }) 
        .addTo(controller);
  
      });


  });

