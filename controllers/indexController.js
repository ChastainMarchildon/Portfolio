exports.homePage = (req,res,next) =>{
    res.render('index',{
        title:'Chastains Portfolio'
    });
};

exports.projects = (req,res,next) =>{
    res.render('projects',{
        title:'Projects'
    });
};
exports.about = (req,res,next) =>{
    res.render('about',{
        title:'About',
        
    });
};
exports.contact = (req,res,next) =>{
    res.render('contact',{
        title:'Contact Me'
    });
};
exports.sent = (req,res,next) =>{
    res.render('sent',{
        title:'Email Confirmed'
    });
};


