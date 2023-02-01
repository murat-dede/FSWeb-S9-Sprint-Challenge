import React, { useState } from 'react'

// önerilen başlangıç stateleri
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 //  "B" nin bulunduğu indexi
const initialGridX= 1;
const initialGridY= 1;
const gridSizeX= 3;
const gridSizeY= 3;
const globalGrid=[
  [1,1],
  [2,1],
  [3,1],
  [1,2],
  [2,2],
  [3,2],
  [1,3],
  [2,3],
  [3,3]
];

export default function AppFunctional(props) {
  const [gridState,setGridState] =useState(globalGrid[initialIndex]);

  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.
const[click,setclick]=useState(4);
  function getXY() {
    
    return 
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
  }

  function sonrakiIndex(yon) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.
  }

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
    const nereye = evt.target.id
    console.log('ilerle fonksiyonu',nereye);
    const gridStateX=gridState[1];
    const gridStateY=gridState[0];
    if(gridStateX<gridSizeX&&nereye=='left'){
      setGridState([gridStateX-1,gridStateY])
    }
    if(gridStateX<gridSizeX&&nereye=='right'){
      setGridState([gridStateX+1,gridStateY])
    }
    if(gridStateY<gridSizeY&&nereye=='up'){
      setGridState([gridStateX,gridStateY+1])
    }
    if(gridStateY<gridSizeY&&nereye=='down'){
      setGridState([gridStateX,gridStateY-1])
    }
    console.log('ilerle fonksiyonu',gridStateX,gridStateY);


  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
    evt.preventDefault();
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar (2, 2)</h3>
        <h3 id="steps">0 kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button onClick={ilerle} id="left">
          SOL
          </button>
        <button onClick={ilerle} id="up">
          YUKARI
          </button>
        <button onClick={ilerle} id="right">
          SAĞ
          </button>
        <button onClick={ilerle} id="down">
          AŞAĞI
          </button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit} >
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit" ></input>
      </form>
    </div>
  )
}
