import temperature from '../controllers/tempController';

export default (app) => {
    app.route('/temp')
        .get(temperature.getLastTemp);

    app.route('/temps')
        .get(temperature.getAllTemps)
        .post(temperature.createTemp);

    app.route('/temps/:tempId')
        .get(temperature.getTemp)
};
