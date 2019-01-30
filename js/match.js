/*
 * KRAV FÖR DENNA FIL ÄR ATT JQUERY MÅSTE LADDAS IN INNAN DENNA FIL
*/

//variabel för match.js filen
let jsonData;
let lagEttNamn;
let lagTvaNamn;

//Funktion för att ladda match
//num int, id för den specifika matchen

function loadMatch(num){
	//skapa ett anslutnings objekt
	var xhttp = new XMLHttpRequest();

	//välj fil att ansluta till
	xhttp.open("POST", "php/getMatchInfo.php", true);
	//post, typ
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Skicka förfrågan med bunden variabel
    xhttp.send("id=" +num);

    //vänta på svar
    xhttp.onreadystatechange = function() {
        //Kontrollera att rätt typ av svar skickas
        if ( this.readyState == 4 && this.status == 200 ) {
            //Hämta response texten
            jsonData = this.responseText;
            
            //Kolla ifall svaret innehåller error
            if ( jsonData.includes('fel') ) {
                window.location.href = "php/error.php?error-msg=Fel vid hämtning av match!";
            }

            //Gör om svaret till JSON
            jsonData = JSON.parse(jsonData);

            
            //kolla jsonData
            console.log(jsonData);


        }
    };
	
	//hämta lagnamn.


}


function hamtaLagnamn(lagIdEtt, lagIdTva){
	//Skapa ett anslutnings objekt
    var xhttp = new XMLHttpRequest();

    //Välj fil att ansluta till
    xhttp.open("POST", "php/getTeamInfo.php", true);
    //POST typ
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //Skicka förfrågan med bunden variabel
    xhttp.send("team-id=" + num + "&search-team=" + str.trim());

    //Vänta på svar
    xhttp.onreadystatechange = function() {
        //Kontrollera att rätt typ av svar skickas
        if ( this.readyState == 4 && this.status == 200 ) {
            //Hämta response texten
            jsonData = this.responseText;
            
            //Kolla ifall svaret innehåller error
            if ( jsonData.includes('fel') ) {
                window.location.href = "php/error.php?error-msg=Fel vid hämtning av lagnamn!";
            }

            //Gör om svaret till JSON
            jsonData = JSON.parse(jsonData);



        }
    };


}