var isi = document.getElementById('isiweb')

let ArrayCount = arrayApk.length

for(let j = 0; j < ArrayCount; j++){
  console.log(arrayApk[j])
  
  perset = '<div class="col-4"><a href="https://semawur.com/st/?api=caa46168117d51969db03e98d1d96f679ae34669&url='+arrayApk[j].url+'"><div class="card"><img src="'+arrayApk[j].image+'" class="card-img-top" alt="..."></a></div>'
  isi.innerHTML += perset
}

//https://semawur.com/st/?api=caa46168117d51969db03e98d1d96f679ae34669&url=