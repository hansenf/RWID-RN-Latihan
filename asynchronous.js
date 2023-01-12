setTimeout(function() {
    console.log("saya dijalankan belakangan")
  }, 3000)
   
  console.log("saya dijalankan pertama") 
  
  /* ------ Menjalankan Callback --------- */
  // Deklarasi function yang memilik callback sebagai parameter
  function periksaDokter(nomerAntri, callback) {
      if(nomerAntri > 50 ) {
          callback(false)
      } else if(nomerAntri < 10) {
          callback(true)
      }    
  } 
  
  // // Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
  periksaDokter(65, function(check) {
      if(check) {
          console.log("sebentar lagi giliran saya")
      } else {
          console.log("saya jalan-jalan dulu")
      }
  }) 
  
  /* ----- Membuat Promise ----- */
  
  var isMomHappy = false;
   
  // Promise
  let willIGetNewPhone = new Promise(
      function (resolve, reject) {
          if (isMomHappy) {
              let phone = {
                  brand: 'Samsung',
                  color: 'black'
              };
              resolve(phone); // fulfilled atau janji dipenuhi
          } else {
              let reason = new Error('mom is not happy');
              reject(reason); // reject (ingkar)
          }
   
      }
  ); 
  
  function askMom() {
      willIGetNewPhone
          .then(function (fulfilled) {
              // yay, you got a new phone
              console.log(fulfilled);
           // output: { brand: 'Samsung', color: 'black' }
          })
          .catch(function (error) {
              // oops, mom don't buy it
              console.log(error.message);
           // output: 'mom is not happy'
          });
  }
   
  // Tanya Mom untuk menagih janji
  askMom()   