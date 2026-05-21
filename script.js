  let angka = [];
    for (let i=1; i <= 1000; i++){
        angka.push(i);
    }

    function printAngkaGanjil(angka){
        let ganjil=[];
        for (let i=0; i<angka.length; i++){
            let result = angka[i];
                if(result % 2 == 1){
                    ganjil.push(result);
                }   
         }
         return ganjil;
    }
    console.log(printAngkaGanjil(angka));
