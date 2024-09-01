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







