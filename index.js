// import data from './' <-- metodo generico per richiamare il contenuto di un file
// JSON dentro il codice

// ESERCIZI SULLE FETCH!

// fetch('https://jsonplaceholder.typicode.com/albums')
// questa è una fetch() valida! fa partire una REQUEST dal nostro browser
// fetch() torna una PROMISE! sappiamo come gestire una Promise

  // risolviamo la promise di fetch() con async/await
  const asyncAwaitExample = async function () {
    try {
      // inseriamo la logica di async/await
      // preponiamo await davanti a ogni metodo che torna una Promise!
      let res = await fetch('https://striveschool-api.herokuapp.com/books')
      // res è utilizzabile!
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        // prendo un riferimento al tag <ul>
        let listReference = document.querySelector('#list')
        //   data.forEach((album) => {
        //     // creo un <li> vuoto
        //     let emptyLi = document.createElement('li')
        //     // assegno al <li> vuoto le classi di bootstrap
        //     emptyLi.classList.add('list-group-item')
        //     // <li class="list-group-item"></li>
        //     // riempio <li> con il contenuto del titolo
        //     emptyLi.innerText = album.title
        //     // appendo <li> a <ul>
        //     listReference.appendChild(emptyLi)
        //   })
        data.forEach((album) => {
          listReference.innerHTML =
            listReference.innerHTML + // appende all'innerHTML precedente un nuovo pezzetto
            `
            <div class="col justify-content-center" >
            <div class="card m-0" style="width: 20rem;">
                <img src=${album.img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${album.title}</h5>
                  <p class="card-text">$ ${album.price}</p>
                  
                </div>
              </div>
          </div>
          `
        })
      } else {
        // finiremo qui se la chiamata ha contattato il server, ma c'è stato
        // un problema nella risposta!
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      // finiremo qui se c'è stato un problema a monte, nel contattare il server!
      // ad es. un errore di rete, modalità aereo, etc.
      console.log(error)
    }
  }
  
  asyncAwaitExample()
  
  // ESEMPIO DI CHIAMATA POST
  // vediamo un esempio di una chiamata POST
  // le chiamate POST, a differenza delle chiamate GET, non recuperano dati,
  // ma servono a GENERARE NUOVE RISORSE!
  




  
  //   const createNewAlbum = async function () {
      //     try {
          //       let response = fetch('https://striveschool-api.herokuapp.com/books', {
              //         // un oggetto di configurazione
              //         method: 'DELETE', // genero un nuovo album
              //         body: JSON.stringify({ title: 'nuovo', userId: 5 }), // il body dev'essere una stringa
//         headers: {
    //           'Content-Type': 'application/json', // specifico che il mio body è un oggetto stringhifizzato
    //         },
    //       })
    //       console.log(response)
    //     } catch (error) {
        //       console.log(error)
        //     }
        //   }
        
        
        let ob = document.querySelector('row > col:last-child');
        ob.classList.add("newclass");
        
        
          function myFun() {
            let elem = document.getElementsByClassName('newclass');
            elem.parentNode.removeChild(elem);
           }