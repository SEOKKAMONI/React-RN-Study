#include <stdio.h>
int main(void) {
    char str1[101]={0,}, str2[101]={0,};
    int i, str1Num=0, str2Num=0;
    scanf("%s %s", str1, str2);
    for(i=0;str1[i]!=NULL;i++) {
        str1Num++;
    }
    for(i=0;str2[i]!=NULL;i++) {
        str2Num++;
    }
    if(str2Num > str1Num) {
        printf("%s %s",str1, str2);
    }
    else if(str2Num < str1Num) {
        printf("%s %s",str2, str1);
    }
    else {
        for(i=0;i<str1Num;i++) {
            if(str1[i] > str2[i]) {
                printf("%s %s",str2,str1);
                return 0;
            } else if(str1[i] < str2[i]) {
                printf("%s %s",str1,str2);
                return 0;
            }
        }
    }
}