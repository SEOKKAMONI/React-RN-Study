#include <stdio.h>
int main(void) {
    int n,i,j,temp=0;
    int score1[101];
    int score2[101];
    char name[101][101];
    scanf("%d", &n);
    for(i=0;i<n;i++) {
        scanf("%s %d",name[i], &score1[i]);
        score2[i] = score1[i];
    }

    for(i=0;i<n;i++) 
    {
        for(j=i+1;j<n;j++) 
        {
            if(score2[i] < score2[j]) {
                temp = score2[j];
                score2[j] = score2[i];
                score2[i] = temp;
            }
        }
    }

    for(i=0;i<n;i++) {
        if(score1[i] == score2[2]) {
            printf("%s", name[i]);
        }
    }
}