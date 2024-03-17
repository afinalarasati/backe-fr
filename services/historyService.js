const historyRepository = require("../repositories/historyRepository")

class historyService {

    static async deleteHistory({id}) {
        const histories = await historyRepository.getHistoryBy({id})

        if (histories) {
            const deleteHistory = await historyRepository.deleteHistory(histories.id)
            if (deleteHistory) {
                return {
                    status: true,
                    status_code: 200,
                    message: "Delete history successful",
                    data: histories
                }
            } else {
                return {
                    status: false,
                    status_code: 401,
                    message: "Delete history unsuccessfull",
                    data: null
                }
            }
        } else {
            return {
                status: false,
                status_code: 404,
                message: `No data with ID ${id}`,
                data: null
            }
        }

    }

    static async getAllHistory({}) {
        const histories = await historyRepository.getAllHistory({})

        if (histories.length > 0) {
            return {
                status: true,
                    status_code: 200,
                    message: "Get All Histories",
                    data: histories
            }
        } else {
            return {
                status: false,
                    status_code: 404,
                    message: "History not found",
                    data: null
            }
        }
    }

    static async getAllHistoryByRoom({numbers}) {
        const histories = await historyRepository.getAllHistoryByRoom({numbers})
        // console.log(histories);

        if (histories) {
            return {
                status: true,
                    status_code: 200,
                    message: "Get All Histories",
                    data: histories
            }
        } else {
            return {
                status: false,
                    status_code: 404,
                    message: "History not found",
                    data: null
            }
        }
    }
}

module.exports = historyService