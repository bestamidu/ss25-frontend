function demSoNguyenDuong(arr) {
    if (!Array.isArray(arr)) {
      return "dữ liệu không hợp lệ";
    }
    let count = 0; 

    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) && arr[i] > 0) {
        count++; 
      }
    }

    if (count > 0) {
      return count;
    } else {
      return "không có số nguyên dương trong mảng";
    }
  }
  
  console.log(demSoNguyenDuong([45, 4.4, 3, -2])); 
  console.log(demSoNguyenDuong([1, 8, 5, 67, -8, 6])); 
  console.log(demSoNguyenDuong([1.2, -30, -6])); 