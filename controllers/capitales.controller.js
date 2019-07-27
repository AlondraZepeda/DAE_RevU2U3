const Capital = require('./../models/capitales.model');

module.exports = {
    findAllCapitals: async(req, res) => {
        const capitals = await Capital.find();
        res.json(capitals);
    },
    findSpecificCapital: async(req, res) => {
        const capital = await Capital.findOne({pais:req.params.id});
        res.json(capital);
    }

}