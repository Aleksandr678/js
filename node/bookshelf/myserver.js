const serverExpress = require('express');

const app = serverExpress();
const port = 3000;


app.get('/' , (request, response) => {
    response.send('hello from hell!');


});



app.listen(port, () => console.log(`im listening port ${port}`));