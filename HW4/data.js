const getData = async (url) => {
    try {
        const res = await fetch (url);
        const data = await res.json();
        data.forEach(item => {
            localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item));
         });
    } catch (error) {
        console.log(error.message);
    }
}
const url = 'https://jsonplaceholder.typicode.com/users';
getData(url);


