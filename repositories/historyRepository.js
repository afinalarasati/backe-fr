const { history } = require("../models")

class historyRepository {
    static async createHistory({
    name, nik, numbers, times
    }) {
    const createHistory = await history.create({
        name: name, 
        nik: nik, 
        numbers: numbers,
        times: times
    })
    return createHistory;
    }

    static async getAllHistory({}) {
        const getAll = await history.findAll({})
        return getAll;
    }

    static async getAllHistoryByRoom({numbers}) {
        const getAll = await history.findAll({where: {numbers: numbers}})
        console.log(getAll);
        return getAll;
    }

    static async deleteHistory(id) {
        const deleteHistory = await history.destroy({ where: {id: id}})
        return deleteHistory;
    }

    static async getHistoryBy({id}) {
        const histories = await history.findOne({where: {id: id}})
        return histories;
    }
}

module.exports = historyRepository;