import axios from 'axios'

//let base = 'api/records'   // todo check this set this up 
const base_url = '/api/records'   // todo check this set this up 

export default {
    getAllRecords() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    // write a method to post (add) a new record 
    addRecord(record) {
        return axios.post(base_url, record).then(response => {
            return response.data
        })
    },
    updateRecord(record) {
        return axios.patch('$(base_url}/$(record.id)', record)
        .then(response => {
            return response.data
        })
    }
} 