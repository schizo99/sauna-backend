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

exports.getByDays = (req, res) => {
    var days = ~~req.params.days;
    var d = new Date();
    d.setDate(d.getDate() - days);
    var a = new Date();
    temp.find({date: {$gte: d, $lt: a}}, (err, temps) => {
        if (err) {
            res.send(err);
        }
        res.json(temps);
    });
};

exports.getLastNTemp = (req, res) => {
    var N = ~~req.params.limit;
    temp.find().sort({date:-1}).limit(N).exec().then(temps => {
        res.json(temps);
    }).catch(err => {
        res.json(err);
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
