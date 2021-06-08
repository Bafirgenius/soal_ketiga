const arrayOfObject = [
    {
        nama:"Smith",
        hobi: "Self Service"
    },
    {
        nama:"Dio",
        hobi: "Design Grafis"
    },
    {
        nama:"Agung",
        hobi: "Bermain Game"
    },
]

function gather(data) {
    let newObject = {
        "nama": "",
        "hobi": ""
    }
    for(let i = 0; i<data.length; i++) {
        if(data[i].nama === "Agung") {
            newObject.nama = data[i].nama
        }
        if(data[i].hobi === "Self Service") {
            newObject.hobi = data[i].hobi
        }
    }
    console.log(newObject)
}

gather(arrayOfObject)