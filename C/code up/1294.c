#include <stdio.h>
int main(void) {
    char str;
    while (~scanf("%c", &str))
    {
        if(str == 'x') {
            printf("a");
        }
        else if(str == 'y') {
            printf("b");
        }
        else if(str == 'z') {
            printf("c");
        }
        else if(str == ' ') {
            printf(" ");
        }
        else {
            printf("%c", str + 3);
        }
    }
    
}