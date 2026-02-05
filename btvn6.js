let readerCardIds =[];
let readerNames =[]
let borrowedBookCodes =[]
let overdueDays =[];
let userLate;
do {
    userLate=+prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? ");
    
} while (userLate<0 || !Number.isInteger(userLate));
for(let i=0;i<userLate;i++){
    // nhập mã
    let userId;
    do {
        userId=prompt("Nhập thẻ người mượn").trim();
        if(userId===readerCardIds[i]){
            alert("Mã thẻ bạn đọc không được trùng")
        }else{
            readerCardIds.push(userId)
        }
    } while (userId!==readerCardIds[i]);
    // nhập tên
    let userName;
    do {
        userName=prompt("Nhập tên người mượn");
        if(!userName){
            alert("Tên không được để trống");
        }else{
            readerNames.push(userName)
        }
    } while (!userName);
    // nhập sách
    let bookName=prompt("Nhập tên sách(cách nhau bởi dấu ,");
    borrowedBookCodes[i]=borrowedBookCodes.concat(bookName.split(","));
    // nhập ngày
    do {
        overdueDays[i]=prompt("Nhập số ngày quá hạn")
        if(overdueDays[i]<0 || overdueDays[i]>30 || isNaN(overdueDays[i])){
            alert("Lỗi ngày ")
        }
    } while (overdueDays[i]<0 || overdueDays[i]>30 || isNaN(overdueDays[i]));

}
console.log("Danh sách bạn đọc quá hạn:", userLate, " người");

for(let i=0;i<userLate;i++){
    console.log(`
${i+1}. Mã thẻ ${readerCardIds[i]} | Tên: ${readerNames[i]} | Sách đang mượn: ${borrowedBookCodes} | Quá hạn: ${overdueDays[i]}`);
    
}
let LateCount=0;
for(let i=0;i<userLate;i++){
    if(overdueDays[i]>=10){
        LateCount++;
    }
}
console.log("Tổng số bạn đọc quá hạn ≥ 10 ngày", LateCount," người");
let stringSame;
for(let i=0;i<userLate;i++){
    if(borrowedBookCodes[i].includes("JS") && borrowedBookCodes[i].includes("PTY")){
        stringSame = readerCardIds[i] + ", "
    }
}
console.log(`Các bạn đọc đang mượn sách JS và PTY : ${stringSame}`);
// In ra tên bạn đọc có số ngày quá hạn cao nhất (nếu nhiều người cùng số ngày cao nhất thì chỉ in một người)
let lateMaxDate=0;
let lateMaxUser=0;
for(let i=0;i<userLate;i++){
    if(lateMaxDate<=overdueDays[i]){
        lateMaxDate=overdueDays[i];
        lateMaxUser=readerNames[i]
    }
}
console.log(`Bạn đọc có số ngày quá hạn cao nhất: ${lateMaxUser} (${lateMaxDate} ngày)`);

    