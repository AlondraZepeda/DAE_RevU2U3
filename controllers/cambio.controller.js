module.exports = {
    convertdlstopesos: (req, res) => {
        const result = (req.params.id * 19.04);
        res.json({'El resultado es: ': result + 'pesos'});
    },
    welcome: (req, res) => {
        res.json({'Message: ': 'Welcome to my App'});
    }
}  