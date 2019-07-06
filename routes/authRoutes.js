export default (app, passport) => {
    //POST routes for login and signup
    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/user",
        failureRedirect: "/login",
        failureFlash: true
    }));
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/user",
        failureRedirect: "/login",
        failureFlash: true
    }));
    app.get("/logout", (req, res) => {
        req.session.destroy(err => {
            if (!err) {
                res.redirect("/");
            } else {
                console.log(err);
                res.end()
            }
        });
    });
};