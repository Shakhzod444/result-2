let car1 = 'malibu'
let car2 = 'tracker'

let price1 = 32000
let price2 = 24000

let hatch = 15
let tonirovka = 5
let color = 2

let a = confirm('Выберите машину ' + 'MALIBU  нж Ok' + ' TRACKER  нж cancel')
let totalDop = 0

if (a === true) {
   alert(`
  marka': malibu
  engine: 2.2 
  price : 32000
  `)
   let c = confirm('Хочешь доп комплектации ?')

   if (c === true) {
      let d = confirm('Хочешь люк ?')
      if (d === true) {

         totalDop = totalDop + hatch
         let f = confirm('Хочешь тонировку ?')

         if (f === true) {
            totalDop = totalDop + tonirovka
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }

         } else {
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }

         }
      } else {
         let f = confirm('Хочешь тонировку ?')

         if (f === true) {
            totalDop = totalDop + tonirovka
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }
         } else {
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }

         }
      }
   }

   let totalMoney = price1 + (price1 / 100 * totalDop)
   confirm(`${'С выбранными допольнительными комплектациями Malibu состовляет : '}` + totalMoney + ' $'  
   )

} else if (a === false) {
   alert(`
   marka: tracker
   engine:2.0
   price: 24000
   `)
   let c = confirm('Хочешь доп комплектации ?')

   if (c === true) {
      let d = confirm('Хочешь люк ?')
      if (d === true) {

         totalDop = totalDop + hatch
         let f = confirm('Хочешь тонировку ?')

         if (f === true) {
            totalDop = totalDop + tonirovka
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }

         } else {
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }

         }
      } else {
         let f = confirm('Хочешь тонировку ?')

         if (f === true) {
            totalDop = totalDop + tonirovka
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }
         } else {
            let z = confirm('Какой цвет белый или черный ?')

            if (z === true) {
               totalDop = totalDop + color
            }

         }
      }
   }

   let totalMoney = price2 + (price2 / 100 * totalDop)
  confirm(`${'С выбранными допольнительными комплектациями Tracker состовляет : '}` + totalMoney + ' $' 
      
  
   )
}


