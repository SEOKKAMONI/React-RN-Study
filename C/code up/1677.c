#include <stdio.h>
int main(void) 
{
    int i,j,a,b;
    scanf("%d %d", &a,&b);
    for(i=1;i<=b;i++) {
        for(j=1;j<=a;j++) {
            if((i == 1 || i == b) && (j == 1 || j == a)) {
                printf("+");
            }
            else if(i == 1 || i == b) {
                printf("-");
            }
            else if(j == 1 || j == a) {
                printf("|");
            }
            else {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}