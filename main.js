//crud

const fetchData=(callBack)=>{
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'GET',
        timeout:5000,
        dataType:'json',
        success:(response)=>{
            callBack(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });

}

const loadData=()=>{
    fetchData((data)=>{
        console.log(data);
        $.each(data,function (i,element){
            const row = $('<tr>');

            const colId = $('<td>').text(element.id);
            const colAlbumId = $('<td>').text(element.albumId);
            const colTitle = $('<td>').text(element.title);
            const colImage = $('<td>')
                .append($('<img>')
                .attr('src',element.url)
                .attr('loading','lazy')
                .css({
                    height:'70px',
                    width:'70px'
                }));
            row.append(colId,colAlbumId,colTitle,colImage);
            $('.table tbody').append(row);
        });

    });
}

//==================== add data ==========================

const saveData=()=>{
    const newData =   {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'POST',
        data:JSON.stringify(newData),
        timeout:5000,
        contentType:'application/json',
        success:(response)=>{
            console.log(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

//================== Update Data =======================

const updateData=()=>{
    let id=50;
    const newData =   {
        "albumId": 1,
        "id": 1,
        "title": "janitha daajjscdncdcindnennenn",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
    $.ajax({
        url:`https://jsonplaceholder.typicode.com/photos/${id}`,
        method:'PUT',
        data:JSON.stringify(newData),
        timeout:5000,
        contentType:'application/json',
        success:(response)=>{
            console.log(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

//=================find one=======================

const findOne=()=>{
    let id=500;
    $.ajax({
        url:`https://jsonplaceholder.typicode.com/photos/${id}`,
        method:'GET',
        timeout:5000,
        dataType:'json',
        success:(response)=>{
            console.log(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

//==================delete======================
const deleteById=()=>{
    let id = 50;
    $.ajax({
        url:`https://jsonplaceholder.typicode.com/photos/${id}`,
        method:'DELETE',
        timeout:5000,
        dataType:'json',
        success:(response)=>{
            console.log(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });
}