let bookArray=[];
let bookNameLarge=0;
let bookLate=+prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?");
for(let i=1;i<=bookLate;i++){
    let bookName=prompt(`Nhap tên sách thứ ${i}`);
    bookArray.push(bookName);
}
console.log("Tổng số sách trả muộn: ", bookLate);
for(let i=0;i< bookLate;i++){
    console.log(`${i+1}-${bookArray[i]}`);
    
}
for(let i=0;i< bookLate;i++){
    if(bookArray[i].length>20){
        bookNameLarge++;
    }

}
console.log("Số lượng sách có tên dài hơn 20 ký tự: ",bookNameLarge);
