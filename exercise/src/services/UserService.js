import axios from 'axios'
axios.defaults.withCredentials = true
const server = 'https://reqres.in/api/users'

const UserService = {

    getUsers: (pageNumber) => {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                return resolve(xhr.responseText)
            })
            xhr.open('GET', `${server}?page=${pageNumber}`)
            xhr.send()
        })
    },

    getUserById: (id) => {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                return resolve(xhr.responseText)
            })
            xhr.open('GET', `${server}/${id}`)
            xhr.send()
        })
    },

}

export default UserService