// Stretch Goals:
// A simple C programme that simulates a counter controlled LED blinking system with button input control.

#include<stdio.h> // Standard input/output library (for printf)

int main(){

    int buttonClicked = 0;
    int threshold = 5;
    int blinks = 1;
    char clickBTN;

    while(blinks < threshold){
        printf("Click 'ENTER' to toggle LED.\n");
        scanf("%c", &clickBTN);
        if(clickBTN == '\n'){
            buttonClicked = ~buttonClicked;
            if(buttonClicked){
                printf("LED Turned ON! %d \n", blinks);
            }
            else{
                printf("LED Turned OFF! %d \n", blinks);
                blinks += 1;
            }
            if(blinks >= threshold){
                printf("\nMax Blinks Limit Reached !! \n");

                int userInp;
                printf("To reset counter, press 1 :) \nTo stop, press 0 :( \n");
                scanf("%d", &userInp);
                if(userInp) blinks = 0;
                else break;
            }
        }
        else break;
    }
    printf("Thank You for using our software !");
    return 0;
}