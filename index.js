// 1.Userdən 3 ədəd alın və aldığınız ədədlərin ədədi ortasını tapan alqoritm qurun.

// let eded1 = parseFloat(prompt("Birinci ədədi daxil edin:"));
// let eded2 = parseFloat(prompt("Ikinci ədədi daxil edin:")); 
// let eded3 = parseFloat(prompt("Üçüncü ədədi daxil edin:")); 

// let edediOrta = (eded1 + eded2 + eded3) / 3;

// console.log("Ədədlərin ədədi ortası: " + edediOrta);


// 2.Userdən 3 ədəd alın və bu ədədlərin üçbucağın tərəfləri ola biləcəini qaytaran alqoritm qurun.Əgər olarsa true olmazsa ekranda false çap edilsin.

// let a = prompt("Birinci ədədi daxil edin:");
// let b = prompt("Ikinci ədədi daxil edin:"); 
// let c = prompt("Üçüncü ədədi daxil edin:"); 

// if (a < b + c && b < a + c && c < a + b) {
//     console.log(true);
// }else {
//     console.log(false);
// }


// 3.Userdən name və surname dəyərləri qəbul edin və fullname-ini ekranda çap edin (başqa bir variable-dan istifadə edin)


// let firstName = prompt("Adınızı daxil edin:");
// let lastName = prompt("Soyadınızı daxil edin:");

// let fullName = firstName + " " + lastName;

// console.log("FullName:", fullName);


// 4. BMİhesablayan alqoritm qurun.Userdən boy və çəki dəyərləri alın və buna əsasən BMİ hesablayın (boy=1.70 çəki=80 daxil edilsə boy/çəki-nin kavdratı olaraq hesablanır).70/1.7*1.7 = 24.221.Əgər əldə olunan dəyər 25-dən böyükdürsə artıq çəkili əgər 18.5-24.9 arasındadırsa normal 18.5-dən kiçikdirsə arıq olaraq ekranda çap edilsin.
// Bu alqoritmlərin həm kodunu həmdə flowchart diaqramlarını yazıb github reposuna push edin(flowchartları ss edib yerləşdirin)

// let boy = parseFloat(prompt("Boyunuz daxil edin:"));
// let ceki = parseFloat(prompt("Çəkinizi daxil edin:"));


// let bmi = ceki / (boy * boy);

// if (bmi > 25) {
//     console.log("Artıq çəkili");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Normal");
// } else {
//     console.log("Arıq");
// }
