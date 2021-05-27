export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {        
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/sw.js').then(function (registration) {          
                console.info('[ServiceWorker] Registered', registration);

                if (navigator.onLine) {
                    updateConnectionStatus(true);
                } else {
                    updateConnectionStatus(false);
                }                        

                window.addEventListener('online', online);
                window.addEventListener('offline', offline);

            }).catch(function (err) {
                console.error('[ServiceWorker] Failed', err);    
            });
        });
    }
}

/* funcoes para verificar se estou online */
const updateConnectionStatus = (connected) => {
    console.log('ok = ' + connected);

    var el = document.querySelector('#offline');
    var el1 = document.querySelector('#online');    

    if(el === null)
        return ;
        
    if (connected) {
        if (el.classList !== null) {        
            el.classList.add('d-none');                 
            el1.classList.remove('d-none');
        } else {            
            el.addClass('d-none');            
            el1.removeClass('d-none');
        }
    } else {
        if (el.classList !== null) {            
            el.classList.remove('d-none');         
            el1.classList.add('d-none');
        } else {            
            el.removeClass('d-none');            
            el1.addClass('d-none');
        }        
    }        
}

const online = () => {
    updateConnectionStatus(true);
}

const offline = () => {
    updateConnectionStatus(false);
}
