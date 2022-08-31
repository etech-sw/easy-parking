//conexion wifi
#include <WiFi.h>
//recuperer le time
#include <NTPClient.h>
#include <WiFiUdp.h>
//requettes
#include <HTTPClient.h>
//format json
#include <ArduinoJson.h>
//inclusion cervo
#include <Servo.h>
//lcd
#include <LiquidCrystal_I2C.h>
//inclusion ultrasonic
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701

//connexion wifi
const char* ssid = "TKE";
const char* password =  "12345678910"; // Wifi Password
//const char* serverName = "http://172.20.10.6:5000/parking"; http://192.168.43.15:5000/parking, http://192.168.43.15:5000/parking
const char* serverName = "http://192.168.43.15:5000/parking";

unsigned long lastTime = 0;
unsigned long timerDelay = 5000;

// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// Variables to save date and time
String formattedDate;
String dayStamp;
String timeStamp;

//places parking 
int parking_id1=1;
int parking_id2=2;
//place 1
int slot_id1=1;
String slot_type1="voiture";
int slot_status_libre=0;
int slot_status_ocuupe=1;

//place 2
int slot_id2=2;
String slot_type2="voiture";

//place 3
int slot_id3=3;
String slot_type3="Handicape";



// set the LCD number of columns and rows
int lcdColumns = 16;
int lcdRows = 2;

// set LCD address, number of columns and rows
// if you don't know your display address, run an I2C scanner sketch
LiquidCrystal_I2C lcd(0x3F, lcdColumns, lcdRows);  
//ultrasonic

const int trigPin2 = 15;
const int echoPin2 = 17;

const int trigPin3 = 32;
const int echoPin3 = 12;

const int trigPin4 = 25;
const int echoPin4 = 13;

const int trigPin5 =4 ;
const int echoPin5 = 5;

const int trigPin6 =18 ;
const int echoPin6 = 2;

long duration1;
float distanceCm1;
float distanceInch1;

//DETECTEUR D'obstacle sortie

int capteurS = 26;
int detection = HIGH;

//DETECTEUR D'obstacle entree

int capteurE = 19;

/*const int trigPinE = 27;
const int echoPinE = 19;


const int trigPinS = 33;
const int echoPinS = 26;*/

//servo
static const int servo =23;
static const int servoS =16;
Servo servo1;
Servo servo2;
//tableu   
  
int p[3];
int state[3];
String tab[3];
int p4;
int p5;




void setup() {
  
  Serial.begin(115200); 
  tab[0]="..";
  tab[1]="..";
  tab[2]=".."; 
   // initialize LCD
  lcd.init();
  // turn on LCD backlight                      
  lcd.backlight();
    lcd.setCursor(0, 0);
  lcd.print("Etech Parking");
   //servo
   servo1.attach(servo);
   servo2.attach(servoS);
   fermer_portail();
   fermer_portailS();
    WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // Initialize a NTPClient to get time
  timeClient.begin();
  timeClient.setTimeOffset(3600); 
}

void loop() {
  // req(); 
  p[0]=statut_place(trigPin2,echoPin2);
  p[1]=statut_place(trigPin3,echoPin3);
  p[2]=statut_place(trigPin4,echoPin4);
  p4=statut_place(trigPin5,echoPin5);
  p5=statut_place(trigPin6,echoPin6);
  lcd.setCursor(0, 0);
  lcd.print("Etech Parking");
  if (p[0]==0){
  tab[0]="A1";
  }
  if (p[1]==0){
  tab[1]="A2";
  }
  if (p[2]==0){
  tab[2]="A3";
  }
  if(tab[0]==".." && tab[1]==".."&& tab[2]==".."){
    lcd.setCursor(0,1);
    lcd.print("plein...");
    }
    else { 
  for (int y=0;y<3;y++){
  lcd.setCursor(0,1);
  lcd.print("libre:"+tab[y]);
  delay(500);
  }
    }
  tab[0]="..";
  tab[1]="..";
  tab[2]="..";
  
   if (capteur_enter(capteurS)==1 )
  {
   ouvrir_portailS();
   }else {
    fermer_portailS(); 
    }

   if (capteur_enter(capteurE)==1 && nombre_place_libre(p)>=1 )
  {
   ouvrir_portail();
   }
   else {
    fermer_portail(); 
   }
 if (p[0]!=statut_place(trigPin2,echoPin2)){
  if (p[0]==0){
     req(parking_id1,slot_id1,slot_status_ocuupe,slot_type1 ); 
         }
   else{
     
       req(parking_id1,slot_id1,slot_status_libre,slot_type1 );
    }
}

 if (p[1]!=statut_place(trigPin3,echoPin3)){
  if (p[1]==0){
    req(parking_id1,slot_id2,slot_status_ocuupe,slot_type2 ); 
         }
   else{
      
      req(parking_id1,slot_id2,slot_status_libre,slot_type2 );
    }
    }
    if (p[2]!=statut_place(trigPin4,echoPin4)){
  if (p[2]==0){
    req(parking_id1,slot_id3,slot_status_ocuupe,slot_type3 ); 
            }
   else{
      
      req(parking_id1,slot_id3,slot_status_libre,slot_type3 );
    }
    }
    if (p4!=statut_place(trigPin5,echoPin5)){
  if (p4==0){
    req(parking_id2,slot_id1,slot_status_ocuupe,slot_type1 ); 
            }
   else{
      
      req(parking_id2,slot_id1,slot_status_libre,slot_type1 );
    }
    }

if (p5!=statut_place(trigPin6,echoPin6)){
  if (p5==0){
    req(parking_id2,slot_id2,slot_status_ocuupe,slot_type1 ); 
            }
   else{
      
      req(parking_id2,slot_id2,slot_status_libre,slot_type1 );
    }
    }
/*
if (p[0]!=statut_place(trigPin2,echoPin2)){
  if (p[0]==0){
    req(parking_id1,slot_id1,slot_status_libre1,slot_type1 );
         }
   else{
      req(parking_id1,slot_id1,slot_status_ocuupe1,slot_type1 ); 
    }
}

 if (p[1]!=statut_place(trigPin3,echoPin3)){
  if (p[1]==0){
    req(parking_id1,slot_id2,slot_status_libre2,slot_type2 );
         }
   else{
      req(parking_id1,slot_id2,slot_status_ocuupe2,slot_type2 ); 
    }
    }
    if (p[2]!=statut_place(trigPin4,echoPin4)){
  if (p[2]==0){
    req(parking_id1,slot_id3,slot_status_libre3,slot_type3 );
         }
   else{
      req(parking_id1,slot_id3,slot_status_ocuupe3,slot_type3 ); 
    }
    }*/
}







//fonctions

int capteur_enter(int capteur){

  pinMode(capteur, INPUT);
  
  detection = digitalRead(capteur);
  if (detection == LOW){
   return 1;
  } else {
    return 0;   
  }
}




//servo

void ouvrir_portail(){
  servo1.write(150);
 // delay(500);
}

void fermer_portail(){
  //delay(500);
        servo1.write(0);
}

void ouvrir_portailS(){
  servo2.write(0);
  // delay(500);
}

void fermer_portailS(){
       // delay(500);
        servo2.write(150);
}



//capteur ultra sonic
int statut_place(int trigPin1, int echoPin1){
  pinMode(trigPin1, OUTPUT); 
  pinMode(echoPin1, INPUT);
    

  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);
  
  
  duration1 = pulseIn(echoPin1, HIGH);
  distanceCm1 = duration1 * SOUND_SPEED/2;
  distanceInch1 = distanceCm1 * CM_TO_INCH;

  if (distanceCm1<=10){
    return 1;
    }
  else{
    return 0  ;
  }
  
  }


int nombre_place_libre(int parking[3]){

  int nb_libre=0;
  for (int i =0;i<3;i++){
   if (parking[i]==0){
    nb_libre=nb_libre+1;
    }
    
    }
return nb_libre;
    
}

int nombre_place_occupe(bool parking[3]){

  int nb_occupe=0;
  for (int i =0;i<3;i++){
   if (parking[i]==1){
    nb_occupe=nb_occupe+1;
    }
    
    }
return nb_occupe;
    
}
//time


String temps(){
   while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // 2018-05-28T16:00:13Z
  // We need to extract date and time
  formattedDate = timeClient.getFormattedDate();
  return formattedDate;  
  }

//requettes
void req(int pa,int si,int ss,String st ){
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      // Your Domain name with URL path or IP address with path
      //http.begin(client, serverName);
      while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // 2018-05-28T16:00:13Z
  // We need to extract date and time
  formattedDate = timeClient.getFormattedDate();  
      
WiFiClient client;  // or WiFiClientSecure for HTTPS
HTTPClient http;
// Send request
http.begin(client, serverName);
http.addHeader("Content-Type", "application/json");
DynamicJsonDocument doc(2048);
doc["parking_id"] =pa;
doc["slot_id"] =si;
doc["door_id"] ="";
doc["slot_status"] = ss;
doc["slot_type"] = st;
doc["door_status"] ="";
doc["created_at"] ="";
/*//doc["created_at"] =temps() ;
//doc["parking_id"] =p;
doc["parking_id"] =1;
doc["slot_id"] =1;
doc["door_id"] =1;
doc["slot_status"] =1;
doc["slot_type"] = "";
doc["door_status"] ="";
doc["created_at"] = "";
//doc["parking_id"] =p;*/

// Serialize JSON document
String json;
serializeJson(doc, json);

http.POST(json);

// Read response
Serial.print(http.getString());

// Disconnect
http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}


//lcd
/*void afficher(){
  lcd.setCursor(0, 0);
  lcd.print("etech Parking");
  if (p[0]==0){
    lcd.setCursor(0, 0);
    lcd.print("libre:A1");
  }
  if (p[1]==0){
   lcd.setCursor(0, 0);
  lcd.print("libre:A2");
  }
  if (p[2]==0){
   lcd.setCursor(0, 0);
  lcd.print("libre:A3");
  }
  if(p[0]==1 && p[1]==1&& p[2]==1){
    lcd.setCursor(0,1);
    lcd.print("plein...");
    }
  }
*/


//ancien affichage  dans le loop

  
 /* state[0]=p[0];
  state[1]=p[0];
  state[2]=p[0];
  if(p[0]==1 && p[1]==1&& p[2]==1){
    lcd.setCursor(0,1);
    lcd.print("*****plein******");
    }
    else{
  if (p[0]==0){
    lcd.setCursor(0, 1);
    lcd.print("libre:      ,A1 ");
  }
  if (p[1]==0){
   lcd.setCursor(0, 1);
  lcd.print("libre:   A2,    ");
  }
  if (p[2]==0){
   lcd.setCursor(0, 1);
  lcd.print("libre:A3,        ");
  
  }
   }*/

 //test capteurs



   /*Serial.println("PLACE 1");
Serial.println(statut_place(trigPin2,echoPin2));
Serial.println("PLACE 2");
Serial.println(statut_place(trigPin3,echoPin3));
Serial.println("PLACE 3");
Serial.println(statut_place(trigPin4,echoPin4));
Serial.println("PLACE 4");
Serial.println(statut_place(trigPin5,echoPin5));
Serial.println("PLACE 5");
Serial.println(statut_place(trigPin6,echoPin6));
Serial.println("Porte Entree");
Serial.println(capteur_enter(capteurE));
Serial.println("Porte sortie");
Serial.println(capteur_enter(capteurS));
delay(500);*/
