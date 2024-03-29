// document.addEventListener('DOMContentLoaded', () => {
//     const expandsMore = document.querySelectorAll('[expand-more]')
//     console.log(expandsMore)
//     function expand() {
//         const showContent = document.getElementById(this.dataset.target)
//         if (showContent.classList.contains('expand-active')) {
//             this.innerHTML=this.dataset.showtext;
//         } else {
//             this.innerHTML=this.dataset.hidetext;
//         }
//         showContent.classList.toggle('expand-active')
//     }
//     expandsMore.forEach(expandMore => {
//         expandMore.addEventListener('click', expand)
//     })
    
// })
    
//we tell the javascript we are looking an attribute using bracket [expand-More]

document.addEventListener("DOMContentLoaded", () => {

const shows = document.querySelectorAll("[expand-more]")
// console.log(shows)
function showed()  {
    const targ = document.getElementById(this.dataset.target)
        console.log(targ)
        if (targ.classList.contains("expand-active")) {
            this.innerHTML = this.dataset.showtext;
        } else {
            this.innerHTML = this.dataset.hideText
        }
        targ.classList.toggle("expand-active")
}

    shows.forEach(show => { show.addEventListener('click', showed) })

})
