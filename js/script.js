// 1
{
  let k = 22;
  let n = 7;
  if (n <= 0) {
    console.log("n musbat bo'lishi kerak");
  } else
    for (let i = 0; i < n; i++) {
      console.log(k);
    }
}

// 2
{
  let a = 1;
  let b = 10;
  if (a > b) {
    console.log("a kichik bo'lishi kerak");
  } else
    for (let i = 1; i <= b; i++) {
      console.log(i);
    }
}

// 3
{
  let a = 1;
  let b = 10;
  if (a > b) {
    console.log("a kichik bo'lishi kerak");
  } else
    for (let i = 2; i < b; i++) {
      console.log(i);
    }
}

// 4
{
  let price = 20;
  for (i = 1; i <= 10; i++) {
    console.log(price * i);
  }
}
// 5
{
  let price = 30;
  for (i = 0.1; i <= 1; i += 0.1) {
    console.log(i * price);
  }
}
// 6
{
  let price = 40;
  for (i = 1.2; i <= 2; i += 0.2) {
    console.log(price * i);
  }
}
// 7
{
  let a = 1;
  let b = 10;
  sum = 0;
  for (i = 1; i <= b; i++) sum = sum + i;
  console.log(sum);
}

// 8
{
  let a = 1;
  let b = 7;
  sum = 1;
  for (i = 1; i <= b; i++) sum = sum * i;
  console.log(sum);
}
// 9
{
  let a = 1;
  let b = 4;
  sum = 0;
  for (i = 1; i <= b; i++) sum = sum + i * i;
  console.log(sum);
}
// 10
{
  let a = 5;
  sum = 0;
  for (i = 1; i <= 5; i++) sum = sum + 1 / i;
  console.log(sum);
}
// 11
{
  let a = 10;
  for (i = 1; i <= a; i++) {
    console.log(i);
  }
}
// 12
{
  let a = 20;
  for (i = 2; i <= a; i += 2) {
    console.log(i);
  }
}
// 13
{
  let a = 10;
  sum = 0;
  for (i = 1; i <= a; i += 1) sum = sum + i;
  console.log(sum);
}
// 14
{
  let a = 5;
  let name = "variable";
  for (i = 1; i <= 5; i++) {
    console.log(name);
  }
}
// 15
{
  let a = 10;
  for (i = 1; i <= a; i++) {
    console.log(i * i);
  }
}
// 16
{
  let a = 10;
  for (i = 10; i >= 1; i--) {
    console.log(i);
  }
}
// 17
{
  let a = 4;
  sum = 1;
  for (i = 1; i <= a; i++) sum = sum * i;
  console.log(sum);
}
// 18 array
{
  let fruits = ["apple", "banana", "melon", "pineapple"];
  console.log(fruits[1]); // banana
}
// 19
{
  let animals = ["tiger", "dog", "cat", "goat"];
  console.log(animals[3]); // goat
}
// 20
{
  let desktop = ["mouse", "klaviatura", "disk", "monitor"];
  console.log(desktop[0]); // mouse
}
// 21
{
  let student = {
    name: "Diana",
    last_name: "Jumabaeva",
    age: 18,
    address: "Tashkent",
    isMArried: false,
    interests: "reading books",
    ID: "AD23325",
    Passport_seria: 9374274293794787,
  };
}
// 22
{
  let car = {
    car_number: "01 384 AB",
    created_year: 2024,
    owner: "G'ulomjon",
  };
}
// 23
{
  let book = {
    name: "The Alchemist",
    year: 1988,
    readers: "300 million",
    author: "Paulo Coelho",
  };
}
// 24  1 dan 100 gacha bo'lgan barcha sonlarning yig'indisini hisoblash uchun for siklidan foydalaning.
{
  let a = 100;
  sum = 0;
  for (i = 1; i <= 100; i++) sum = sum + i;
  console.log(sum);
}
