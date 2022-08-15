#include <stdio.h>
int main(void) {
    int n,i,j=0;
    int nam, mok=0;
    int arr[101];
    scanf("%d", &n);
    if(n == 0) {
        printf("0");
    }
    nam = n;
    while(nam > 0) {
        
        arr[j] = nam % 2;
        nam /= 2;
        j++;
    }
    for(i=j-1;i>=0;i--) {
        printf("%d",arr[i]);
    }
}