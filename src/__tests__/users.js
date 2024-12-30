class Users {
    static all() {
        return fetch('http://127.0.0.1:8081/data.json').then(res => res.json()).then((data) => data);
    }
    print(){
        return 'print';
    }
}
export default Users;