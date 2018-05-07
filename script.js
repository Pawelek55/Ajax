
//W Javascript
//definicja funckcji ajax - dwuparametrowa funkcja
function ajax(method, url){
//    tworzymy instancje obiektu XMLHttpRequest - bez tego nie ma AJAX, nie możemy połączyć się z serwerem
    let httpReq = new XMLHttpRequest();
    
//    otwieramy połączenie z serwerem
    httpReq.open(method, url);
    
    
//    jesli status poloczenia został zmieniony 
//    0 : połączenie nie nawiązane,
//    1 : połączenie nawiązane,
//    2 : żadanie odebrane,
//    3 : przetwarzanie,
//    4 : dane zwrócone i gotowe do użycia,
    
    httpReq.onreadystatechange = function (){
        
//        jeżeli 4: dane zwrócone i gotowe do użycia
        if(httpReq.readyState == 4){
            
//            sprawdzamy kod statusu połączenia - 200 ok
            if(httpReq.status == 200){
                
//                nowa zmienna, która będzie przetrzymywać zwrócone dane 
                
                let returnData = httpReq.responseText;
                
//                dodajemy metodę do obiektu
                httpReq.onsuccess(returnData);
                
//                 zamknięcie połączenia z serwerem
                httpReq = null;
            }
        }
    }
    
//    powyższy kod gwarantuje połączenie z serwerem
    
    httpReq.onsuccess = function(response){
//        tworzymy nową zmienną, która text przetworzy do formatu JSON
        let jsonObj = JSON.parse(response);
        console.log(jsonObj.userId);
        
//        1.Tworze nowy element - paragraf
//        2. Ustawiamy atrybut klasy dla nowego elementu (klasa = 'nowa')
//        3.Ustawiamy text/html wewnątrz nowego elementu (innerText/innerHTML);
//        4. wstawiamy element do html
    }
    
//    wysyłanie żądania do serwera
    httpReq.send();
}

//wywołanie funkcji ajax

ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');