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
    const data = {
        state: 'error',
        message: 'Nurodyk konkretu API endpoint\'a',
    };
    return res.json(account);
});











apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => {
    marks.push(req.body.mark);

    return res.json({
        state: 'success',
        message: 'Pazymys pridetas',
    });
});

apiRouter.put('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);
    const newMarkValue = req.body.newMark;

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija (index) turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas ir taip jau yra tuscias... nera ko redaguoti',
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Norimo redaguoti pazymio indexas negali virsyti leistinos ribos (riba: ${marks.length - 1}).`,
        });
    }

    // newMarkValue validacijos....

    marks[position] = newMarkValue;

    return res.json({
        state: 'success',
        message: 'Pazymys paredaguotas',
    });
});

apiRouter.delete('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija (index) turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas ir taip jau yra tuscias... nera ko papildomai salinti',
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Norimo pasalinti pazymio indexas negali virsyti leistinos ribos (riba: ${marks.length - 1}).`,
        });
    }

    marks.splice(position, 1);

    return res.json({
        state: 'success',
        message: 'Pazymys pasalintas',
    });
});