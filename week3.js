// 1)დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.
// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }
// 2)დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.
// function counter (words){
//         let wordLng = words.split(" ");
//         let longestWord = wordLng[0].length;
//         for(let i = 0; i < wordLng.length; i++){
//             if(wordLng[i].length > longestWord){
//                  longestWord = wordLng[i].length;
//              }
//          }
//          console.log(longestWord);
//     }
//      counter(" hello my name is lasha bokuchava");
    
// 3)დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.
//  for (let num = 2; num <= 20; num += 2 ){
//     console.log(num);
//  }
// 4)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს  შეყვანილი რიცხვი.
// function counterUser() {
//     let num = Number(window.prompt('Enter a positive number: '));

//     if (num > 0) {
//         for (let i = 0; i < num; i++) {
//             console.log("hello");
//         }
//     } else {
//         console.log("Please enter a positive number!");
//     }
// }

// counterUser();


// 5)დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
// function bowl(){
// let numb = 0;
// for(let i = 0; i<=100; i++){
//     numb += i;
// }
// console.log(numb)
// }
// bowl();
// 6)დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
// const month = Number(window.prompt("Enter a month (1-12): "));

// if (month >= 1 && month <= 12) {
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("31 days");
//             break;
//         case 2:
//             console.log("28 or 29 days");
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("30 days");
//             break;
//     }
// } else {
//     console.log("Please enter a valid month (1-12).");
// }


// 7)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.
// function guessNumber(randomNumber){
//     const fixedNumber = 6;
//     while (randomNumber != fixedNumber) {
//         return console.log("Wrong, try again");
//     } 
//     console.log("Congrats your guess is correct, in my Number game ");

// }
// guessNumber(6)

// 8)დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
// switch (prompt("enter your rate")) {
//     case "A":
//       console.log("უმაღლესი შეფასება");
//       break;
//     case "B":
//       console.log("საშუალოზე მაღალი შეფასება");
//     case "C":
//       console.log("საშუალო შეფასება");
//       break;
//       case "D":
//       console.log("საშუალოზე დაბალი შეფასება");
//       break;
//       case "F":
//       console.log("დაბალი შეფასება");
//       break;
//     default:
//       console.log("არასწორი შეფასების ტიპი");
//       break;
//   }
// 9)დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".
// let pass = Number(window.prompt("შეიყვანეთ სწორი პაროლი: "));

// while (pass !== 12345) {
//     console.log("პაროლი არასწორია");
//     pass = Number(window.prompt("შეიყვანეთ სწორი პაროლი: "));
// }

// console.log("პაროლი სწორია");

// 10)დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

// let input = prompt("შეიყვანეთ რიცხვი:");
// let number = parseInt(input);
// let result = sumDigits(number);
// console.log(`${number}-ის ციფრების ჯამი არის: ${result}`);
// function sumDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//         let digit = number % 10;
//         sum += digit;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }
// 11)დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "b") {
            count++;
        }
    }
    return count;
}
let str = "i am lasha bokuchava";
console.log(`"${str}" სტრიქონში არის ${countBs(str)} ცვლადი "B"`);
