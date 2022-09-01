new gridjs.Grid({
    columns: ['Nama Buku', 'Penulis', 'Tahun Terbit', 'Cetakan','Penerbit'],
    pagination: true,
    search: true,
    sort: true,
    data: [
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
      ['Mahir Javascript', 'Eduwork', '2022', 'Pertama', 'PT.Eduwork'],
    ]
    //style: {
        //td: {
          //border: '1px solid #ccc'
        //},
        //table: {
          //'font-size': '15px'
        //}
      //}
}).render(document.getElementById("data"));