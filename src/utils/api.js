import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://suj0hv2ee1.execute-api.ap-southeast-1.amazonaws.com/dev/list',       
    })
}