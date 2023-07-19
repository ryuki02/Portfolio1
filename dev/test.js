var api_url = 'https://script.google.com/macros/s/AKfycbzRTpgsZoQlhO3gq599aEnHBUIxHRy-fYF53ErL8PiGM8jTkv9Co9PbNTs242bGOofY/exec'; //生成したAPIのURLを指定

fetch(api_url)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        for (var i in json) {
            console.log(json[i].name);
        }
    });
