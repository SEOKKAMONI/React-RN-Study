#include <stdio.h>
int main(void) {
    int n,i,j;
    scanf("%d", &n);
    for(i=0;i<n;i++) {
        for(j=0;j<(n-i)-1;j++) {
            printf(" ");
        }
        printf("*");
        for(j=0;j<=(i*2)-1;j++) {
            printf(" ");
        }
        printf("*");
        printf("\n");
    }
    for(i=n;i>0;i--) {
        for(j=i;j<n;j++) {
            printf(" ");
        }
        printf("*");
        for(j=0;j<=(i*2)-3;j++) {
            printf(" ");
        }
        printf("*");
        printf("\n");
    }
}