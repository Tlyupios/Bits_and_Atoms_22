//Code from this Website: https://web.dev/drag-and-drop/?gclid=Cj0KCQjwqPGUBhDwARIsANNwjV7kZXmAv7IGi1sqKAEJVa7ie6KZUCZV28KxYVUy7kwc2GUa9DksjU0aApH3EALw_wcB



document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;


    function handleDragStart(e) {
      this.style.opacity = '1';
      
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
      this.classList.remove('journeyimage1');
      this.classList.remove('journeyimage2');
      this.classList.remove('journeyimage3');
      this.classList.remove('journeyimage4');
      this.classList.remove('journeyimage5');





    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
      this.classList.remove('active');

    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';

      items.forEach(function (item) {
        item.classList.remove('over');

      });
    }

    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }

      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.classList.add('active');

      }
      if (this.getAttribute('data-position') === '1'){
      this.classList.add('journeyimage1');
      }

      if (this.getAttribute('data-position') === '2'){
        this.classList.add('journeyimage2');
        }

      if (this.getAttribute('data-position') === '3'){
        this.classList.add('journeyimage3');
        }
      
      if (this.getAttribute('data-position') === '4'){
        this.classList.add('journeyimage4');
        }

      if (this.getAttribute('data-position') === '5'){
        this.classList.add('journeyimage5');
        }
       
      // I tried everything we discussed, but didn't managed to find a solution...
      //this.style.background="url(img/Journey_2.JPG)";
      //document.getElementsByClassName('journeyimage1').style.background='url(img/Journey_2.JPG)';

      
      return false;
    }



    
    let items = document.querySelectorAll('.position5, .position4, .position3, .position2, .position1, .position0');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });