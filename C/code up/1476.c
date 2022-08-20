#include <stdio.h>
int main(void) 
{
    int n,m,i,j,k;
    int count=1;
    int arr[101][101] = {0, };
    scanf("%d %d", &n,&m);
    for(i=0;i<n+m-1;i++) {
        for(j=0;j<m;j++) {
            for(k=0;k<n;k++) {
                if(j+k == i) {
                    arr[j][k] = count++;
                    break;
                }
            }
        }
    }
    for(i=0;i<n;i++) {
        for(j=0;j<m;j++) {
            printf("%d ", arr[j][i]);
        }
        printf("\n");
    }
}