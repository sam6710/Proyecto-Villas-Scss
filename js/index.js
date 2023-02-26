window.onload = ()=>{
    $('.fa-heart').click((e)=>{
        console.log(e.target.classList[0]);
        if(e.target.classList[0] == 'fa-regular'){
            e.target.classList = 'fa-solid fa-heart';
        }else{
            e.target.classList = 'fa-regular fa-heart';
        }
    })
}