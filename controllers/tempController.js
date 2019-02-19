import mongoose from 'mongoose'; 
import temp from '../models/tempModel.js';

exports.getLastTemp = (req, res) => {
    temp.findOne({}, {}, { sort: { 'date' : -1 } }, (err, temp) => {
        if (err) {
            res.send(err);
        }

        res.json(temp);
    });
};

exports.getTemp = (req, res) => {
    temp.findById(req.params.tempId, (err, temp) => {
        if (err) {
            res.send(err);
        }

        res.json(temp);
    });
};

exports.getAllTemps = (req, res) => {
    temp.find({}, (err, temps) => {
        if (err) {
            res.send(err);
        }

        res.json(temps);
    });
};

exports.createTemp = (req, res) => {
    const newTemp = new temp(req.body);

    newTemp.save((err, temp) => {
        if (err) {
            res.send(err);
        }

        res.json(temp);
    });
};
