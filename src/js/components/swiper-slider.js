var swiperBanner = new Swiper('.main-banner__container', {
  threshold: 20,
  loop: true,
  navigation: {
    nextEl: '.main-banner__button--next',
    prevEl: '.main-banner__button--prev',
  },
  breakpoints: {
    1250: {
      threshold: 0,
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: true,
    },
  },
});

var swiperFeatures = new Swiper('.main-features__container', {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* var swiperContacts = new Swiper('.contacts__swiper-container', {
  direction: 'vertical',
  slidesPerView: 4,
  mousewheel: true,
  sensitivity: 1000,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  touchReleaseOnEdges: true,
}); */

var swiperReviews = new Swiper('.reviews__container', {
  threshold: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    640: {
      centeredSlides: true,
      slidesPerView: 'auto',
    },
    960: {
      slidesPerView: 2,
    },
    1250: {
      threshold: 0,
      centeredSlides: true,
      slidesPerView: 3,
    },
  },
});

if ($(window).width() < 1250) {
  if (typeof swiperCatalog == 'undefined') {
    var swiperCatalog = new Swiper('.catalog__swiper', {
      slidesPerView: 'auto',
    });
  }
} else {
  if (typeof swiperCatalog != 'undefined') {
    swiperCatalog.destroy();
    swiperCatalog = undefined;

    $('.swiper-wrapper').removeAttr('style');
    $('.swiper-slide').removeAttr('style');
  }
}

if ($(window).width() < 1250) {
  if (typeof swiperCheckout == 'undefined') {
    var swiperCheckout = new Swiper('.checkout__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 'auto',
        },
        960: {
          slidesPerView: 2,
        },
        1250: {
          slidesPerView: 3,
        },
      },
    });
  }
} else {
  if (typeof swiperCheckout != 'undefined') {
    swiperCheckout.destroy();
    swiperCheckout = undefined;

    $('.swiper-wrapper').removeAttr('style');
    $('.swiper-slide').removeAttr('style');
  }
}

if ($(window).width() > 1250) {
  if (typeof swiperHeaderBottom == 'undefined') {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 20,
      slidesPerView: 5,
      threshold: 20,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'vertical',
      breakpoints: {
        640: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 8,
        }
      },
    });
  }
} else {
  if (typeof galleryThumbs != 'undefined') {
    galleryThumbs.destroy();
    galleryThumbs = undefined;
    $('.swiper-wrapper').removeAttr('style');
    $('.swiper-slide').removeAttr('style');
  }
}

var galleryTop = new Swiper('.gallery-top', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  effect: 'fade',
  thumbs: {
    swiper: galleryThumbs
  },
});

/* var swiperPopupMaps = new Swiper('.popup-maps__swiper-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  mousewheel: true,
  touchReleaseOnEdges: true,
  breakpoints: {
    1250: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      mousewheel: false,
    },
  },
});
UIkit.util.on('#popupMaps', 'show', function () {
  swiperPopupMaps.update();
}) */

var swiperProductReviews = new Swiper('.product__reviews-container', {
  direction: 'vertical',
  mousewheel: true,
  threshold: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    640: {
      centeredSlides: true,
      slidesPerView: 'auto',
      direction: 'horizontal',
      mousewheel: false,
    },
    960: {
      slidesPerView: 2,
      direction: 'horizontal',
      mousewheel: false,
    },
    1250: {
      centeredSlides: true,
      slidesPerView: 3,
      direction: 'horizontal',
      mousewheel: false,
    },
  },
});

$('body').on('click', '.product__reviews', function () {
  var swiperProductReviews = $('body').find('.product__reviews-container')[0].swiper;
  swiperProductReviews.update(true);
});

if ($(window).width() < 1250) {
  if (typeof swiperHeaderBottom == 'undefined') {
    var swiperHeaderBottom = new Swiper('.header__bottom-container', {
      breakpoints: {
        640: {
          spaceBetween: 10,
          slidesPerView: 'auto',
        },
        1250: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
      },
    });
  }
} else {
  if (typeof swiperHeaderBottom != 'undefined') {
    swiperHeaderBottom.destroy();
    swiperHeaderBottom = undefined;
    $('.swiper-wrapper').removeAttr('style');
    $('.swiper-slide').removeAttr('style');
  }
}

document.querySelectorAll(".swiper-products").forEach(function (slider, index) {
  slider.classList.add("swiper-products--" + index);
  $('body').on('click', '.header__menu-button', function () {
    var swiperProduct = $('body').find('.swiper-products--' + index)[0].swiper;
    UIkit.util.on('#menuMobile', 'show', function () {
      swiperProduct.update(true);
    });
  });
  window["swiper-products--" + index] = new Swiper(".swiper-products--" + index, {
    spaceBetween: 10,
    slidesPerView: 'auto',
  });
});


var swiperSeoReviews = new Swiper('.seo-msk__reviews-container', {
  slidesPerView: 3,
  spaceBetween: 15,
  autoplay: {
    delay: 15000,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: false,
    clickable: true,
  },
  breakpoints: {
    640: {
      centeredSlides: true,
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
});

var swiperDescription = new Swiper('.description__swiper', {
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('body').on('click', '.product__description', function () {
  var swiperProductReviews = $('body').find('.description__swiper')[0].swiper;
  swiperProductReviews.update(true);
});
