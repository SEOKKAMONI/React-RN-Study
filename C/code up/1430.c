#include <stdio.h>
int main(void) {
    int n,m,i,j;
    int arr[10000001] = {0, };
    int num;
    scanf("%d", &n);
    for(i=0;i<n;i++) {
        scanf("%d", &num);
        arr[num] = 1;
    }
    scanf("%d", &m);
    for(i=0;i<m;i++) {
        scanf("%d", &num);
        printf("%d ", arr[num]);
    }
}