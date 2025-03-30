function findNum(arr) {
    if (!Array.isArray(arr)) {
      return "giá trị không hợp lệ";
    }
    if (arr.length === 0) {
      return "mảng rong";
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return "phần tử nhỏ nhất trong mảng là " + min;
  }
  console.log(findNum([])); 
  console.log(findNum("abc")); 
  console.log(findNum([44, 23, 71, 52, 14])); 