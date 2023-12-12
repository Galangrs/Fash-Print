function errorHandler(err, req, res, next) {
    console.log(err);
    let status = 500;
    let reason = {
        ket: "Internal Server Error",
    };

    if (
        err.name === "SequelizeUniqueConstraintError" ||
        err.name === "SequelizeValidationError" ||
        err.name === "InvalidPostProduct"
    ) {
        status = 401;
        reason = { ket: err.message };
    } else if (err.name === "SequelizeDatabaseError") {
        status = 500;
        reason = { ket: err.message };
    } else if (
        err.name === "InvalidPutProduct" ||
        err.name === "InvalidDeleteProduct"
    ) {
        status = 400;
        reason = { ket: err.message };
    } else if (err.name === "forbiden") {
        status = 404;
        reason = { ket: err.message };
    }
    res.status(status).json(reason);
}

module.exports = errorHandler;
