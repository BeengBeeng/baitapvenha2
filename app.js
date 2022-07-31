// bài 1 
// let soA = Number(prompt("Mời bạn nhập"));
// let soB = Number(prompt("Mời bạn nhập"));
// if (soA%soB===0){
//     alert("có chia hết");
// } else {
//     alert("không chia hết");
// }
//
// // bài 2
// let soTuoi = Number(prompt("Mời bạn số tuổi : "));
// if (soTuoi<16 && soTuoi>0){
//     console.log("Bạn không đủ điều kiện vào học lớp 10 !");
// }
//
// // Bài 3
// let soA = Number(prompt("Mời bạn nhập số : "));
// let check = Number.isInteger(soA);
// if (check){
//     console.log("Đây là số nguyên ");
// } else {
//     console.log("Đây k phải là số nguyên ");
// }
//
//  Bài 4
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
//
// Bài 5
// let diemKT15 = Number(prompt("Mời bạn nhập : "));
// let diemKT45 = Number(prompt("Mời bạn nhập : "));
// let diemThiK1 = Number(prompt("Mời bạn nhập : "));
// let diemThik2 = Number(prompt("Mời bạn nhập : "));
// let diemHocluc = (diemKT15 + diemKT45 + diemThiK1 * 2 + diemThik2 * 3) / 7;
// if (diemHocluc < 3.5) {
//     console.log("Ở lại năm nữa cho trưởng thành hơn nhé !");
// } else if (diemHocluc < 5) {
//     console.log("May mắn thoát chết nhé , Học lực yếu !");
// } else if (diemHocluc < 6.5) {
//     console.log("Cố gắng hơn nữa nhé, Học lực trung bình !");
// } else if (diemHocluc < 8) {
//     console.log("Cố gắng hơn nữa nhé, Học lực khá !");
// } else {
//     console.log("Tốt lắm, Học lực giỏi !");
// }
//
// Bài 6
// let von = Number(prompt("Mời bạn nhập : "));
// let doanhSo = Number(prompt("Mời bạn nhập : "));
// let chiPhi = Number(prompt("Mời bạn nhập : "));
// let loiNhuan = doanhSo-(von+chiPhi);
// let hoaHong = loiNhuan/100*5;
// console.log("Lợi nhuận của bạn là : " + hoaHong);
// 
// Bài 7
let cannang = Number(prompt("Mời bạn nhập cân nặng : "));
let chieucao = Number(prompt("Mời bạn nhập chiều cao: "));
let BMI = cannang/(chieucao*chieucao);
if (BMI<18){
    console.log("Thiếu cân");
} else if (BMI<25){
    console.log("Bình thường");
} else {
    console.log("Thừa cân");
}