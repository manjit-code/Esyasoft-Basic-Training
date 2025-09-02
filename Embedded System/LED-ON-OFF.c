#include<stdio.h> // Standard input/output library (for printf)

#define LED_PIN 5 // Example LED pin number

// Function to simulate a delay (blocking delay)
void delay_ms(int ms){
    volatile long i,j;
    j = 1000000;
    for(i = 0; i < j; i++){
        i++;
    }
}

int main(){
    int counter = 0; // Initialize counter variable
    int max_blinks = 5; // Maximum number of blinks
    int threshold = 3; // Threshold for conditional check
    int blink_counter = 0; // Initialize blink counter variable

    // Loop to blink the LED
    while(counter <= threshold && blink_counter < max_blinks){
        printf("LED ON (Counter: %d)\n", counter);
            delay_ms(200);
        printf("LED OFF (Counter: %d)\n", counter);
            delay_ms(200);
        counter+=1;

        blink_counter += 1;
    }
    // If the counter is at or above the threshold
    if(counter > threshold){
        printf("Counter reached threshold or above: %d\n", counter);
    }
    // If the blink counter is at or above the max blink limit
    if(blink_counter > max_blinks){
      printf("Blinks reached max blinks! %d\n");
    }

    printf("Blinking sequence completed.\n");

}