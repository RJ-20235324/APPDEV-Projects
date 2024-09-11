// Initial value for count
let count = 0;
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }else if (styles.contains('increase')){
            count++
        }else if (styles.contains('random')){
            count = Math.floor(Math.random() * 1000)
            if(count > 0){
                let flag = Math.random() // 0 or 1
                if (flag > 0.5) {
                    count = Math.floor(Math.random() * 1000) * 1
                }
                else {
                    count = Math.floor(Math.random() * 1000) * -1
                }
            }
        }else if(styles.contains('increase_by_5')){
            count += 5
        }else if(styles.contains('decrease_by_5')){
            count -= 5
        }else{
            count = 0
        }
        
        if (count == 0){
            value.style.color = "black"
        }else if  (count < 0){
            value.style.color = "red"
        }else{
            value.style.color = "green"
        }
        value.textContent = count;
    })
})


