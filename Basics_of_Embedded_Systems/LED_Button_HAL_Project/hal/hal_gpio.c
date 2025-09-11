#include "hal_gpio.h"
#include "..\config\pin_config.h"

void hal_gpio_init(){
    *led_ddr = 0xff;
    *button_ddr = 0x00;
}

int hal_gpio_button_read(){
    return(*button_port & (1<<button_pin)?1:0);
}

void hal_gpio_digital_write(){
    int val = hal_gpio_button_read();
    _delay_ms(100);
    int val_check = hal_gpio_button_read();
    if(val==val_check){
    if(val) *led_port |= (1<<led_pin); else *led_port &= (0<<led_pin);
    }
}