export default function display(data,tempType,type){

    // clears up the existing main content
    let clear = document.querySelector("main");
    while (clear.hasChildNodes()) {
        clear.removeChild(clear.firstChild);
    }

    // we difine main
    const main = document.querySelector('main');
    main.style.padding = '20px';
    // we save the time in a veriable
    let date = data.current.last_updated;
    let time = date[11]+date[12];

    // depenting at the time the color theme will change
    if(~~time >= 21 && ~~time <= 23){
        main.style.backgroundColor = '#4b86b4';
    }
    if(~~time >= 0 && ~~time <= 6){
        main.style.backgroundColor = '#4b86b4';
    }
    if(~~time >= 7 && ~~time <= 20) {
        main.style.backgroundColor = '#8dbdff';
    }
    // the button for temp
    let but = document.createElement('button');
    but.setAttribute('class', 'tempChange');
    but.innerHTML = type;
    
    // display location
    let divLocation = document.createElement('div');
    divLocation.setAttribute('class', 'location');
    let imgLocation = new Image();
    imgLocation.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nMWVv0tCURzFlYQI2xSXBnOJlvoDxCIcgxpqc6u1H+A/UFNNKU1ttdZQU2NbBtWUa0VQzRKVUUPUJ75whMflab5r0IEv3PfOuedcv1+5Lxb7bwD9wCpwAbypbL1iXK/mQ0Cd9rgyTS8nr3cwD4ZE/yVqi4tXlYtln4BLx6QC9AEJoOpw5z4BTefkiQCXcHmfgEaEgIZPQM1pQ1XGVtsOV/MJKIcMs+mcvIWyT0AGeOd3mCYTOUAhlS4CtrzMFZB2hu3CuLR3gEIWOwQs9GSugDhwHGJu7+K+pklgGijpOQU8BsxtnRJXkjbZjXEW2AE+ZPQFFMUVgE9VQe+K0qA9tjfbznwSeAoYnwJrQD6gWbIKPOeBdWlbQeYxERbwIME+kPNoaw44kMd9mOBO5CEw4hEwChzJ4zZMYP18keBbd9EGMAOM6es2oLL1ODALbAJn2mN4BqbanWIY2AsMmQiwK2O37ZCdoEFgXlfFCXCj4bX+Rba+FmeaOdsTta1/gh+seL05hWcb9QAAAABJRU5ErkJggg=='
    let location = document.createElement('p');
    location.innerHTML = data.location.name;
    divLocation.appendChild(imgLocation);
    divLocation.appendChild(location);
    main.appendChild(divLocation);

    // display weather
    let divIcon = document.createElement('div');
    divIcon.setAttribute('class', 'weather');
    let img = new Image();
    img.src = data.current.condition.icon;
    main.appendChild(img);
    let text = document.createElement('p');
    text.innerHTML = data.current.condition.text;
    divIcon.appendChild(img);
    divIcon.appendChild(text);
    main.appendChild(divIcon);

    // display temprature
    let divTemp = document.createElement('div');
    divTemp.setAttribute('class', 'temp');
    let imgTemp = new Image();
    imgTemp.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nGNgwAKapi7XnLlyx+xJizbVp82cycpACijsXcW5YvuRqw9ff/p/4/Hrf9NXbJ0GEj/h7JwGwkfd3DTwGlDeO1f/5NX7f0AGgPDy7YcPkOSCip7ZxmduPARrBuEVOw4fAokfc3JKB+HjLi6aZBlwwtHRGITP2NuL0NaAxYmZMbfyC/4/qqkB4zOZ2R9B4v6VW9JBOKBmC34vrI+M9XpXX///e38/GF8qLXvLQAo44ehojGzAtaycSyBx36otaSDsU7kJfzSedHExQTbgblraYaIN+M/AwHg1Kmr/154euAEvq6o+XgwJySLK+af9/b3e1NX9gmmGuyIl5QxRBlwKCSn+0t2NohmE72dl3SLKgJO+vtovKis/oBtwOylpN1EGgMC1qKhJbxsavsA0P8zNvXfZ39+KaANA4FxoaMjVmJhZVyMiek/5+8viUwwABMcPDtiB8I0AAAAASUVORK5CYII=';
    let temp = document.createElement('p');
    if(tempType == 'temp_c'){
        temp.innerHTML = 'Temperature '+'<br>'+ data.current[tempType]+'°C';
    }
    else{
        temp.innerHTML = 'Temperature '+'<br>'+ data.current[tempType]+'°F';
    }
    divTemp.appendChild(imgTemp);
    divTemp.appendChild(temp);
    main.appendChild(divTemp);

    // display humidity
    let divHumidity = document.createElement('div');
    divHumidity.setAttribute('class', 'humidity');
    let imgHumidity = new Image();
    imgHumidity.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKUlEQVR4nGNgoDZY9PhTMAjjU2N24tt/GGZABqvuvuNf9OTzk0VPPj+f/eiDEMkGLHz8ec6iJ1/+gzCITZLTFz/9YrTo8ee/MANA7AWPvpoRpfn///+Mix5/OQLXDMXzH38+DZLD5nQUL0y99y0cXTMMd1z/nkjQgL7b317hMqD39tePeJ2fcuxr4OyHX//Pefj1f9/tr/9Lz33/H3X453/Hbb//G2/4/d9ow5//xht+meM0QGfNnzrdtX/+48M6a363IutB8YLu2t+LCBkAUoPTAJ01f+oJumDtn1qcXtBd819Jd+3vnzgNWPP7h/76/wp4A1J37Z8U3bW//2La/PuPzuo/SejqsSZl7dW/HXTX/tmpu/b3ZxDWWftnh+6aX3bYLMSZF8gBAIjigxCxkt0hAAAAAElFTkSuQmCC";
    let humidity = document.createElement('p');
    humidity.innerHTML = "humidity "+data.current.humidity+'%';
    divHumidity.appendChild(imgHumidity);
    divHumidity.appendChild(humidity);
    main.appendChild(divHumidity);

    // display uv
    let divUv = document.createElement('div');
    divUv.setAttribute('class', 'uv');
    let imgUv = new Image();
    imgUv.src = 'data:image/png;base64,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';
    let uv = document.createElement('p');
    uv.innerHTML = 'UV '+data.current.uv;
    divUv.appendChild(imgUv);
    divUv.appendChild(uv);
    main.appendChild(divUv);

    // display wind
    let divWind = document.createElement('div');
    divWind.setAttribute('class','wind');
    let imgWind = new Image();
    imgWind.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMklEQVR4nO2bXUxcRRTHp1abpjVa06bVFz8KTStSWAoU0TZbCzuzBVJMlNjY1sSHfqAYKAtLAXFtLS3uzC5SxUqNDxqf+qg+GBMfamJoYt+A1tJld6FiQVI+yjIHtOkxc/vFx+4CW5rdu72/5P829+b+z5x7Zmb3XEIMDOIDxEXbPxtdY24cWkEeFnIb8EnGZSXl0Mq4/Je5AJlQkgEq5E+My71FZ3AxiUcYl3sph4HCk4C7vgLMcwO+2Qy4w30nCLdEheywHB+mJJ6gHOrz3YBvtwDuOgW4s2mq6enadmJoYnPtlWYSDzAB7+c3Au75GlDNfjjjk7IA0w/7bqbZu2uJnsnj8jmrC2D36RDmOfQxIYeDBWHrJ/2YVNp5w+xof5zoFSbk6TeaAYu+nD7D8J2Fwwt3xzllNhNwbvIYc/0gbrRdRlOl72eiR8wOfJRxuKZSX70C92Zdngwxfqm2OtyrA5hW5cUNJX9OED1CxVh6QSPg7pYp5ocsHJeHusbqGnt5cgZk1Pgw4UA7FhXpcGlkYnxnYRPgW6emBODHsBchLlJB0mrAsQFMr/bh2v1tmFnjySB6w+oaz1NL386pxc8923W3CiNgtqMX0+xeLQCbav3bid4ocOAyJmTn3cLH5bjVOZES7hrWCM8zLm/mNFzHrLoeTC7r1AKQ5MAlRI/kHB9ZyYSsYxz4bOYVanWgAvDVj//GrLpuXFfcgetLLt4g8Y6F43IqZJNW/I4NaLOfWuHRZj/F1nUhopsyd+AZyuEoE7IlhnVaFUYqYJBxZf6aZj6j2oeJB9ox4WA7bq72J83bvLlxaAUVcGUu285YkMU5iluO9t0yX+PHde9d0GbfVOn9NaLZz20YedfiDGCsKtcZwJxPr+O2+kHccqRfM65ksnsx8WCHZj75kKeXRMrWowNH7tw01pVZ26297+tLLmrGEw60YarNe57cDwWO3mUbPrg0kVjcgbEqVeET9rdrppUSD7bjS6WXhk01fYVkIUhy4BKT3X8qtaKrNbXCcy4mZfO2miq7z2yq8n9kdvTr99RnYGBgYGAQxR8emJB2ymVVPEl5svDxHWHNMwHuaB9kHrQoB1dQ89m2q6tzGwI3ov2AD1rKY1Z135oZAUgv712VavPdtPCxqD/kg5LypjxmHv5rZdAs2FjmPa8OFcllHkwu64ozebSjcUq594+wdcBk76lLKfedTSn3t8aXfGfTqno+DGvewMDAwMDAICgOBz5i4bCdOmEfFbA/JuWEfcw5XmjlY5npLfgYWSiKzuBixuUv0d7KzkuqL4DLb9Q/xPcdAMbH86NuKEKpv9Eph5L7CoCFy13RNrIAaog4AFn1fWtMFf5RU2UPxrIyqnvxteMjobPBJd+JOAgZVb60lHLvb8mHui7EqjYe8lx8sbSzL6uuPxD8dYAB1V9M4p1s29XVFh44GTwTpJ3olQJxfRUV0qFaZKhrInW28YzDt0GCcI7ote2FcXl5SnWfJQh3mqSmZcB/ak9D9PlrNUyfzTm3yU1WnjPwNNFjoySbudmZc6PkZOWfGH6K6LFVls0MwJD5CwzZB3C7aXp6EQwQPTdLs5mGPg8xfun0jvE5ZU0so7XBBVvaOHyf44a12iDERVTIV4KaF4BWl9xD9Epug3yWCQkht7thPpi4nS1tuv+IigoojuQsQLmUue4x/XWJB4NxODZf81SMvU7iCSrkbsrhn9kDINvUCkLiEWsTPkGFrGAcfqdCTkyq9KNMyB9UkHT/zs8H9ensQ3HaMyALx/+3D7ZD/gBhKQAAAABJRU5ErkJggg==';
    let wind = document.createElement('p');
    wind.innerHTML = 'wind '+data.current.wind_kph+'kph';
    divWind.appendChild(imgWind);
    divWind.appendChild(wind);
    main.appendChild(divWind);

    // we append the button at the end
    main.appendChild(but);
}
