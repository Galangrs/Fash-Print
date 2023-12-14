const md5 = require("md5");
const moment = require("moment-timezone");

function UserPassword() {
    // formatin waktu indonesia
    moment.tz.setDefault("Asia/Jakarta");
    const nowGMT7 = moment();

    const tanggal = nowGMT7.date().toString().padStart(2, "0");
    const bulan = (nowGMT7.month() + 1).toString().padStart(2, "0");
    const tahun = nowGMT7.year().toString().slice(-2);

    // formatin username
    const formattedTime = Math.floor(nowGMT7.hours()) + nowGMT7.format(".mm");
    const username = `tesprogrammer${tanggal}${bulan}${tahun}C${Math.ceil(
        Number(formattedTime)
    )}`;

    // formatin password
    const passwordString = `bisacoding-${tanggal}-${bulan}-${tahun}`;
    const passwordMd5 = md5(passwordString);

    return {
        username,
        password: passwordMd5,
    };
}
module.exports = UserPassword;
