#include <stdio.h>
int main(void) {
    char str[101];
    int DaeC = 0 , SoC = 0, i;
    scanf("%s", &str);
    for(i=0;str[i]!=NULL;i++) {
        if((str[i] == 'c' || str[i] == 'C') && (str[i+1] == 'c' || str[i+1] == 'C')) {
            DaeC++;
        }
        if((str[i] == 'c' || str[i] == 'C')) {
            SoC++;
        }
    }
    printf("%d\n", SoC);
    printf("%d", DaeC);
}