export default async (req, res, next) => {
    const token = req.headers
        .authorization?.replace("Bearer ", "");
    if (!token || !token.length) return res.sendStatus(401);
    res.locals.auth = token;

    next();
};