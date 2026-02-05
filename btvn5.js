let booksId=[];
let booksName=[];
let booksCategory=[];
let inventoryQuantity=[];
let bookCode;
let Name;
let typeOfBook;
let quantity;
let count = 0;
let num = prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay? ");
for(let i = 0 ; i  < num ; i++){
    
    do{
        bookCode = prompt("Nhập mã sách");
        if(!bookCode || bookCode.trim()==="" ){
            alert("Mã không được để trống");
            continue;
        }
        if(booksId.includes(bookCode)){
            alert("Mã bị trùng vui lòng nhập lại");
            continue;
        }
        booksId.push(bookCode);
        break;
        
    }while(true);
    do{
        Name = prompt("Nhập tên sách:");
        if(!Name || bookCode.trim()===""){
            alert("Tên không được để trống");
            continue;
        }
        booksName.push(Name);
        break;
    }while(true);
    typeOfBook = prompt("Nhập các thể loại (nhập một chuỗi, các thể loại cách nhau bởi dấu phẩy, ví dụ: Lập trình,JavaScript,Web)");
    booksCategory.push(typeOfBook);
    do{
        quantity = +prompt("Nhập số lượng tồn kho");
        if(quantity < 0){
            alert("Nhập số lượng lớn hơn hoặc bằng 0");
            continue;
        }
        inventoryQuantity.push(quantity);
        break;
    }while(true);

}

for ( let  j = 0 ; j < booksCategory.length ; j++){
    if(booksCategory.includes("Lập trình")){
        count++;
    }
}