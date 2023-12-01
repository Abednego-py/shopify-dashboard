// Toggle set Up guide

let dropdown = document.getElementsByClassName('toggle-up')[0];
let dropdown2 = document.getElementsByClassName('toggle-down')[0];

dropdown.onclick = () => {
    let elements =  document.getElementsByClassName('items-cont')
    let elementsArray = Array.from(elements)
    elementsArray.slice(0, 5).forEach(function(element) {
        element.style.display = 'none';
        element.setAttribute('aria-hidden', 'true')
    })
    dropdown.style.display = 'none'
    dropdown2.style.display = 'block'

    let toggleCont = document.querySelector('#toggle-cont')
    toggleCont.setAttribute('aria-expanded', 'false')
};



dropdown2.onclick = () => {
  let elements =  document.getElementsByClassName('items-cont')
  let elementsArray = Array.from(elements)
  elementsArray.slice(0, 5).forEach(function(element) {
    element.style.display = 'block'
    element.setAttribute('aria-hidden', 'false')
})
    dropdown2.style.display = 'none'
    dropdown.style.display = 'block'

    let toggleCont = document.querySelector('#toggle-cont');
    toggleCont.setAttribute('aria-expanded', 'true');
};

// Main items


function showItemBody(key){
   document.getElementsByClassName('item-content')[key].style.display = 'flex'
   document.getElementsByClassName('item-content')[key].getAttribute('aria-hidden', 'false')
   document.getElementsByClassName('items-cont')[key].style.backgroundColor = '#F3F3F3'

   let clickedItem = document.getElementsByClassName('items')[key].nextElementSibling;
   let otherItemContent = document.querySelectorAll('.item-content')
   let items = document.querySelectorAll('.items-cont')
   
   otherItemContent.forEach((elem) => {
    if (clickedItem !== elem){
        elem.style.display = 'none'
    }
   })

   items.forEach((elem) => {
    if (clickedItem.parentElement !== elem){
        elem.style.backgroundColor = '#fff'
    }
   })

}

// cancel header

let cancel = document.getElementById('cancel')

cancel.onclick = () => {
    document.getElementsByClassName('section-header')[0].style.display = 'none'
    document.getElementsByClassName('placeholder')[0].style.display = 'block'
}

// tracking progress bar
let count = document.getElementById('count')
let progressBar = document.getElementById('myProgressBar')

const createCounter = () => {
    let countTracker = 0

    return {
      getCount: () => countTracker,
      increment: () => {
        countTracker++;
      },
      decrement: () => {
        countTracker--;
      },
      reset: () => {
        countTracker = 0;
      }
    }
  }

  const counter = createCounter()
  count.innerHTML = counter.getCount().toString()


// Checking items
let img1 = document.getElementsByClassName('img-1')
let img2 = document.getElementsByClassName('img-2')
let img3 = document.getElementsByClassName('img-3')
let img4 = document.getElementsByClassName('img-4')
let img5 = document.getElementsByClassName('img-5')
let img6 = document.getElementsByClassName('img-6')
let imgContainer = document.getElementsByClassName('img-cont')



function handleChange(key){
        img1[key].style.display = 'none'
        img4[key].style.display = 'none'
        img2[key].style.display = 'block'
        
        setTimeout(()=> {
            img2[key].style.display = 'none'
            img5[key].style.display = 'block'
        }, 200)
    
        setTimeout(() => {
            img5[key].style.display = 'none'
            img6[key].style.display = 'block'
        }, 400)
    
        setTimeout(() => {
            img6[key].style.display = 'none'
            img3[key].style.display = 'block'
        }, 500)
    
        counter.increment()
        count.innerHTML = counter.getCount().toString()
        handleProgressBar(counter.getCount())

        imgContainer[key].classList.add('checked')
}

function reverseChange(key){
    img3[key].style.display = 'none'
    img2[key].style.display = 'block'
    setTimeout(() => {
        img2[key].style.display = 'none'
        img1[key].style.display = 'flex'
        img1[key].style.zIndex = '2'

    }, 300)

    if (counter.getCount() > 0){
    counter.decrement()
    count.innerHTML = counter.getCount().toString()
    handleProgressBar(counter.getCount())
    }
    imgContainer[key].classList.remove('checked')
}

function handleCheck(key){
    if(!imgContainer[key].classList.contains('checked')){
        handleChange(key)
        imgContainer[key].setAttribute('aria-label', `Step ${key} completed, uncheck button for step ${key}`)
    } 
    else {
        reverseChange(key)
        imgContainer[key].setAttribute('aria-label', `check button for step ${key}`)
    }
}

function handleProgressBar(count){
    if(count == 1){
        progressBar.style.width = '20%'
    }
    else if(count == 2){
        progressBar.style.width = '40%'
    }
    else if(count == 3){
        progressBar.style.width = '60%'
    }
    else if(count == 4){
        progressBar.style.width = '80%'
    }
    else if (count == 5){
        progressBar.style.width = '100%'
    }
    else {
        progressBar.style.width = '0%'
    }
}


// alert-bell

let alertBell = document.getElementsByClassName('image-cont')[0]
let alert = document.getElementsByClassName('alert')[0]
let profileModal = document.getElementsByClassName('profile-modal')[0]
let profileCont = document.getElementsByClassName('profile-cont')[0]
let profAbbr = document.getElementsByClassName('prof-mobile')[0]


alertBell.onclick = () => {
    
    alert.classList.toggle('active')
    if(!profileModal.classList.contains('active')){
        profileModal.classList.toggle('active')
    }
    let imgCont = document.querySelector('#image-cont')

    if(!alert.classList.contains('active')){
        imgCont.setAttribute('aria-expanded', 'false')
        imgCont.setAttribute('aria-hidden', 'false')
    }
    else {
        imgCont.setAttribute('aria-expanded', 'true')
        imgCont.setAttribute('aria-hidden', 'true')
    }
}
// profile modal 

profileCont.onclick = () => {

    profileModal.classList.toggle('active')

    if(!alert.classList.contains('active')){
        alert.classList.toggle('active')
    }

    if(!profileModal.classList.contains('active')){
        profileCont.setAttribute('aria-expanded', 'false')
        profileModal.setAttribute('aria-hidden', 'false')
        profileCont.focus()
    }
    else {
        profileCont.setAttribute('aria-expanded', 'true')
        profileModal.setAttribute('aria-hidden', 'true')
    }
}

profAbbr.onclick = () => {
    profileModal.classList.toggle('active')
    if(!alert.classList.contains('active')){
        alert.classList.toggle('active')
    }

    const isExpanded = profAbbr.attributes['aria-expanded'].value

    if(isExpanded){
        profAbbr.ariaExpanded = false
    }
    else {
        profAbbr.ariaExpanded = true
    }

    if(!profileModal.classList.contains('active')){
        profAbbr.setAttribute('aria-expanded', 'false')
        profAbbr.focus()
    }
    else {
        profAbbr.setAttribute('aria-expanded', 'true')
    }
}

//

function navigateTo(){
    window.location.href = 'https://shopify.com/pricing'
}

// Keyboard navigation
//Tab and Shift Tab works fine for keyboard navigation but this is an implementation I tried out.

let keyVal = 0
let checkCompleted = false


let focusableElements = document.querySelectorAll('button, .logo ,.toggle-cont, .toggle-up, .toggle-down, input, #profile-cont, #image-cont, #cancel, .items, .img-cont, .prof-abbrv')

let menuItemsElements = document.querySelectorAll('.menu-items')


let currentFocusIndex = 0
let menuItemFocusIndex = 0

function updateMenuFocus(){
    menuItemsElements.forEach(function(element, i) {

        if (i === menuItemFocusIndex) {
          element.classList.add('focus');
        } else {
          element.classList.remove('focus');
        }
      });
}


  function updateFocus() {
  focusableElements.forEach(function(element, i) {

    if (i === currentFocusIndex) {
      element.classList.add('focus');
    } else {
      element.classList.remove('focus');
    }
  });

}



document.onkeydown = (e) => {

    if (e.key === 'ArrowRight') {
        currentFocusIndex = (currentFocusIndex + 1) % focusableElements.length
        updateFocus()
    } else if (e.key === 'ArrowLeft') {
        currentFocusIndex = (currentFocusIndex - 1 + focusableElements.length) % focusableElements.length;
        updateFocus()
    } else if (e.key === 'Enter') {
        const focusedElement = focusableElements[currentFocusIndex]
        if (focusedElement.classList.contains('toggle-down')){

                let elements =  document.getElementsByClassName('items-cont')
                let elementsArray = Array.from(elements)
                elementsArray.slice(0, 5).forEach(function(element) {
                    element.style.display = 'none';
                })
                dropdown.style.display = 'none'
                dropdown2.style.display = 'block'
        }

        if (focusedElement.classList.contains('toggle-up')){
            let elements =  document.getElementsByClassName('items-cont')
            let elementsArray = Array.from(elements)
            elementsArray.slice(0, 5).forEach(function(element) {
                element.style.display = 'none';
            })
            dropdown.style.display = 'none'
            dropdown2.style.display = 'block'
        }
        if (focusedElement.classList.contains('image-cont')){
            alert.classList.toggle('active')
            if(!profileModal.classList.contains('active')){
                profileModal.classList.toggle('active')
            }   
        }
        if(focusedElement.classList.contains('profile-cont')){
            profileModal.classList.toggle('active')
            if(!alert.classList.contains('active')){
                alert.classList.contains('active')
            }
        }
        if(focusedElement.classList.contains('prof-abbrv')){
            profileModal.classList.toggle('active')
            if(!alert.classList.contains('active')){
                alert.classList.contains('active')
            }
        }
        if(focusedElement.classList.contains('menu-items')){
            window.location.href = 'https://admin.shopify.com'
        }
        if(focusedElement.classList.contains('cancel')){
                document.getElementsByClassName('section-header')[0].style.display = 'none'
                document.getElementsByClassName('placeholder')[0].style.display = 'block'
        }

    }
    else if (e.key === 'ArrowDown') {
        menuItemFocusIndex = (menuItemFocusIndex + 1) % menuItemsElements.length
        updateMenuFocus()
    }
    else if (e.key === 'ArrowUp') {
        menuItemFocusIndex = (menuItemFocusIndex - 1 + menuItemsElements.length) % menuItemsElements.length;
        updateMenuFocus()
    }


}


