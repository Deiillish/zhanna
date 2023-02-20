let images =["ph10.jpg","ph17.jpg","ph4.jpg", "ph2.jpg", "ph3.jpg", "ph5.jpg", "ph6.jpg", "ph7.jpg", "ph8.jpg", "ph9.jpg", "ph11.jpg", "ph12.jpg", "ph13.jpg", "ph14.jpg", "ph15.jpg", "ph16.jpg", "ph18.jpg", "ph19.jpg", "ph20.jpg", "ph21.jpg", "ph22.jpg", "ph23.jpg", "ph24.jpg", "ph25.jpg", "ph1.jpg",  "ph26.jpg", ]


setInterval(()=>{
    var windowInnerWidth = window.innerWidth
    footer.style.width= windowInnerWidth+'px'
}, 200)

var i =0
slider.style.backgroundImage='url(img/'+images[0]+')'
const intervalID = setInterval(function(){
    slider.style.backgroundImage='url(img/'+images[i]+')'
    i++
    if (i==images.length){
        i=0
    }
}, 3000)
DescTextLink.addEventListener('mouseover', ()=>{
    DescTextLink.style.color='rgb(82, 82, 82)'
})
DescTextLink.addEventListener('mouseout', ()=>{
    DescTextLink.style.color='black'
})
madeby.addEventListener('mouseover', ()=>{
    madeby.style.color='black'
})
madeby.addEventListener('mouseout', ()=>{
    madeby.style.color='rgb(82,82,82)'
})
