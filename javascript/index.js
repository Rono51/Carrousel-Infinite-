//Array images for folder /images
const imagesCarrusel = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg']
const points = document.querySelectorAll('.points')
const carrusel = document.querySelector('.carrusel-img')

let actualIndex = 3;

points.forEach((cadaPoint, index)=>{
    points[index].addEventListener('click',()=>{
        if(actualIndex !== index){
            carrusel.src = '/images/' + imagesCarrusel[index]
            actualIndex = index
        }

        points.forEach((cadaPoint)=>{
            cadaPoint.classList.remove('active')
    
        })
        points[actualIndex].classList.add('active')

    })

})

const buttonLeft = document.querySelector('.arrow-left')
const buttonRight = document.querySelector('.arrow-right')

buttonLeft.addEventListener('click',()=>{  
    if(actualIndex == 0){
        actualIndex = 7
        
    }
    actualIndex--
    carrusel.src = '/images/' + imagesCarrusel[actualIndex]
    console.log(actualIndex)

    points.forEach((cadaPoint)=>{
        cadaPoint.classList.remove('active')

    })
    points[actualIndex].classList.add('active')

})



buttonRight.addEventListener('click',()=>{
    if(actualIndex == 6){
        actualIndex = 0 - 1
    }
    actualIndex++
    carrusel.src = '/images/' + imagesCarrusel[actualIndex]

    points.forEach((cadaPoint)=>{
        cadaPoint.classList.remove('active')

    })
    points[actualIndex].classList.add('active')
})

setInterval(() => {
    if(actualIndex == 6){
        actualIndex = 0 - 1
    }
    actualIndex++
    carrusel.src = '/images/' + imagesCarrusel[actualIndex]
    points.forEach((cadaPoint)=>{
        cadaPoint.classList.remove('active')

    })
    points[actualIndex].classList.add('active')
}, 4000);

