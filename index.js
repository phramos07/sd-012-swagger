const express = require('express');
const error = require('./middleware/error');
const auth = require('./middleware/auth');
const swagger = require('./middleware/swagger');
const rootRouter = require('./controller/root');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

auth(app);
rootRouter(app);
error(app);
swagger(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
