function tinhTong(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b;
    } else {
      return "dữ liệu không hợp lệ";
    }
  }
  console.log(tinhTong(2, 6)); 
  console.log(tinhTong(3, "kiwi")); 
  console.log(tinhTong(9, -9));
  console.log(tinhTong(4.5, 3)); 