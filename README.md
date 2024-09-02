
# Bank-api

_student api project_

<br>

## 🌟 About

This project is for educational porpuses only. Pull request are welcome, but priority for project authors! Thank you for your cooperation!

## Naudojimosi instrukcija

- POST /account

Išsiųsti duomenis sąskaitos atidarymui šiuo formatu:

{
    "name" : "Jonas",
    "surname": "Jonaitis",
    "year": 1966,
    "month": 12,
    "day": 15,
    "amount": 0
}

- GET /account/:name-:surname

Vietoje :name įrašyti vardą, vietoje :surname įrašyti pavardę.

- DELETE /account/:name-:surname

Vietoje :name įrašyti vardą, vietoje :surname įrašyti pavardę.

- PUT /account/:name-:surname

Vietoje :name įrašyti vardą, vietoje :surname įrašyti pavardę.

Išsiųsti duomenis sąskaitos duomenų koregavimui šiuo formatu:

{
    "name" : "Jonas",
    "surname": "Jonaitis",
    "year": 1966,
    "month": 12,
    "day": 15,
    "amount": 0
}


- GET /account/jonas-jonaitis/:name

Vietoje :name įrašyti vardą.

- PUT /account/jonas-jonaitis/:name

Vietoje :name įrašyti vardą.

- GET /account/jonas-jonaitis/:surname

Vietoje :surname įrašyti pavardę.

- PUT /account/jonas-jonaitis/:surname

Vietoje :surname įrašyti pavardę.

- GET /account/jonas-jonaitis/dob

Grąžina Jono sąskaitos informaciją.

- PUT /account/jonas-jonaitis/dob/:year-:month-:day

Vietoje :year įrašyti gimimo metus, vietoje :month įrašyti gimimo mėnesį, vietoje :day įrašyti gimimo dieną.

- POST /account/deposit/:name/:amount

Vietoje :name įrašyti vardą, vietoje :amount įrašyti pinigų sumą, kurią norima įnešti į sąskaitą.

- POST /account/withdrawal/:name/:amount

Vietoje :name įrašyti vardą, vietoje :amount įrašyti pinigų sumą, kurią norima įšimti iš sąskaitos.

- POST account/transfer/:nameFrom/:nameTo/:amount

Vietoje :nameFrom įrašyti vardą iš kurios sąskaitos norime pervesti, vietoje :nameTo įrašyti vardą į kurią sąskaitą įskaityti pinigus, vietoje :amount įrašyti sumą.


## 🎯 Project features/goals

-   Express
-   Javascript

## 🧰 Getting Started

### 💻 Prerequisites

Node.js - _download and install_

```
https://nodejs.org
```

Git - _download and install_

```
https://git-scm.com
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo
    ```sh
    git clone https://github.com/Mnde81/express-api.git
    ```
2. Install NPM packages
    ```sh
    npm i
    ```
    or
    ```sh
    npm install
    ```
3. Run the server
    ```sh
    npm run dev
    ```

### 🧪 Running tests

There is no tests for this project.

## 🎅 Authors

Mindaugas: [Github](https://github.com/Mnde81)

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.

## 🔗 Other resources

No other resources.