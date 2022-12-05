const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
const btn = document.getElementById("btn")
const res = document.getElementById("generatedPassword")
const amount = document.getElementById("amount")
const mix = document.getElementById("check")
function pwGen() {
    let n = parseInt(amount.value)
    let pw = ""
    for (let i = 1; i <= n; i++) {
        let rnd = Math.floor(Math.random() * charset.length)
        pw += charset[rnd]
    }
    if (mix.checked) {
        let mix = ""
        for (let i = 1; i < pw.length; i++) {
            if (i % 3 == 0) {
                mix += pw[i].toUpperCase()
                console.log(i, mix)
            } else {
                mix += pw[i]
            }
        }
        res.innerHTML = mix
    } else {
        res.innerHTML = pw
    }
}

btn.addEventListener("click", () => {
    pwGen()
})

pwGen()