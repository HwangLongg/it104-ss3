let a: string = "2";
let b: number = 2;
console.log(Number(a) == b);
console.log(Number(a) === b);


// - a == b: So sánh lỏng
//   => JavaScript sẽ ép kiểu tự động: "2" string chuyển thành 2 number => 2 == 2 => true
//
// - a === b: So sánh chặt
//   => Không ép kiểu. "2" là string, 2 là number => khác kiểu => kết quả là false