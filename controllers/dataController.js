const Data = require('../models/Data');
const {error, success} = require('../utils/responseWrapper');

const userDataController = async (req, res) => {
    try {
        const {info} = req.body;
        const owner = req._id;

        if(!info) {
            return res.send(error(404, 'info is required'))
        }

        const data = await Data.create({
            info,
            owner
        })

        return res.send(success(201, {
            data,
            owner
        }))
    } catch (e) {
        console.log(e);
        return res.send(error(500, e.message))
    }
}

module.exports = {
    userDataController
}