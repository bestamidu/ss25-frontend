function kiemTraSoNguyenTo(n) {
    if (!Number.isInteger(n) || n <= 0) {//con nay la ktra nhap v
      return "dữ liệu không hợp lệ";
    }
    if (n <= 1) {
      return "không phải là số nguyên tố";
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return "không phải là số nguyên tố";
      }
    }
    return "là số nguyên tố";
  }
  
  console.log(kiemTraSoNguyenTo(77)); 
  console.log(kiemTraSoNguyenTo(633)); 
  console.log(kiemTraSoNguyenTo("kiwikiwi")); 