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

app.get('/price_plans',(req, res)=>{
    res.render("price_plans");
});

app.get('/link_user', (req,res)=>{
    res.render("link_user");
})



//Initializing server
const PORT = process.env.PORT || 2000;
app.listen(PORT, (req, res)=>{
    console.log("App Started Departing....");
});
