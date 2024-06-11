

// {
//     // 5-masala
//     // function number( a, b, c ) {
//     //     alert("Uchta son kiritganda nechtasi manfiy va nechtasi musbatligini aniqlovchi dastur tuzilsin. Natija console da chiqsni")
    
//     //     let manfiy = 0
//     //     let musbat = 0
    
//     //     if (a > 0) {
//     //         musbat++
//     //     }else {
//     //         manfiy++
//     //     }
    
//     //     if (b > 0) {
//     //         musbat++
//     //     }else {
//     //         manfiy++
//     //     }
    
//     //     if (c > 0) {
//     //         musbat++
//     //     }else {
//     //         manfiy++
//     //     }
    
//     //     return `musbat: ${musbat}, manfiy: ${manfiy}`
//     // }
// //     console.log( number(5, -7, 20) );
// //     console.log( number(-9, -7, 3) );
// }

// {
//     // 6 - masala
//   // function number( a, b ) {
// //     //     alert("ikkita son kiritiganda shu sonlardan kattasini chiqarilsin")
// //     //     if (a > b) {
// //     //         return `${a} soni ${b} sonidan katta`
// //     //     } else {
// //     //        return `${b} soni ${a} sonidan katta`
// //     //     }
// //     // }
// //     // console.log( number(5, 6) );
// //     // console.log( number(9, 6) );
// }

// {
//     // 7 - masala
//     // function number( a, b ) {
//     //     alert("ikkita son kiritganda kichigini tartib raqami aniqlansin")
    
//     //     if (a > b) {
//     //         return `ikkinchi kiritilgan ${b} soni kichik`
//     //     } else {
//     //         return `birinchi kiritilgan ${a} soni kichik`
//     //     }
//     // }
//     // console.log( number(3, 5) );
//     // console.log( number(8, 5) );
// }

// {
//     // 8 - masala
//     // function number( a, b ) {
//     //     alert("ikkita son kiritganda avval kattasini kegin kichigi chiqarilsin")
//     //     if (a > b) {
//     //         return `${a} soni katta, ${b} soni kichik`
//     //     } else {
//     //         return `${b} soni katta, ${a} soni kichik`
//     //     }
//     // }
//     // console.log( number(4, 6) );
//     // console.log( number(7, 6) );
// }

// {
//     // 9-masala
//     // function number( a, b ) {
//     //     alert("a va b haqiqiy sonlar kiritganda sonlarni shunday o'zgartirish kerakki a soni kichik b soni katta bo'lsin")
//     //     if (a < b) {
//     //         return `a soni = ${a} kichik, b soni = ${b} katta. Aslida a soni = ${a}, b soni = ${b}`
//     //     } else {
//     //         return `a soni = ${b} kichik, b soni = ${a} katta. Aslida a soni = ${a}, b soni = ${b}`
//     //     }
//     // }
//     // console.log( number(3, 4) );
//     // console.log( number(8, 4) );
// }

// {
//     // 10 - masala
//     // function number( a, b ) {
//     //     alert("ikkita son o'zaro teng bo'lmasa ularning yig'indisini chiqarsin, agar teng bo'lsa 0 ni chiqarsin.")
//     //     let c = a + b
//     //     let d = 0
//     //     if (a !== b) {
//     //         return ` sonlar o'zaro teng bo'lmagani uchun ularning yig'indisi ${c} ga teng. a = ${a}, b = ${b}`
//     //     } else {
//     //         return `sonlar o'zaro teng bo'lgani uchun natija ${d} chiqdi. a = ${a}, b = ${b}`
//     //     }
//     // }
//     // console.log( number(3, 4) );
//     // console.log( number(5, 5) );
// }

// {
//     // 11 - masala
//     // function number( a, b ) {
//     //     alert("a va b butun sonlari kiritilganda o'zaro teng bo'lmasa kattasi chiqsin, teng bo'lsa 0 chiqsin. a va b sonlari chiqsin")
//     //     let c = 0
//     //     if (a === b) {
//     //         return `sonlar o'zaro teng bo'lgani uchun natija ${c}. a = ${a}, b = ${b}`
//     //     } else if(a > b){
//     //         return `sonlar o'zaro teng bo'lmagani uchun sonlarning kattasi a = ${a}. a = ${a}, b = ${b}` 
//     //     } else{
//     //         return `sonlar o'zaro teng bo'lmagani uchun sonlarning kattasi b = ${b}. a = ${a}, b = ${b}`
//     //     }
//     // }
//     // console.log( number(5, 8) );
//     // console.log( number(8, 8) );
// }

// {
//     // 12 - masala
//     // function number( a, b, c ) {
//     //     alert("uchta son kiritganda ularning kichigi chiqarilsin")
//     //     if ( a < b && a < c ) {
//     //         return `eng kichik son a = ${a}. Kiritilgan sonlar a = ${a} b = ${b} c = ${c}`
//     //     } else if( b < a && b < c ){
//     //         return `eng kichik son b = ${b}. Kiritilgan sonlar a = ${a} b = ${b} c = ${c}`
//     //     } else if( c < a && c < b ){
//     //         return `eng kichik son c = ${c}. Kiritilgan sonlar a = ${a} b = ${b} c = ${c}`
//     //     }else{
    
//     //     }
//     // }
//     // console.log( number(3, 5, 6) );
//     // console.log( number(7, 5, 6) );
//     // console.log( number(8, 5, 2) );
// }

// {
//     // 13 - masala
//     // function number( a, b, c ) {
//     //     alert("uchta son kiritganda shu sonlarni o'rtachasini ya'ni (katta va kichik sonlari orasidagi son) ni chiqarsin")
//     //     if ( ( a > b && a < c ) || ( a > c && a < b ) ) {
//     //         return `uchta son o'rtachasi a = ${a}. Kiritilgan sonlar a = ${a} b = ${b} c = ${c}`
//     //     } else if( ( b > a && b < c ) || ( b > c && b < a ) ){
//     //         return `uchta son o'rtachasi b = ${b}. Kiritilgan sonlar a = ${a} b = ${b} c = ${c}`
//     //     }else if( ( c > a && c < b ) || ( c > b && c < a)){
//     //         return `uchta son o'rtachasi a = ${c}. Kiritilgan sonlar a = ${a} b = ${b} c = ${c}`
//     //     }
//     // }
//     // console.log( number( 1, 2, 3) );
//     // console.log( number( 6, 5, 4) );
//     // console.log( number( 8, 9, 7) );
//     // console.log( number( 11, 10, 12) );
//     // console.log( number( 15, 13, 14) );
//     // console.log( number( 16, 18, 17) );
// }

// {
//     // 14 - masala
//     // function number( a, b, c ) {
//     //     alert("uchta son kiritganda avval kichigini kegn kattasi chiqarilsin. kiritilgan sonlar chiqarilsin")
//     //     if ( ( a < b && a < c ) && ( b > a && b > c ) ) {
//     //         return `kichigi = ${a}, kattasi = ${b}. kiritilgan sonlar: a = ${a}, b = ${b} c = ${c}`
//     //     } else if( (a < b && a < c) && (c > a && c > b) ){
//     //         return `kichigi = ${a}, kattasi = ${c}. kiritilgan sonlar: a = ${a}, b = ${b} c = ${c}`
//     //     } else if( (b < a && b < c) && (a > b && a > c) ){
//     //         return `kichigi = ${b}, kattasi = ${a}. kiritilgan sonlar: a = ${a}, b = ${b} c = ${c}`
//     //     } else if ( (b < a && b < c) && (c > a && c > b) ){
//     //         return `kichigi = ${b}, kattasi = ${c}. kiritilgan sonlar: a = ${a}, b = ${b} c = ${c}`
//     //     } else if ( (c < a && c < b) && (a > b && a > c) ){
//     //         return `kichigi = ${c}, kattasi = ${a}. kiritilgan sonlar: a = ${a}, b = ${b} c = ${c}`
//     //     } else if ( (c < a && c < b) && (b > a && b > c) ){
//     //         return `kichigi = ${c}, kattasi = ${b}. kiritilgan sonlar: a = ${a}, b = ${b} c = ${c}`
//     //     }
//     // }
//     // console.log( number( 1, 3, 2) );
//     // console.log( number( 4, 5, 6) );
//     // console.log( number( 9, 7, 8) );
//     // console.log( number( 11, 10, 12) );
//     // console.log( number( 15, 14, 13) );
//     // console.log( number( 17, 18, 16) );
// }

// {
//     // 15 - masala
//     // function number( a, b, c ) {
//     //     alert("Uchta son kiritganda ularning yig'indisi eng katta bo'ladigan ikkitasi chiqsin. kiritilgan sonlar chiqarilsin")
//     //     if ( ( a + b > b + c ) || ( a + b > a + c ) ) {
//     //         return `${a} va ${b}. kiritilgan sonlar: a = ${a} b = ${b} c = ${c}`
//     //     } else if( ( a + c > a + b ) || ( a + c > b + c ) ){
//     //         return `${a} va ${c}. kiritilgan sonlar: a = ${a} b = ${b} c = ${c}`
//     //     } else if( ( b + c > a + b ) || ( b + c > a + c ) ){
//     //         return `${b} va ${c}. kiritilgan sonlar: a = ${a} b = ${b} c = ${c}`
//     //     }
//     // }
//     // console.log( number(2, 5, 4) );
//     // console.log( number(2, 5, 7) );
//     // console.log( number(8, 5, 7) );
// }

// {
//     // 16 - masala
//     // function number( a, b, c ) {
//     //     alert("a b c haqiqiy sonlar kiritilganda sonlar o'sish tartibida berilgan bo'lsa, sonlarni ikkilantiring, aks holda sonlar ishorasi o'zgartirilsin. kiritilgan qiymatlar chiqarilsin")
//     //     if (a < b && b < c) {
//     //         return `Kiritilgan sonlar: a = ${a} b = ${b} c = ${c}. Natija: a = ${a *= 2} , b = ${b *= 2}, c = ${c *= 2}
//     //         `
//     //     } else {
//     //         return `a = ${-a} , b = ${-b}, c = ${-c}.
//     //         Kiritilgan sonlar: a = ${a} b = ${b} c = ${c}`
//     //     }
//     // }
//     // console.log( number(1, 2, 3) );
//     // console.log( number(3, 2, 1) );  
// }

// {
//     // 17 - masala
//     // function number( a, b, c ) {
//     //     alert("a b c haqiqiy sonlar kiritilganda sonlar o'sish yoki kamayish tartibida bo'lsa ikkilantiring, aks holda sonlar ishorasi o'zgartirilsin. Kiritilgan sonlar qiymatlari chiqarilsin.")
//     //     if ( (a < b && b < c) || (a > b && b > c) ) {
//     //         return `Kiritilgan sonlar: a = ${a} b = ${b} c = ${c}. Natija: a = ${a *= 2} , b = ${b *= 2}, c = ${c *= 2}`
//     //     } else {
//     //         return `a = ${-a} , b = ${-b}, c = ${-c}.
//     //         Kiritilgan sonlar: a = ${a} b = ${b} c = ${c}`
//     //     }
//     // }
//     // console.log( number(1, 2, 3) );
//     // console.log( number(3, 2, 1) );
//     // console.log( number(3, 1, 2) );
//     // console.log( number(1, 3, 2) );
//     // console.log( number(2, 3, 1) );
// }

// {
//     // 18 - masala
//     // function number( a, b, c ) {
//     //     alert("uchta butun son kiritganda shularni ikkitasi o'zaro teng va qolgan bittasini tartib raqami chiqarilsin.")
//     //     if ( a === b) {
//     //         return `${a} = ${b} va 3`
//     //     } else if( a === c ){
//     //         return `${a} = ${c} va 2`
//     //     } else if ( b === c){
//     //         return `${b} = ${c} va 1`
//     //     }
//     // }
//     // console.log( number( 5, 5, 7) );
//     // console.log( number( 3, 8, 3) );
//     // console.log( number( 3, 4, 4) );
// }

// {
//     // 19 - masala
//     // function number( a, b, c, d) {
//     //     alert("to'rtta son kiritganda ularni uchtasi o'zaro teng va qolgan bittasini tartib raqami chiqarilsin")
//     //     if (a === b && a === c) {
//     //         return `${a} = ${b} = ${c} 4`
//     //     } else if (a === b && a === d){
//     //         return `${a} = ${b} = ${d} 3`
//     //     } else if (a === c && a === d){
//     //         return `${a} = ${c} = ${d} 2`
//     //     } else if (b === c && b === d){
//     //         return `${b} = ${c} = ${d} 1`
//     //     }
//     // }
//     // console.log( number( 1, 1, 1, 2) );
//     // console.log( number( 2, 2, 1, 2) );
//     // console.log( number( 3, 2, 3, 3) );
//     // console.log( number( 3, 4, 4, 4) );
// }

// {
//     // 20 - masala
//     // function number(a, b, c) {
//     //     let masofaAB = math.abs(a-b);
//     //     let masofaAC = math.abs(a-c);
//     //     if (masofaAB < masofaAC) {
//     //         return `eng yaqin nuqta b, masofa ${masofaAB}`
//     //     } else {
//     //         return ` eng yaqin masofa c, masofa ${masofaAC}`
//     //     }
//     // }
//     // console.log( number (0, 3, 7) );
//     // console.log( number (5, 1, 10) );
// }
