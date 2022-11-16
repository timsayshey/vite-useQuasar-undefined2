var goLazyLoad = function() {
  var options = {
    rootMargin: '0px',
    threshold: 0.1
  }
  var allTheLazyImages = $('.lazy-load');
  var observer;
  if('IntersectionObserver' in window) {
    observer = new IntersectionObserver(lazyLoader, options);
    // select all our image which we want to have lazy loaded
    allTheLazyImages.each(function(_, image) {
      observer.observe(image);
    });
  } else {
    allTheLazyImages.each(function(_, image) {
      lazyLoadImage(image); // if it is not supported, load all
    });
  }
  function lazyLoader(entries) {
    entries.forEach(function(entry) {
      // does the viewport hit the current image
      if (entry.intersectionRatio > 0) {
        lazyLoadImage(entry.target);
      }
    });
  }
  function lazyLoadImage(observedImage) {
    var img = $(observedImage)
    // img.removeClass('lazy-load');
    // Load image
    if(img.attr('rel')) {
      img.attr('style', img.attr('rel'));
      img.attr('rel', '');
    }
    if('IntersectionObserver' in window) {
      // now that the image has bee renderes, we don't need to observe it anymore
      // observer.unobserve(observedImage);
    }
  }
}
try {
  goLazyLoad();
} catch(e) {
  console.error(e)
}