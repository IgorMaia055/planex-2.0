function eyePassword() {
    const eyeBtn = document.getElementById('eyeBtn')
    const eyeBtn2 = document.getElementById('eyeBtn2')
    const pass = document.getElementById('pass')

    if (pass.type == 'password') {
        pass.type = 'text'
        eyeBtn.hidden = true
        eyeBtn2.hidden = false
    } else {
        pass.type = 'password'
        eyeBtn.hidden = false
        eyeBtn2.hidden = true
    }
}


export default eyePassword;