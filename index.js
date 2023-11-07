

const content = document.querySelector('.content') 
const author = document.querySelector('.author h4')
const context = document.querySelector('.context p')
const link = document.querySelector('.link')



fetch("https://api.quotable.io/random")

.then(response => response.json())
.then(data => {



    const more = document.querySelector('.m')

more.addEventListener("click", function(){
    
    author.textContent = data.author
    content.textContent = '❝' + data.author + '❞'
    context.textContent = data.tags

    

})



link.addEventListener('click', function(){

    const textToCopy = `${data.content}`
    navigator.clipboard.writeText(textToCopy)

    .then( () => {
        alert('succesfully copied to clipboard', textToCopy)
    })
    .catch( err => {
        alert('failed to cpy text', err)
    })

})

 
})


