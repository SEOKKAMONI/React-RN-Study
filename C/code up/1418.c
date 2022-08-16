#include <stdio.h>
int main(void) 
{
    char str[101];
    int i;
    scanf("%s", str);
    for(i=0;str[i]!=NULL;i++) {
        if(str[i] == 't') {
            printf("%d ", i+1);
        }
    }

}