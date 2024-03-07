function getCookie(name) {
    const cookieArray = document.cookie.split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}
function setCookie(name, value, daysToExpire, isHttpOnly) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    if(isHttpOnly === true){
        const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; domain=renansites.rf.gd; HttpOnly;`;
        document.cookie = cookieValue;
        console.log("Secured HttpOnly cookie is created!");
    }
    else {
        const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/;`;  
        document.cookie = cookieValue;
    }
}
function setMultiCookie(name, values, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    const cookieValue = `${name}=${values.join('&')}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
}

function getMultiValueCookie(name) {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].split('=');
        if (cookie[0] === " " + name) {
            return cookie[1].split('&');
        }
    }
    return null;
}