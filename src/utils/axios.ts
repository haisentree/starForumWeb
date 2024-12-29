import axios from 'axios'

axios.defaults.baseURL = ''
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
