// const users = (name) => {
//     name.forEach((nm) => {
//         console.log(nm)
//     })
// }

const usrList = ['john', 'jack']
// users(usrList)

//callback abstraction

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { message: "Data fetched successfully" }
//         callback(null, data)
//     }, 3000)
// }

// function handleData(err, data) {
//     if (err) console.log(err)
//     console.log(data)
// }

// fetchData(handleData)

//login with callback abstraction

// function login(username, password, callback) {
//     setTimeout(() => {
//         if (username === 'admin' && password === '1234') {
//             callback(null, 'login successful')
//         } else {
//             callback(null, 'Invalid credentials')
//         }
//     }, 2000)
// }

// function handleLoginResponse(err, message) {
//     if (err) console.log(err)
//     console.log(message)
// }

// login('admin', '1234', handleLoginResponse) //success case
// login('admin123', '12345678', handleLoginResponse) //failure case

//callback chaining

function timeToDelay(sec, callback) {
    setTimeout(callback, sec * 2000)
}

// console.log("Start Timer")

//pyramid of Doom / Callback Hell => Inversion of Control
// timeToDelay(2, () => {
//     console.log("Two seconds")
//     timeToDelay(3, () => {
//         console.log("Three seconds")
//         timeToDelay(4, () => {
//             console.log("Four seconds")
//             timeToDelay(5, () => {
//                 console.log("Five seconds")
//             })
//         })
//     })
// })

//promise => object  => {k: v}

// let text = "Hello123"

// const promise = new Promise((resolve, reject) => {
//     if (text == 'Hello123') {
//         resolve("There is a text")
//     } else {
//         reject("There is no text")
//     }
// })

// console.log(promise)

//handle error
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false;
//         if (success) {
//             resolve("Operation succeeded")
//         } else {
//             reject("Operation failed")
//         }
//     }, 2000)
// })

// myPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

//promise chaining

// function timeToDelay_1(sec) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, sec * 2000)
//     })
// }

// console.log("Start timeToDelay_1");

// timeToDelay_1(2)
//     .then(() => {
//         console.log("Two seconds")
//         return timeToDelay_1(3)
//     })
//     .then(() => {
//         console.log("Three seconds")
//         return timeToDelay_1(4)
//     })
//     .then(() => {
//         console.log("Four seconds")
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// // promise chaining
// // -------------------    

// let cookingPromise = new Promise((resolve, reject) => {
//     let ingredientsAvailable = false;

//     if (ingredientsAvailable) {
//         resolve("Ingredients ready 🥕");
//     } else {
//         reject("Ingredients missing ❌")
//     }
// });

// cookingPromise
//     .then((message) => message + ", starting to cook🍳")
//     .then((message) => message + ", meal is ready 🍚")
//     .then((message) => console.log(message))
//     .catch((error) => console.log("oh no! " + error))

//promise.all


const burger = new Promise((resolve) => {
    setTimeout(() => resolve("🍔Burger ready"), 3000);
})

const pizza = new Promise((resolve, reject) => {
    setTimeout(() => reject("🍕Pizza ready"), 1500);
})

const fries = new Promise((resolve) => {
    setTimeout(() => resolve("🍟Fries ready"), 800);
})

Promise.all([burger, pizza, fries])
    .then((foods) => {
        console.log("All food is ready:")
        console.log(foods)
    })
    .catch((error) => {
        console.log("One order failed:", error)
    })