//export const jScript = $(document).ready(function () {
    //$('#table-data').DataTable();
//});

const dataArray =   
[
{'Nama':'Mahir Javascript', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2020' },
{'Nama':'Mahir Laravel', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2021' },
{'Nama':'Mahir Bootstrap', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2019' },
{'Nama':'Mahir Jquery', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2022' },
{'Nama':'Mahir Frelancer', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2018' },
{'Nama':'Front-end 101', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2019' },
{'Nama':'Back-end Beginner', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2022' },
{'Nama':'NodeJs', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2021' },
{'Nama':'MySQl for Data ', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2021' },
{'Nama':'PHP 101', 'Penulis' : 'Eduwork', 'Tema' : 'Programming', 'Penerbit' : 'Eduwork', 'Tahun' : '2022' },
];

function ekstrakData (data){
    const tabel = document.getElementById('tabel-buku');
    for (const data of dataArray){
        const row = `
                        <tr>
                            <td>${data.Nama}</td>
                            <td>${data.Penulis}</td>
                            <td>${data.Tema}</td>
                            <td>${data.Penerbit}</td>
                            <td>${data.Tahun}</td>
                        </tr>
                    `
                    tabel.innerHTML += row
    }
};

//ekstrakData(dataArray);
//export default dataArray;
export{ekstrakData,dataArray};
