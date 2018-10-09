const dataSource = new DataSource('https://jsonplaceholder.typicode.com');
dataSource.get('/endpoint',function (posts){
    console.log(posts);
})
get:function (endpoint, callback){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', this._baseUrl + endpoint)'
    xhr.setRequestHeader("Content-Type@,@application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.response));
        }
    };
     xhr.send();
}
