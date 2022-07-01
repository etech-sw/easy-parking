/*********
  Rui Santos
  Complete project details at https://RandomNerdTutorials.com/esp32-hc-sr04-ultrasonic-arduino/
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files.
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
*********/

const int trigPin1 = 34;
const int echoPin1 = 27;

const int trigPin2 = 35;
const int echoPin2 = 14;

const int trigPin3 = 32;
const int echoPin3 = 12;

const int trigPin4 = 25;
const int echoPin4 = 13;

//define sound speed in cm/uS
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701

 //parking1
long duration1;
float distanceCm1;
float distanceInch1;

 //parking2

long duration2;
float distanceCm2;
float distanceInch2;

 //parking3

long duration3;
float distanceCm3;
float distanceInch3;

 //parking4

long duration4;
float distanceCm4;
float distanceInch4;

void setup() {

  Serial.begin(115200); // Starts the serial communication
   //parking1
  pinMode(trigPin1, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin1, INPUT); // Sets the echoPin as an Input

   //parking2
   pinMode(trigPin2, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin2, INPUT); // Sets the echoPin as an Input

   //parking3
    pinMode(trigPin3, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin3, INPUT); // Sets the echoPin as an Input

   //parking4
   pinMode(trigPin4, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin4, INPUT); // Sets the echoPin as an Input
}

void loop() {

  //parking1
  // Clears the trigPin
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration1 = pulseIn(echoPin1, HIGH);
  
  // Calculate the distance
  distanceCm1 = duration1 * SOUND_SPEED/2;
  
  // Convert to inches
  distanceInch1 = distanceCm1 * CM_TO_INCH;

 //parking2
 
// Clears the trigPin
  digitalWrite(trigPin2, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin2, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration2 = pulseIn(echoPin2, HIGH);
  
  // Calculate the distance
  distanceCm2 = duration2 * SOUND_SPEED/2;
  
  // Convert to inches
  distanceInch2 = distanceCm2 * CM_TO_INCH;


   //parking3
 
// Clears the trigPin
  digitalWrite(trigPin3, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin3, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin3, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration3 = pulseIn(echoPin3, HIGH);
  
  // Calculate the distance
  distanceCm3 = duration3 * SOUND_SPEED/2;
  
  // Convert to inches
  distanceInch3 = distanceCm3 * CM_TO_INCH;

 //parking4
 
// Clears the trigPin
  digitalWrite(trigPin4, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin4, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin4, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration4 = pulseIn(echoPin4, HIGH);
  
  // Calculate the distance
  distanceCm4 = duration4 * SOUND_SPEED/2;
  
  // Convert to inches
  distanceInch4 = distanceCm4 * CM_TO_INCH;


  //parking1-result
  Serial.print("parking 1: ");
  // Prints the distance in the Serial Monitor
  Serial.print("parking 1:(cm): ");
  Serial.println(distanceCm1);
  //Serial.print("Distance (inch): ");
  //Serial.println(distanceInch);
  
  delay(1000);

//parking2-result
  Serial.print("parking 2: ");
  // Prints the distance in the Serial Monitor
  Serial.print("parking 2: (cm): ");
  Serial.println(distanceCm2);
  //Serial.print("Distance (inch): ");
  //Serial.println(distanceInch);
  
  delay(1000);

  //parking3-result
  Serial.print("parking 3: ");
  // Prints the distance in the Serial Monitor
  Serial.print("parking 3: (cm): ");
  Serial.println(distanceCm3);
  //Serial.print("Distance (inch): ");
  //Serial.println(distanceInch);
  
  delay(1000);

  //parking4-result
  Serial.print("parking 4: ");
  // Prints the distance in the Serial Monitor
  Serial.print("parking 4: (cm): ");
  Serial.println(distanceCm4);
  //Serial.print("Distance (inch): ");
  //Serial.println(distanceInch);
  
  delay(1000);

  
}
