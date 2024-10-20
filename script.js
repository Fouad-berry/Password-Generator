function Rand(a) {
    let num = []
    let rand_num = 0;
    let str = '';
    for(let i=0; i < a.length; i++) {
        rand_num = Math.floor(Math.random() * a.length)
        if(i == 0) {
            str+= a[rand_num];
            num.push(rand_num)
        }else {
            while(num.includes(rand_num)) {
                rand_num = Math.floor(Math.random() * a.length)
            }
            str+= a[rand_num];
            num.push(rand_num)
        }
    }
    return str
}
    function RandLetters() {
        let lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        return lettersArray[Math.floor(Math.random() * lettersArray.length)]
    }
    function RandNumbers() {
        let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        return numbersArray[Math.floor(Math.random() * numbersArray.length)]
    }
    function RandSpecialCh() {
        let specialCharsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'];
        return specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]
    }
    function GeneratePass() {
    let pass_length = document.getElementById('pass_length').value;
    let result = '';
    let stope = true
    if((!letters && !numbers && !special_ch && !capitals)) {
        alert('Veuillez cocher une option!');
        return false
    }else if(pass_length < 0 || pass_length > 200) {
        alert('La taille du mot de passe est invalide !');
        return false
    }else {
        while(stope) {
        if(letters) result += RandLetters().toLowerCase();
        if(numbers) result += RandNumbers();
        if(special_ch) result += RandSpecialCh();
        if(capitals) result += RandLetters();
        if(result.length >= pass_length) stope = false
        }
        stope = true
        if(result.length > pass_length)return Rand(result).slice(0,pass_length);
        return Rand(result);
    }
}
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Mot de passe copié dans le presse-papiers !')
            })
            .catch((err) => {
            console.error('Échec de la copie du texte: ', err);
            });
        }
    function copyButtonClicked() {
        let textToCopy = res.value;
        copyToClipboard(textToCopy);
    }
    let letters = false,numbers = false,special_ch = false,capitals = false
    let res = document.getElementById('result');
    let generate = document.getElementById('generate');
    let container = document.querySelector('.container');
    generate.addEventListener('click',()=> {
        if(container.children[2].children[1].checked) {
            letters = true
        }else {
            letters = false
        }
        if(container.children[3].children[1].checked) {
            numbers = true
        }else {
            numbers = false
        }
        if(container.children[4].children[1].checked) {
            special_ch = true
        }else {
            special_ch = false
        }
        if(container.children[5].children[1].checked) {
            capitals = true
        }else {
            capitals = false
        }
        if(!GeneratePass()) {
        }else {
            res.value = GeneratePass();
        }
    })


const translations = {
        fr: {
            title: "Générateur de mot de passe",
            password_length: "Longueur du mot de passe",
            use_letters: "Utiliser des lettres",
            use_numbers: "Utiliser des chiffres",
            use_special_characters: "Utiliser des caractères spéciaux",
            use_uppercase: "Utiliser des majuscules",
            generate: "Générer",
            copy: "Copier"
        },
        en: {
            title: "Password Generator",
            password_length: "Password Length",
            use_letters: "Use Letters",
            use_numbers: "Use Numbers",
            use_special_characters: "Use Special Characters",
            use_uppercase: "Use Uppercase Letters",
            generate: "Generate",
            copy: "Copy"
        }
    };
    
    function translatePage(language) {
        document.querySelector('.title').textContent = translations[language].title;
        document.querySelectorAll('.bx h4')[0].textContent = translations[language].password_length;
        document.querySelectorAll('.bx h4')[1].textContent = translations[language].use_letters;
        document.querySelectorAll('.bx h4')[2].textContent = translations[language].use_numbers;
        document.querySelectorAll('.bx h4')[3].textContent = translations[language].use_special_characters;
        document.querySelectorAll('.bx h4')[4].textContent = translations[language].use_uppercase;
        document.getElementById('generate').textContent = translations[language].generate;
        document.querySelector('.result button').textContent = translations[language].copy;
    }
    
    document.getElementById('language-select').addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        translatePage(selectedLanguage);
    });
    
    translatePage('fr');
    