document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]');
    // console.log(expandsMore);
    //[span.btn-expand-more]

    function expand() {
        const showContent = document.getElementById(this.dataset.target);
        console.log(showContent);
        // <div class="expandMoreContent expand-active1" id="showMoreContent">
        //<p>...</p></div>
        if (showContent.classList.contains('expand-active1')) {
            this.innerHTML=this.dataset.showtext
        } else {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active1')
    }

    expandsMore.forEach(expandMore => {
        expandMore.addEventListener("click", expand)
    })
   

})

// each time an element with the attribute expand-more is clicked on, we will invoke the function expand



    
// we tell the javascript we are looking an attribute using the brackets around: expand-More syntaxe:
// [expand-More]