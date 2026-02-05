let booksId=[];
let booksName=[];
let bookStatus=[];
let bookStatusDetail=[];
let bookCheck=0;
do {
    bookCheck=prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay? ")
} while ( bookCheck<0);
for(let i=0;i<bookCheck;i++){
    do {
        booksId[i]=prompt("Nhập mã sách (không để trống)");
    } while (!booksId[i]);
    do {
        booksName[i]=prompt("Nhập tên sách (không để trống)");
    } while (!booksName[i]);
    do {
        bookStatus[i]=prompt(`
Nhập tình trạng ban đầu (chọn số 1–3): 
    1 → "Hỏng nhẹ" 
    2 → "Hỏng nặng" 
    3 → "Cần sửa gấp"            
            `)
        for(let i=0; i<bookCheck;i++){
            if(bookStatus[i]==="1"){
            bookStatusDetail[i]="Hỏng nhẹ"
        }else if(bookStatus[i]==="2"){
            bookStatusDetail[i]="Hỏng nặng"
        }else if(bookStatus[i]==="3"){
            bookStatusDetail[i]="Cần sửa gấp"
        }
        }
    } while (!bookStatus[i]);
}
console.log("Danh sách hiện có: ", bookCheck, "cuốn" );

for(let i=0;i<bookCheck;i++){
    console.log(`
${i+1}. ${booksId[i]} - ${booksName[i]} - ${bookStatusDetail[i]}        
        `);
}
let choice;
do {
     choice=+prompt(`
Người dùng muốn làm gì:
1: Sửa tình trạng một cuốn sách
2: Loại bỏ (xóa) một cuốn sách khỏi danh sách
0: Kết thúc và in báo cáo cuối    
    `);
    switch (choice) {
        case 1:
            let bookIdFix=prompt("Nhập mã sách cần sửa");
            if(booksId.indexOf(bookIdFix)===-1){
                alert("Không tìm thấy sách");
                
            }else{
                let bookFixChoice=+prompt("1: Hỏng nhẹ 2: Hỏng nặng 3: Cần sửa gấp 4: Đã sửa xong 5: Loại bỏ");
                for(let i=0;i<bookCheck;i++){
                    switch (bookFixChoice) {
                        case 1:
                            if(bookIdFix===booksId[i]){
                        bookStatusDetail[i]="Hỏng nhẹ"
                            }
                            break;
                        case 2:
                            if(bookIdFix===booksId[i]){
                        bookStatusDetail[i]="Hỏng nặng"
                            }
                            break;
                        case 3:
                            if(bookIdFix===booksId[i]){
                        bookStatusDetail[i]="Cần sửa gấp"
                            }
                            break;
                        case 4:
                            if(bookIdFix===booksId[i]){
                        bookStatusDetail[i]="Đã sửa xong"
                            }
                            break;
                        case 5:
                            if(bookIdFix===booksId[i]){
                        bookStatusDetail[i]="Loại bỏ"
                            }
                            break;
                    
                        default:
                            console.log("Chọn từ 1-5");
                            
                            break;
                    }
                }
            }
            for(let i=0;i<bookCheck;i++){
                console.log(`
                ${i+1}. ${booksId[i]} - ${booksName[i]} - ${bookStatusDetail[i]}        
                `);
            }
            break;
        case 2:
            let bookIdDel=prompt("Nhập mã sách cần xóa")
            if(booksId.indexOf(bookIdDel)===-1){
                alert("Không tìm thấy sách");
            }else{
                for(let i=0;i<bookCheck;i++){
                    if(bookIdDel===booksId[i]){
                        booksId.splice(i,1);
                        booksName.splice(i,1);
                        bookStatusDetail.splice(i,1);
                        bookCheck--;
                    }
                }
                for(let i=0;i<bookCheck;i++){
                console.log(`
${i+1}. ${booksId[i]} - ${booksName[i]} - ${bookStatusDetail[i]}        
                `);
            }
                
            }
            break;
        case 0:
            alert("Thoát chương trình")
            break;
    
        default:
            alert("Lỗi cú pháp")
            break;
    }
} while (choice!==0);
