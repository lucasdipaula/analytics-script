const api = 'http://localhost:5001/tcc-analytics-tool-backend/us-central1/app/api'
console.log("Started Analytics!")
function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return ('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return ('Chrome');
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        return ('Safari');
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return ('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        return ('IE');
    }
    else {
        return ('unknown');
    }
}

function detectDeviceType() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return "mobile";
    } else {
        return "desktop";
    }
}
const accessData = {
    'mainDomain': '',
    'date': '',
    'navigator': '',
    'deviceType': '',
    'url': '',
};

accessData.mainDomain = window.location.host;
accessData.date = new Date();
accessData.navigator = getBrowser();
accessData.deviceType = detectDeviceType();
accessData.url = window.location.href;
async function register() {
    await fetch(`${api}/site/access`, {
        method: 'PATCH',
        body: JSON.stringify(accessData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

register();
