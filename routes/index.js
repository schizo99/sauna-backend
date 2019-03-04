import temperature from '../controllers/tempController';

export default (app) => {
    app.route('/temp')
        .get(temperature.getLastTemp);

    app.route('/temps')
        .get(temperature.getAllTemps)
        .post(temperature.createTemp);

    app.route('/temps/:tempId')
        .get(temperature.getTemp)

    app.route('/temps/limit/:limit')
        .get(temperature.getLastNTemp)

    app.route('/temps/days/:days')
        .get(temperature.getByDays)


    };
