let bookArray=[];
let bookReturn=+prompt("Bạn muốn trả bao nhiêu cuốn sách ? ");
for(let i=1;i<=bookReturn;i++){
    let bookName=prompt("Nhập tên sách");
    bookArray.push(bookName);
}
console.log("Tổng số sách đã trả: ", bookReturn);
for(let i=0;i< bookReturn;i++){
    console.log(`${i+1}.${bookArray[i]}`);
    
}
