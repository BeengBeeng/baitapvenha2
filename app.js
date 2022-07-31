// bài tập chiều 29/7
// câu 1
// Var, let, const là : khai báo biến trong Js
// 

// // bài 1
// let a1 = prompt ("Mời người dùng nhập số :");
// if (a1<4.5 && a1>=0){
//     alert("Số bạn nhập thuộc nửa nhỏ của 9");
// } else if (a1>4.5 && a1<=9){
//     alert("Số bạn nhập thuộc nửa lớn của 9");
// } else {
//     alert("k thuộc nửa nào");
// }
// // bài 2
// let n = prompt("Mời người dùng nhập số");
// let x = prompt("Mời người dùng nhập số");
// if (x < n/2){
//     alert ("Số bạn nhập thuộc nửa bé hơn");
// } else {
//     alert ("Số bạn nhập thuộc nửa lớn hơn");
// }
// //
// // bài 3
// let x1 = prompt("Mời người dùng nhập số");
// if (x1%2===0){
//     alert("Số bạn nhập là số chẵn");
// } else {
//     alert("Số bạn nhập là số lẻ");
// }
// //
// // bài 4
// let mass = Number (prompt("Mời người dùng nhập cân nặng"));
// let height = Number (prompt("Mời người dùng nhập chiều cao"));
// let BMI = mass/(height*height);
// if (BMI < 16){
//     console.log("Mày là bộ xương à : " + BMI);
// } else if (BMI>=16 && BMI<=18.5){
//     console.log("Mày là idol hàn quốc à"+ BMI);
// }  else if (BMI>18.5 && BMI<=25){
//     console.log("Mày đẹp zai đấy"+ BMI);
// }  else if (BMI>25 && BMI<=30){
//     console.log("Mày béo quá rồi đấy"+ BMI);
// } else {
//     console.log("Thôi ông không cần giảm nữa đâu");
// }

// // bài 5
// let monToan = Number(9)
// let monLy = Number(10)
// let monHoa = Number(9)
// let monVan = Number(8)
// let monAnh = Number(10)
// let Percentage = (monToan + monLy + monHoa + monVan + monAnh)/5*10;
// if (Percentage >= 90){
//     console.log("Grade A");
// } else if  (Percentage >= 90){
//     console.log("Grade B");
// } else if  (Percentage >= 80){
//     console.log("Grade C");
// } else if  (Percentage >= 70){
//     console.log("Grade D");
// } else if  (Percentage >= 60){
//     console.log("Grade E");
// } else if  (Percentage >= 40){
//     console.log("Grade A");
// } else {
//     console.log("Grade F");
// }

// bài 6
// let nam = Number(prompt("Mời bạn nhập"));

// if (nam > 0 && nam % 1 === 0) {
//     alert("Hợp lệ");
//     if (nam % 4 === 0) {
//         if (nam % 100 === 0) {
//             if (nam % 400 === 0) {
//                 alert("la nam nhuan");
//             } else {
//                 alert("khong phai nam nhuan");
//             }

//         } else {
//             alert("la nam nhuan");
//         }
//     } else {
//         alert("khong phai nam nhuan");
//     }
// } else {
//     alert("Không hợp lệ");
// }

// // bai 7
// let cao = Number(prompt("Mời bạn nhập"));
// if (cao < 150) {
//     alert("mày là người lùn à");
// } else if (cao>=150 &&cao<169){
//     alert("Trông mày cũng tàm tạm");
// } else if (cao>=170){
//     alert("Mày trông cũng được đấy");
// }
// // bai 8
// let so1 = Number(prompt("Mời bạn nhập"));
// let so2 = Number(prompt("Mời bạn nhập"));
// if (so1>so2){
//     console.log(so1);
// } else {
//     console.log(so2);
// }
// bai 9
// let so1 = Number(prompt("Mời bạn nhập so 1: "));
// let so2 = Number(prompt("Mời bạn nhập so 2: "));
// let pheptinh = prompt("Mời bạn nhập phep tinh: ");
// switch (pheptinh) {
//     case "+":
//         console.log(so1 + so2);
//         break;
//     case "-":
//         console.log(so1 - so2);
//         break;
//     case "*":
//         console.log(so1 * so2);
//         break;
//     case "/":
//         console.log(so1 / so2);
//         break;
//     default :
//     console.log("Ban da nhap sai phep tinh");
//         break;
// }
// //  bai 10
// let so1 = Number(prompt("Mời bạn nhập so 1: "));
// let so2 = Number(prompt("Mời bạn nhập so 2: "));
// let so3 = Number(prompt("Mời bạn nhập so 3: "));
// let soMax = 0;
// let soMin = 0;
// if (so1>so2){
//     soMax=so1;
//     soMin=so2;
// } else {
//     soMax=so2;
//     soMin=so1;
// }
// if (soMax<so3){
//     soMax=so3;
// }

// if (soMin>so3){
//     soMin=so3;
// }
// console.log("số max là : "+ soMax);
// console.log("số min là : "+ soMin);
//
// // bai 11
// let so1 = Number(prompt("Mời bạn nhập"));
// let sauKhaican = Math.sqrt(so1);
// let check = Number.isInteger(sauKhaican);
// if (check){
//     console.log("là số chính phương");
// } else {
//     console.log("K phải là số chính phương");
// }
//
// bai 12
// let ngay = Number(prompt("Mời bạn nhập ngày sinh : "));
// let thang = Number(prompt("Mời bạn nhập tháng sinh : "));
// switch (thang) {
//     case 1:
//         if (ngay <= 19) {
//             alert("Bạn thuộc cung Ma kết");
//         } else {
//             alert("Bạn thuộc cung Bảo Bình");
//         }
//         break;
//     case 2:
//         if (ngay < 19) {
//             alert("Bạn thuộc cung Bảo Bình");
//         } else {
//             alert("Bạn thuộc cung Song Ngư");
//         }
//         break;
//     case 3:
//         if (ngay < 21) {
//             alert("Bạn thuộc cung Song Ngư");
//         } else {
//             alert("Bạn thuộc cung Bạch Dương");
//         }
//         break;
//     case 4:
//         if (ngay < 20) {
//             alert("Bạn thuộc cung Bạch Dương");
//         } else {
//             alert("Bạn thuộc cung Kim Ngưu");
//         }
//         break;
//     case 5:
//         if (ngay < 21) {
//             alert("Bạn thuộc cung Kim Ngưu");
//         } else {
//             alert("Bạn thuộc cung Song Tửu");
//         }
//         break;
//     case 6: if (ngay < 22) {
//         alert("Bạn thuộc cung Song Tử");
//     } else {
//         alert("Bạn thuộc cung Cự giải");
//     }
//         break;
//     case 7:
//         if (ngay < 23) {
//             alert("Bạn thuộc cung Cự Giải");
//         } else {
//             alert("Bạn thuộc cung Sư Tử");
//         }
//         break;
//     case 8: if (ngay < 23) {
//         alert("Bạn thuộc cung Sư Tử");
//     } else {
//         alert("Bạn thuộc cung Xử Nữ");
//     }
//         break;
//     case 9:
//         if (ngay < 23) {
//             alert("Bạn thuộc cung Xử Nữ");
//         } else {
//             alert("Bạn thuộc cung Thiên Bình");
//         }
//         break;
//     case 10: if (ngay < 24) {
//         alert("Bạn thuộc cung Thiên Bình");
//     } else {
//         alert("Bạn thuộc cung Hổ Cáp");
//     }
//         break;
//     case 11:
//         if (ngay < 22) {
//             alert("Bạn thuộc cung Hổ Cáp");
//         } else {
//             alert("Bạn thuộc cung Nhân Mã");
//         }
//         break;
//     case 12:
//         if (ngay < 22) {
//             alert("Bạn thuộc cung Nhân Mã");
//         } else {
//             alert("Bạn thuộc cung Ma Kết");
//         }
//         break;

// }
// bài 13
// let A = Number(prompt("Mời bạn nhập"));
// let B = Number(prompt("Mời bạn nhập"));
// let C = Number(prompt("Mời bạn nhập"));
// let delta = B*B-4*A*C;
// if (delta<0){
//     console.log("Phương trình vô nghiệm");
// } else if (delta===0){
//     let nghiem = -B/(2*A);
//     console.log("Phương trình có nghiệp kép là : " +nghiem);
// } else {
//     let nghiem1 = (-B+Math.sqrt(delta))/(2*A);
//     let nghiem2 = (-B-Math.sqrt(delta))/(2*A);
//     console.log("Phương trình có 2 nghiệm là : "+ nghiem1 + " và " + nghiem2);
// }
//
//
// // bai 14
// let A = Number(prompt("Mời bạn nhập"));
// let B = Number(prompt("Mời bạn nhập"));
// let C = Number(prompt("Mời bạn nhập"));
// if (A + B > C && A + C > B && B + C > A) {
//     console.log("đây là 1 tam giác");
// } else {
//     console.log("đây không phải là 1 tam giác");
// }
//
// 
