let booksId=[];
let booksName=[];
let inventoryQuantity=[];
let bookExtend;
let prioritizeAddition=0;
do {
 bookExtend=+prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? ");
if(isNaN(bookExtend)){
    alert("Mời nhập số nguyên");
}
} while (isNaN(bookExtend));
for(let i=0;i<bookExtend;i++){
    booksId[i]=prompt("Nhập mã số sách");
    booksName[i]=prompt("Nhập tên sách");
    inventoryQuantity[i]=+prompt("Nhập số lượng sách trong kho");
}
for(let i=0;i<bookExtend;i++){
    console.log(`
${i+1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản
        `);
    
}

for(let i=0;i<bookExtend;i++){
    if(inventoryQuantity[i]<=5){
        prioritizeAddition++;
    }
}
console.log(`
số lượng sách có tồn kho ${prioritizeAddition} bản`);
let OutofBook=[];
    for(let i=0;i<bookExtend;i++){
        if(inventoryQuantity[i]===0){
            OutofBook.push(booksId[i])
        }
    }
console.log(`
Các mã sách đã hết hàng (0 bản): ${OutofBook.join(", ")}`);

