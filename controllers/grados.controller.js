module.exports = {
    convertCelsiusToFahrenheit: (req, res) => {
        const result = (req.params.id * 1.8) + 32;
        res.json({'El resultado es: ': result + 'F'});
    },
    welcome: (req, res) => {
        res.json({'Message: ': 'Welcome to my App'});
    }
}   