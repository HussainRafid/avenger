
document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('.gradient-stroke');
    const openBtn = document.querySelector('nav .open-sidebar-btn')
    const sidebar = document.querySelector('nav .sidebar')
    const shadow = document.querySelector('.shadow')
    function toggleState(){
        openBtn.classList.toggle('active')
        sidebar.classList.toggle('active')
        shadow.classList.toggle('active')
        paths.forEach((path, index) => {
            path.style.animationDelay = `${index * 1}s`;
            path.classList.toggle('active')
          });
    }
    function removeState(){
        openBtn.classList.remove('active')
        sidebar.classList.remove('active')
        shadow.classList.remove('active')
        paths.forEach((path, index) => {
            path.style.animationDelay = `${index * 1}s`;
            path.classList.remove('active')
          });
    }
    openBtn.onclick = toggleState
    shadow.onclick = removeState
    const characters = [
        'A', 'B', 'C', 'E', 'H', 'K', 'L',
        'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
        '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '^',
        '_', '`', '{'
    ];
    const result = 'BLACKPANTHER'.split('')
    const transition = document.querySelector(".transition")
    const letters = document.querySelectorAll(".transition .ltr")

    function endTransition(){
        transition.classList.remove('active')
    }
    function updateLtr(ltr){
        const randomNumber = Math.floor(Math.random() * characters.length)
        ltr.innerHTML = characters[randomNumber]
    }
    function startLettersChange(){
        letters.forEach((letter, index) => {
            var stop = false
            setInterval(() => {
                if(!stop){
                    updateLtr(letter)
                }
            }, 50)
            setTimeout(() => {
                stop = true
                letter.innerHTML = result[index]
                if(index === result.length - 1){
                    endTransition()
                }
            }, 150 * index)
        })
    }
    startLettersChange()

})