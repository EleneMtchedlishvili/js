// OOP
movieTheater = {
  name: "კავეა",
  languages: ["ინგლისური", "ქართული"],
  location: {
    building: "სითი მოლი",
    address: "ქავთარაძის 1",
  },
  movies: [
    {
      name: "მოსაწვევი ჯოჯოხეთიდან",
      rating: 5.2,
      date: ["28 პარ", "29 შაბ", "30 კვი"],
      time: ["16:45", "17:00", "19:00"],
      language: ["ინგლისური, ქართული"],
      hasSubtitles: true,
    },
    {
      name: "შავი ადამი",
      rating: 7.1,
      date: ["28 პარ", "29 შაბ", "30 კვი"],
      time: ["16:45", "17:00", "19:00"],
      language: ["ქართული"],
      hasSubtitles: false,
    },
    {
      name: "არ იდარდო, ძვირფასო",
      rating: 6.2,
      date: ["28 პარ", "29 შაბ", "30 კვი"],
      time: ["16:45", "17:00", "19:00"],
      language: ["ინგლისური"],
      hasSubtitles: true,
    },
    {
      name: "თავდასხმა პარიზზე",
      rating: 7.1,
      date: ["28 პარ", "29 შაბ", "30 კვი"],
      time: ["16:45", "17:00", "19:00"],
      language: ["ინგლისური, ქართული"],
      hasSubtitles: false,
    },
  ],
};
// console.log - ით გამოვიტან ნებისმიერ ინფორმაციას წერტილოვანი, სინტაქსური ან შერეული მიმართვით:
// console.log (movieTheater.location.address)
// console.log (movieTheater ["location"] ["address"])
// console.log (movieTheater.location ["address"])

// წინა დავალებები

// ლუწების ამოღება
var arr = [1, 4, 18, 24, 15, 2, 3, 19, 55];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    document.write(arr[i] + " ");
  }
}

// კენტები ამოღება
var arr = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    document.write(arr[i] + " ");
  }
}

// ყველა მონაცემის ამოღება
var arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + " ");
}

// ფუნქცია ფუნქციაში
var strSum = prompt("თანხა");
function money() {
  strSum;
}

function price() {
  money();
  if (strSum < 20) {
    alert("იაფი");
  } else if (strSum >= 20 && strSum <= 50) {
    alert("საშუალო");
  } else {
    alert("ძვირი");
  }
}

price();
