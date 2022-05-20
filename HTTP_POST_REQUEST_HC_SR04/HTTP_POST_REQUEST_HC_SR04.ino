#include <WiFi.h>
#include <HTTPClient.h>


#define PIN_TRIGGER 2 
#define PIN_ECHO 4 

long dure_signal , distance_signal;

int httpResponseCode;

String serverPath;

    // DEFINITION DES IDENTIFIANTS DE CONNEXION WIFI
const char* ssid = "ETECH CENTER";
const char* password = "abc1234#";

   //Votre nom de domaine avec chemin URL ou adresse IP avec chemin
//String serverName = "http://192.168.1.106:1880/update-sensor";
//String serverName = "https://www.mathworks.com/mwaccount/widgets/embedded/register/verify/7365677e-9573-4df1-88c4-e38d1b515e5d";

String serverName = "https://solar-space-572494.postman.co/me/apis";

    //les variables suivantes 
    //sont des longueurs non signées car le temps, mesuré en 
    // millisecondes, deviendra rapidement un nombre plus
    //grand que celui qui peut être stocké dans un int.
unsigned long lastTime = 0;
    
unsigned long timerDelay = 5000; // 5 secondes

void setup() {
  Serial.begin(9600); 

  pinMode(PIN_TRIGGER, OUTPUT);
  pinMode(PIN_ECHO,INPUT );

//CONNEXION WIFI
  WiFi.begin(ssid, password);
  Serial.println("Connection");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500); 
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connecté au réseau WiFi avec adresse IP : ");
  Serial.println(WiFi.localIP());
 
  Serial.println("il faudra attendre 5 secondes avant de publier la première lecture.");
}

void loop() {

   mesureDistance(); // appel de la fontion qui mesure la distance
  
  //Envoyer une requête HTTP POST toutes les 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Vérifier l'état de la connexion Wi-Fi
    if(WiFi.status()== WL_CONNECTED){

      WiFiClient client;  
      
      HTTPClient http;

      // DOMAINE
      http.begin(client, serverName);

      // SPECIFICATION DU TYPE DE CONTENU EN-TETE
      http.addHeader("Content-Type", "application/json");
      
      //ENVOI DE LA REQUETTE HTTP POST
      //int httpResponseCode = http.POST("{\"api_key\":\"tPmAT5Ab3j7F9\",\"sensor\":\"BME280\",\"value1\":\"24.25\",\"value2\":\"49.54\",\"value3\":\"1005.14\"}");

      //ENVOI DE LA REQUETTE HTTP POST
        if(distance_signal < 20){
          Serial.println("{");
          Serial.println("          \"etat\": 1-OCCUPE,");
          Serial.print("            \"numeroPlaceOccupe\": 10");
          Serial.println("}");
          Serial.println("  ");
            //ENVOI DE LA REQUETTE HTTP POST place occupé
          httpResponseCode = http.POST("{\"numeroPlaceOccupe\":\"10\",\"etat\":\"1-OCCUPE\"}");

            delay(5000); // attendre 5 seconde
           }
           else {
               Serial.println("{");
               Serial.println("              \"etat\": 0-LIBRE,");
               Serial.println("              \"numeroPlaceLibre\": 10");
               Serial.println("}");
               Serial.println("  ");
                 //ENVOI DE LA REQUETTE HTTP POST place libre
               httpResponseCode = http.POST("{\"numeroPlaceOccupe\":\"10\",\"etat\":\"1-OCCUPE\"}");
 
              delay(5000); // attendre 5 seconde
  }

   Serial.print("code de reponse HTTP : ");
   Serial.println(httpResponseCode);
 
   
      http.end();
    }
    else {
      Serial.println("Wi-Fi déconnecté");
    }
    lastTime = millis();
  }
}


void mesureDistance(){
  digitalWrite( PIN_TRIGGER , LOW);
  delayMicroseconds(2); // on patiente 2 microsecode pourque le capteur soit bien à 0
  digitalWrite( PIN_TRIGGER , HIGH);  // on envoi un signal de 10 microseconde (debut)  ****EMISSION ULTRASONNIC****
  delayMicroseconds(10);              // on envoi un signal de 10 microseconde
  digitalWrite( PIN_TRIGGER , LOW);   // on envoi un signal de 10 microseconde (fin)
  dure_signal = pulseIn(PIN_ECHO, HIGH);  // ici on capte la pulsation ****RECEPTION ULTRASONNIC****
  //Serial.print(dure_signal);
  distance_signal = dure_signal / 58 ;
  //Serial.print(distance_signal);
}
