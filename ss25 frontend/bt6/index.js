function check(str) {
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const userInput = prompt("Nhập một chuỗi ký tự để kiểm tra:");

if (check(userInput)) {
    alert("Đây là chuỗi đối xứng!");
} else {
    alert("Đây không phải chuỗi đối xứng!");
}