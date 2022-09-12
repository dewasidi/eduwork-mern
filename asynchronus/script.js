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
data.send();
