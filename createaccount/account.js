// multi step functionality code 
const steps =  Array.from(document.querySelectorAll('.step'));
const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const form = document.querySelector( 'form');


btnNext.forEach( button => {
    button.addEventListener ('click', (e)=> {
        changeStep('next')
    })
})
btnPrev.forEach( button => {
    button.addEventListener ('click', (e)=> {
        changeStep('prev')
    })
})

function changeStep(btn){
    let index = 0;
    const active = document.querySelector( '.step.active');
    index =steps.indexOf(active);
    steps[index].classList.remove('active');

    if (btn === 'next'){
        index ++
    }
    if (btn === 'prev'){
        index --
    }
    steps[index].classList.add('active')
}
// **********************************************














const allResources = Array.from(document.querySelectorAll('.resource'));
const filterResources = document.querySelector( '#filter-form')
const dmb = document.querySelector( '#dropdownMenuButton1');




filterResources.addEventListener('change', () => {
  

        if (filterResources.value === 'E-dividend'){
            allResources.forEach( e => {
                if (e.classList.contains( "e-dividend")){
    
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                    
    
                    
                }
            })
        }
        if (filterResources.value === 'fgn'){
            allResources.forEach( e => {
                if (e.classList.contains( "fgn")){
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                }
            })
        }
        if (filterResources.value === 'transfer'){
            allResources.forEach( e => {
                if (e.classList.contains( "transfer")){
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                }
            })
        }
        if (filterResources.value === 'update'){
            allResources.forEach( e => {
                if (e.classList.contains( "update")){
                    e.classList.remove('hide-resource')
                    e.classList.add('show-resource')
                } else {
                    e.classList.remove('show-resource')
                    e.classList.add('hide-resource')
                }
            })
        }
    
    })


