#include <avr/io.h>
#include <util/delay.h>

#define LED_PIN PD3 // LED connected to digital pin 3
#define BUTTON_PIN PD2 // Button connected to digital pin 2


int main(void){
    DDRD |= (1 << LED_PIN); // LED pin as OUTPUT 
    DDRD &= ~(1 << BUTTON_PIN); // SET Button-PIN as INPUT
    PORTD |= (1 << BUTTON_PIN);

    while(1){
        if(!(PIND & (1 << BUTTON_PIN))){ // check if button is pressed -> LOW
            PORTD |= (1 << LED_PIN); // Turn On
            _delay_ms(500); 

            PORTD &= ~(1 << LED_PIN); // Turn Off
            _delay_ms(500);
        }
        else{ // Button not pressed -> Turn Off
            PORTD &= ~(1 << LED_PIN);
        }
    }

    return 0;
}
