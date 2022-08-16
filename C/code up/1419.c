#include <stdio.h>
int main(void) {
    char str[101];
    int i, love=0;
    gets(str);
    for(i=0;str[i]!=NULL;i++) {
        if(str[i] == 'l' && str[i+1] == 'o' && str[i+2] == 'v' && str[i+3] == 'e') {
            love++;
        }
    }
    printf("%d", love);
}