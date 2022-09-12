function getData(url,cb) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function (){
        if (xhr.status === 200){
            return cb (JSON.parse(xhr.responseText)) ;
        }
    };
    xhr.open("GET", url);
xhr.send();
}
//const data = getData("https://jsonplaceholder.typicode.com/users", ekstrakData(data));

const data = getData("https://jsonplaceholder.typicode.com/users", function(data){
    const tabel = document.getElementById('data-table');
    for (const dataUser of data){
        const row = `
                        <tr>
                            <td>${dataUser.id}</td>
                            <td>${dataUser.username}</td>
                            <td>${dataUser.email}</td>
                            <td>${dataUser.addres['name']}</td>
                            <td>${dataUser.company['name']}</td>
                        </tr>
                    `
                    tabel.innerHTML += row
    }
});

// function ekstrakData (data){
//     const tabel = document.getElementById('data-table');
//     for (const dataUser of data){
//         const row = `
//                         <tr>
//                             <td>${dataUser.id}</td>
//                             <td>${dataUser.username}</td>
//                             <td>${dataUser.email}</td>
//                             <td>${dataUser.addres['name']}</td>
//                             <td>${dataUser.company['name']}</td>
//                         </tr>
//                     `
//                     tabel.innerHTML += row
//     }
// };



