const axios = require("axios");
const querystring = require("querystring");
const UserPassword = require("./userpassword");

let responseData = {};
const { username, password } = UserPassword();

async function fetching() {
    try {
        const data = querystring.stringify({
            username,
            password,
        });

        const res = await axios.post(
            "https://recruitment.fastprint.co.id/tes/api_tes_programmer",
            data,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        responseData = res.data;
    } catch (error) {
        console.error(error.response.data);
    }
}

function transformData(originalData) {
    const transformedData = {
        kategori: {},
        produk: [],
    };

    originalData.forEach((item, index) => {
        if (!transformedData.kategori[item.kategori]) {
            transformedData.kategori[item.kategori] =
                Object.keys(transformedData.kategori).length + 1;
        }

        transformedData.produk.push({
            id_produk: index + 1,
            nama_produk: item.nama_produk,
            kategori_id: transformedData.kategori[item.kategori],
            harga: item.harga,
            status_id: item.status === "bisa dijual" ? 1 : 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    });
    transformedData.kategori = Object.keys(transformedData.kategori).map(
        (key) => {
            return {
                id_kategori: transformedData.kategori[key],
                nama_kategori: key,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }
    );
    return transformedData;
}

async function fetchingJadi() {
    await fetching();
    const dataToTransform = responseData.data || [];
    const result = transformData(dataToTransform);
    return result;
}

module.exports = fetchingJadi;
