import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'35e055d548dd47ab81f679db154827d9'
    }
})