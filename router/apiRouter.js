import express from 'express';
import { isName, isNumber, isSurname } from '../lib/validation.js';

export const apiRouter = express.Router();







const account = [];


apiRouter.post('/account', (req, res) => {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null) {
        return res.json({
            status: 'error',
            message: 'Netinkamas duomenų tipas, turi būti objektas',
        });
    }

    const name = req.body.name;
    const nameError = isName(name);
    if (nameError !== '') {
        return res.json({
            status: 'error',
            message: nameError,
        });
    }

    const surname = req.body.surname;
    const surnameError = isSurname(surname);
    if (surnameError !== '') {
        return res.json({
            status: 'error',
            message: surnameError,
        });
    }

    const year = req.body.year;
    const yearError = isNumber(year);
    if (yearError !== '') {
        return res.json({
            status: 'error',
            message: yearError,
        });
    }

    const month = req.body.month;
    const monthError = isNumber(month);
    if (monthError !== '') {
        return res.json({
            status: 'error',
            message: monthError,
        });
    }

    const day = req.body.day;
    const dayError = isNumber(day);
    if (dayError !== '') {
        return res.json({
            status: 'error',
            message: dayError,
        });
    }

    if (year > 2006) {
        return res.json({
            status: 'error',
            message: 'Sąskaitą gali atsidaryti tik asmenys sulaukę 18 metų',
        });

    }

    account.push(req.body);

    return res.json({
        state: 'success',
        message: 'Saskaita sekmingai sukurta',
    });
});




apiRouter.get('/account', (req, res) => {
      return res.json(account);
});


apiRouter.get('/account/:name-:surname', (req, res) => {
    for (let i = 0; i < account.length; i++) {
        if (req.params.name.toLowerCase() === account[i].name.toLowerCase() && req.params.surname.toLowerCase() === account[i].surname.toLowerCase()) {
            return res.json(account[i]);
        }

    }
    
});



apiRouter.delete('/account/:name-:surname', (req, res) => {
    for (let i = 0; i < account.length; i++) {
        if (req.params.name.toLowerCase() === account[i].name.toLowerCase()) {
            account.splice(i, 1);
        }

    }
     
    return res.json({
        state: 'success',
        message: 'Sąskaita sėkmingai ištrinta',
    });
});



apiRouter.put('/account/:name-:surname', (req, res) => {   
    for (let i = 0; i < account.length; i++) {
        if (req.params.name.toLowerCase() === account[i].name.toLowerCase()) {
            account[i].name = req.body.name;
            account[i].surname = req.body.surname;
            account[i].year = req.body.year;
            account[i].month = req.body.month;
            account[i].day = req.body.day;
            account[i].amount = req.body.amount;
        }

    }
     
    return res.json({
        state: 'success',
        message: 'Paskyra sėkmingai pakoreguota',
    });
});





apiRouter.get('/account/jonas-jonaitis/:name', (req, res) => {
    for (let i = 0; i < account.length; i++) {
        if (req.params.name.toLowerCase() === account[i].name.toLowerCase()) {
            return res.json(account[i].name);
        }
    }      
});

apiRouter.put('/account/jonas-jonaitis/:name', (req, res) => {   
    for (let i = 0; i < account.length; i++) {
        if (account[i].name.toLowerCase() === 'jonas') {
            account[i].name = req.params.name;           
        }
    }
     
    return res.json({
        state: 'success',
        message: 'Vardas sėkmingai pakoreguotas',
    });
});


apiRouter.get('/account/jonas-jonaitis/:surname', (req, res) => {
    for (let i = 0; i < account.length; i++) {
        if (req.params.surname.toLowerCase() === account[i].surname.toLowerCase()) {
            return res.json(account[i].surname);
        }
    }      
});

apiRouter.put('/account/jonas-jonaitis/:surname', (req, res) => {   
    for (let i = 0; i < account.length; i++) {
        if (account[i].surname.toLowerCase() === 'jonaitis') {
            account[i].surname = req.params.surname;           
        }
    }
     
    return res.json({
        state: 'success',
        message: 'Pavardė sėkmingai pakoreguota',
    });
});


apiRouter.get('/account/jonas-jonaitis/dob/', (req, res) => {
    for (let i = 0; i < account.length; i++) {
        if (account[i].name.toLowerCase() === 'jonas') {
            return res.json(account[i]);
        }
    }      
});

apiRouter.put('/account/jonas-jonaitis/dob/:year-:month-:day', (req, res) => {   
    for (let i = 0; i < account.length; i++) {
        if (account[i].name.toLowerCase() === 'jonas') {
            account[i].year = req.params.year; 
            account[i].month = req.params.month;   
            account[i].day = req.params.day;             
        }
    }
     
    return res.json({
        state: 'success',
        message: 'Gimimo data sėkmingai pakoreguota',
    });
});



apiRouter.post('/account/deposit/:name/:amount', (req, res) => {   

    const { amount } = req.params;
    const sum = parseFloat(amount);

    if (!Number.isInteger(sum) || sum < 0) {
        return res.json({
            state: 'error',
            message: 'Suma turi būti ne neigiamas sveikasis skaičius',
        });
    }


    for (let i = 0; i < account.length; i++) {
        if (req.params.name.toLowerCase() === account[i].name.toLowerCase()) {
            account[i].amount = account[i].amount + req.params.amount;
        }

    }
     
    return res.json({
        state: 'success',
        message: 'Pinigai sėkmingai įnešti',
    });
});


apiRouter.post('/account/withdrawal/:name/:amount', (req, res) => {  
    
    const { amount } = req.params;
    const sum = parseFloat(amount);

    if (!Number.isInteger(sum) || sum < 0) {
        return res.json({
            state: 'error',
            message: 'Suma turi būti ne neigiamas sveikasis skaičius',
        });
    }


    for (let i = 0; i < account.length; i++) {
        if (req.params.name.toLowerCase() === account[i].name.toLowerCase()) {
            account[i].amount = account[i].amount - req.params.amount;
        }

    }
     
    return res.json({
        state: 'success',
        message: 'Pinigai sėkmingai įšimti',
    });
});


apiRouter.post('/account/transfer/:nameFrom/:nameTo/:amount', (req, res) => { 
    
    const { amount } = req.params;
    const sum = parseFloat(amount);

    if (!Number.isInteger(sum) || sum < 0) {
        return res.json({
            state: 'error',
            message: 'Suma turi būti ne neigiamas sveikasis skaičius',
        });
    }

    
    for (let i = 0; i < account.length; i++) {
        if (req.params.nameFrom.toLowerCase() === account[i].name.toLowerCase()) {
            account[i].amount = account[i].amount - req.params.amount;
        }
        if (req.params.nameTo.toLowerCase() === account[i].name.toLowerCase()) {
            account[i].amount = account[i].amount + req.params.amount;
        }

    }
     
    return res.json({
        state: 'success',
        message: 'Pinigai sėkmingai pervesti',
    });
});





