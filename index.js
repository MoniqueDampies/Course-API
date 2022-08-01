const express = require('express');
const app = express();
const port = parseInt(process.env.port) || 4000;
let courses = [
    {
        id: 1, name: 'Software Engineering'
    },
    {
        id: 2, name: 'Web Development'
    },
    {
        id: 3, name: "Database Management"
    }
];
app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
})
app.get('/', (req, res)=> {
    res.send(courses);
});
app.get('/courses/:id', (req, res)=> {
    const index = parseInt(req.params.id) - 1;
    if(index < courses.length) {
        res.send(courses[index]);
    }else {
        res.send('Course was not found');
    }
});