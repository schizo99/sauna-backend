import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for temperatures
 */
const TempScheme = new Schema({
    temp: {
        type: String,
        required: "What is the temperature?"
    },
    date: {
        type: Date,
        default: new Date
    }
});

export default mongoose.model('Temp', TempScheme);
