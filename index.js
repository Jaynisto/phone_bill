import bodyParser from "body-parser";
import express from "express";
import exphbs from "express-handlebars";
import flash from "express-flash";
import session from "express-session";


let app = express();


// Express session
app.use(session({
    secret : 'codeforgeek',
    resave: true,
    saveUninitialized: true
}));

// initialize the flash middleware
app.use(flash());

//Configuring handlebars

const handlebarSetup = exphbs.engine({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static("public"));

//Configuring Body-parser to enable data to be read on the html form
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Rendering the home page
app.get('/',(req, res)=>{   
    res.render("index");
});

//Initializing server
const PORT = process.env.PORT || 2000;
app.listen(PORT, (req, res)=>{
    console.log("App Started Departing....");
});
