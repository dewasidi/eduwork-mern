
// function getData(url,cb) {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function (){
//         if (xhr.status === 200){
//             return cb (JSON.parse(xhr.responseText)) ;
//         }
//     };
//     xhr.open("GET", url);
// xhr.send();
// }
// const data = getData("https://jsonplaceholder.typicode.com/users", function(data){
//     ekstrakData(data);
// });

const data = new XMLHttpRequest();
data.open('GET', 'https://jsonplaceholder.typicode.com/users');
data.addEventListener("load", function (){
    if(data.status===200){
        const json = JSON.parse(data.responseText);
        const tabel = document.getElementById('data-table');
    for (const dataUser of json){

        const row = `
                        <tr>
                            <td>${dataUser.id}</td>
                            <td>${dataUser.name}</td>
                            <td>${dataUser.username}</td>
                            <td>${dataUser.email}</td>
                            <td>${dataUser.address.street}</td>
                            <td>${dataUser.company.name}</td>
                        </tr>
                    `
                    tabel.innerHTML += row
    }

    } else{
        alert("NA")
        }
    });


    //const tabel = document.getElementById('name');
    //tabel.textContent = json.name;
    //document.body.appendChild(tabel);
    

data.send();
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

// ekstrakData(data);

