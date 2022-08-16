#include <stdio.h>
int main(void) {
    char str[10001];
    int i,hab=0;
    scanf("%s",&str);
    for(i=0;str[i]!=NULL;i++) {
        hab+=str[i];
    }
    if(hab % 3 == 0) {
        printf("1");
    } else {
        printf("0");
    }
    
}