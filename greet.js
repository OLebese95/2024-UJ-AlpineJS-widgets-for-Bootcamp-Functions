function greetFunction() {
    return {
        languages: ['English', 'Tsonga', 'Setswana'],
        currentLanguage: 'English',
        name: '',
        greeting: '',
        greet() {
            if (this.name === '') {
                this.greeting = 'Please enter your name tuu!';
            } else {
                const greetings = {
                    English: `Hello, ${this.name}`,
                    Tsonga: `Avuxeni, ${this.name}`,
                    Setswana: `Dumela, ${this.name}`
                };
                this.greeting = greetings[this.currentLanguage];
                setTimeout(() => {
                    this.greeting = '';
                }, 4000);
            }
        }
    };
}

