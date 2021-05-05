const table = document.querySelectorAll('.table');
const header = document.querySelectorAll('.header');

  
        for(const _header of header){
            _header.addEventListener('click', ()=>{
                _header.classList.toggle("active");
                //_header.classList.add("active");
                _header.style.display='block';
                //_header.style.table='table-row'
            })
        }
  
    

/*
$(document).ready(function() {
    //Fixing jQuery Click Events for the iPad
    var ua = navigator.userAgent,
      event = (ua.match(/iPad/i)) ? "touchstart" : "click";
    if ($('.table').length > 0) {
      $('.table .header').on(event, function() {
        $(this).toggleClass("active", "").nextUntil('.header').css('display', function(i, v) {
          return this.style.display === 'table-row' ? 'none' : 'table-row';
        });
      });
    }
  })
*/
