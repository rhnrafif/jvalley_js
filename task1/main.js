// tes console
console.info('Buku Tamu');

//membuat function buku tamu
const isiBukuTamu = () => {
  //tangkap elemet table body
  let tbody = document.getElementById('tbody');

  //input data tamu
  let namaLengkap = prompt('Masukan Nama Lengkap :');
  let alamat = prompt('Masukan Alamat :');
  let keterangan = prompt('Masukan keterangan :');

  //mengambil total child dari tbody
  let totalChild = tbody.childElementCount;

  //membuat logika sederhana untuk mengisi prompt (mencegah Null)
  if (namaLengkap != null && alamat != null && keterangan != null) {
    //menampilkan string ke element HTML
    tbody.innerHTML += `
  <tr>
  <td>${totalChild + 1}</td>
  <td>${namaLengkap}</td>
  <td>${alamat}</td>
  <td>${keterangan}</td>
</tr>
  `;
  } else {
    alert('Mohon diisi dengan benar !');
  }
};
