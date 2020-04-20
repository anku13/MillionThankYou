/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

//Function that creates 10px*10px image tiles
function addTileItem() {
  //Shaping DOM structure
  for (let i = 0; i < 1000; i++) {
    let tileEl = document.createElement('div');
    tileEl.classList.add('tile');
    let imgEl = document.createElement('img');
    imgEl.classList.add('plus');
    imgEl.setAttribute('src', './images/1.jpg');
    tileEl.appendChild(imgEl);
    let $boardEl = document.getElementsByClassName('board')[0];
    $boardEl.appendChild(tileEl);

    // Event listener that dispalys Thank you modal details upon clicking on image tile
    tileEl.addEventListener('click', () => {
      showDetails();
    });
  }
}

// Function that displays modal with thank you details
function showDetails() {
  (() => {
    let $modalContainer = document.querySelector('#modal-container');

    function showModal(text) {
      // Clear all existing modal content
      $modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      //Add new modal content
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', './images/1.jpg');

      let contentEl = document.createElement('p');
      contentEl.innerText = text;

      let closeBtnEl = document.createElement('button');
      closeBtnEl.classList.add('modal-close');
      closeBtnEl.innerText = 'Back';
      closeBtnEl.addEventListener('click', hideModal);

      modal.appendChild(imgEl);
      modal.appendChild(contentEl);
      modal.appendChild(closeBtnEl);
      $modalContainer.appendChild(modal);
      $modalContainer.classList.add('is-visible');
    }

    showModal('test', 'text');

    function hideModal() {
      $modalContainer.classList.remove('is-visible');
    }

    //Close modal by pressing ESC on the keyboard
    window.addEventListener('keydown', e => {
      if (
        e.key === 'Escape' &&
        $modalContainer.classList.contains('is-visible')
      ) {
        hideModal();
      }
    });

    $modalContainer.addEventListener('click', e => {
      let target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });
  })();
}

addTileItem();