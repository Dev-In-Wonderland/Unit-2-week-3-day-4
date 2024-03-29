
  // risolviamo la promise di fetch() con async/await
  const asyncAwaitExample = async function () {
    try {
      
      let res = await fetch('https://striveschool-api.herokuapp.com/books')
      
      console.log(res)
      if (res.ok) {
        let data = await res.json()
        console.log('data', data)
  
        
        let listReference = document.querySelector('#list')
        
        data.forEach((album) => {
          listReference.innerHTML =
            listReference.innerHTML + 
            `
            <div class="col-4 col-lg-3 justify-content-center mb-2 h-100" >
            <div id="${album.asin}" class="card h-100 m-0">
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
        
        console.log('Qualcosa è andato storto con la nostra chiamata!')
      }
    } catch (error) {
      
      console.log(error)
    }
  }
  
  asyncAwaitExample()
  
    


  // predisponiamo la funzione che eliminerà tutto il contenuto della pagina una volta chiamata

        //   function myFun() {
        //     let elem = document.getElementById('list');
        //     elem.parentNode.removeChild(elem);
        //    }



// predisponiamo la funzione che eliminerà il contenuto dell' ultimo elemento della pagina una volta chiamata
          function myFun() {
            let elem = document.getElementById('1487404239');
            elem.parentNode.removeChild(elem);
           }





