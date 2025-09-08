#include <avr/io.h>
#include <util/delay.h>

#define LED_PIN_OFF PD2
#define LED_PIN_ON PD5
#define LED_PIN_TOGGLE PD7

int main(){
    // DDRD decided the direction of signal : One-way: Towards LED only
    DDRD |= (1<<LED_PIN_ON);
    DDRD |= (1<<LED_PIN_OFF);
    DDRD |= (1<<LED_PIN_TOGGLE);

    // Deciding Output
    PORTD |= (1<<LED_PIN_OFF); // 1 = ON
    PORTD &= ~(1<<LED_PIN_ON); // 0 = OFF
    _delay_ms(1000);

    PORTD &= ~(1<<LED_PIN_OFF); // 0 = OFF
    PORTD |= (1<<LED_PIN_ON); // 1 = ON
   
    // Toggle the Toggle Pin LED
    while(1){
        PORTD ^= (1<<LED_PIN_TOGGLE);
        _delay_ms(1000);
    }

    // |= : Value will ON
    // &=~ : Value will OFF
    // ^= : Toggle
}