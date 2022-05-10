function checkDNILetter(){
    const numDNI = document.getElementById('doc-num-input').value
    let letterDNI = document.getElementById('doc-letter-input').value
    letterDNI = letterDNI.toUpperCase()

    if (letterDNI == '' || numDNI == '') {
        alert ('Complete campos obligatorios')
        return
    }

    const numberWrong = numDNI < 0 || numDNI > 99999999 || isNaN(numDNI)
    if(numberWrong) {
        alert('Numero incorrecto, ingrese un numero valido')
        return
    }

    const letter = ['T','R', 'W', 'A', 'G','M',
    'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
    'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    
    const indexLetter = numDNI % 23
    const correspondingLetter = letter[indexLetter]
    
    console.log(numDNI, letterDNI, indexLetter, correspondingLetter)

    const letterOK = correspondingLetter == letterDNI
    const result = document.getElementById('result')
    const resultOK = `El DNI ${numDNI} y la letra ${letterDNI} corresponden.`
    const resultWrong = `El DNI ${numDNI} no corresponde con la letra ${letterDNI}.La letra corresnpondiente es ${correspondingLetter}`
    
    letterOK ? result.innerHTML = resultOK : result.innerHTML = resultWrong  
}
