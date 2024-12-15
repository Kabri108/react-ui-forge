import axios from 'axios'

const Axios=axios.create({
    // baseURL:'http://localhost:5000/api',
    baseURL:'https://react-ui-forge-sx45.vercel.app/api/' || 'http://localhost:5000/api'
})

export default Axios;