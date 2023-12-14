# Fash-Print

Test Programmer

## REST API

### SUCESS

```
path    : "/"
method  : "GET"
status  : 200
response: [
    {
        "no": 1,
        "id_produk": 1,
        "nama_produk": "ALCOHOL GEL POLISH CLEANSER GP-CLN01",
        "kategori": "L QUEENLY",
        "harga": "125001",
        "status": "bisa dijual"
    },
    {
        "no": 2,
        "id_produk": 2,
        "nama_produk": "ALUMUNIUM FOIL ALL IN ONE BULAT 23mm IM",
        "kategori": "L MTH AKSESORIS (IM)",
        "harga": "1000",
        "status": "bisa dijual"
    },
]
```

```
path    : "/:id_produk"
params  : id_produk
method  : "GET"
status  : 200
response: {
        "no": 1,
        "id_produk": 1,
        "nama_produk": "ALCOHOL GEL POLISH CLEANSER GP-CLN01",
        "kategori": "L QUEENLY",
        "harga": "125001",
        "status": "bisa dijual"
    }
```

```
path    : "/"
method  : "POST"
status  : 201
body    : {
    nama_produk : "Produk 1"
    harga : 12500,
    kategori_id : 1
}
response: "Produk Produk 1 Berhasil ditambahkan"
```

```
path    : "/:id_produk"
params  : id_produk
method  : "PUT"
status  : 201
body    : {
    nama_produk : "Produk 2"
    harga : 12500,
    kategori_id : 1
}
response: "Produk Produk 2 Berhasil diupdate"
```

```
path    : "/:id_produk"
params  : id_produk
method  : "DELETE"
status  : 200
response: "Produk Produk 1 berhasil dihapus"
```

```
path    : "/kategori"
method  : "GET"
status  : 200
response: [
    "Kategori 1","Kategori 2"
]
```

### Failed

```
path    : "/:id_produk"
params  : id_produk
method  : "GET"
status  : 400
response: {ket:"Produk tidak ditemukan"}
          {ket:"Produk tidak bisa dijual"}
```

```
path    : "/"
method  : "POST"
status  : 400
response: {ket:"nama_produk dan harga tidak boleh kosong"}
          {ket:"harga hanya boleh angka"}
          {ket:"kategori_id hanya boleh angka"}
```

```
path    : "/:id_produk"
params  : id_produk
method  : "PUT"
status  : 400
response: {ket:"nama_produk dan harga tidak boleh kosong"}
          {ket:"harga hanya boleh angka"}
          {ket:"kategori_id hanya boleh angka"}
          {ket:"Produk tidak ditemukan"}
```

```
path    : "/:id_produk"
params  : id_produk
method  : "DELETE"
status  : 400
response: {ket:"Produk tidak ditemukan"}
```
