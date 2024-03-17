const historyService = require("../services/historyService")

const deleteHistory = async (req, res) => {
const {id} = req.params

const { status, status_code, message, data } = await historyService.deleteHistory({ id });

    res.status(status_code).send({ status, message, data });
}
const getAllHistory = async (req, res) => {

const { status, status_code, message, data } = await historyService.getAllHistory({});

    res.status(status_code).send({ status, message, data });
}

const getAllHistoryByRoom = async (req, res) => {
    const {numbers} = req.params

const { status, status_code, message, data } = await historyService.getAllHistoryByRoom({numbers});

    res.status(status_code).send({ status, message, data });
}

module.exports = {deleteHistory, getAllHistory, getAllHistoryByRoom}