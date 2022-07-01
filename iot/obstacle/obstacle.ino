int LED = 4;
int capteur = 27;
int detection = HIGH;


// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED, OUTPUT);
  pinMode(capteur, INPUT);
}

// the loop function runs over and over again forever
void loop() {
  detection = digitalRead(capteur);
  if (detection == LOW){
    Serial.println("OBSTACLE");
    digitalWrite(LED, HIGH);
  } else {
    Serial.println("rien");
    digitalWrite(LED, LOW);
  }
     // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
}
