import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('The API is working');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
