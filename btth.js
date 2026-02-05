let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;
let newBook;
do {
     choice=+prompt(`
--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát`);

        switch (choice) {
            case 1:
                console.log("So luong sach trong kho: ", books.length);
                console.log("Danh sach cac quyen sach trong kho: ");
                for(let i=0;i<books.length;i++){
                    console.log(`${i+1}.${books[i]}`);                   
                }
                
                break;
            case 2:
                newBook=prompt("Nhap ten sach can them");
                books.push(newBook);
                alert("Them sach thanh cong");
                break;
            case 3:
                let bookBorrow =prompt("Nhap ten sach can muon");
                const searchIndex =books.indexOf(bookBorrow);
                if(searchIndex !==-1){
                    alert("Da muon cuon sach", bookBorrow);

                    books.splice(searchIndex,1);
                }else{
                    alert("Khong co sach trong kho");
                }
                break;
            case 4:
                // nhap ten sach cu
                let bookNameOld=prompt("vui long nhap ten sach can cap nhat");
                // tim kiem sach dua theo ten
                const searchOldBookNameIndex =books.indexOf(bookNameOld);
                
                // xu ly
                if(searchOldBookNameIndex !==-1){
                    let bookNameNew=prompt("Nhap ten sach moi");
                    books[searchOldBookNameIndex]=bookNameNew;
                    alert("Cap nhat thanh cong");
                }else{
                    alert("Khong tim thay sach trong kho");
                }
                break;
            case 5:
                books.sort();
                alert("sach da dc sap xep");
                console.log("Danh sach sau khi sap xep: ");
                
                for(let i=0;i<books.length;i++){
                    console.log(`${i+1}.${books[i]}`);                   
                }
                
                break;
            case 0:
                
                break;
        
            default:
                alert("Lua chon khong hop le. Vui long nhap lai")
                break;
        }
} while (choice!==0);