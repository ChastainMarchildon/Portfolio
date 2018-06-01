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
        title:'About'
    });
};

