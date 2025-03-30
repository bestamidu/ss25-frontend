function showToChan(arr) {
    if (!Array.isArray(arr)) {
      console.log("dữ liệu không hợp lệ"); //cnay dung de cehck nhap do phai mang k
      return;
    }
  
    let soChan = []; 
  
    for (let i = 0; i < arr.length; i++) {
  
      if (arr[i] % 2 === 0) {
        soChan.push(arr[i]); 
      }
    }
  
    if (soChan.length > 0) {
      console.log(soChan.join(", "));
    } else {
      console.log("mảng không chứa số chẵn");
    }
  }

  showToChan([11, 4, 65, 6]); 
  showToChan([1, 3, 5, 17]);
  showToChan("kiwi"); 