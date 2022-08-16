#include <stdio.h>
int main(void) {
    char s1[101],s2[101],s3[101];
    int s1F=0, s2F=0,s3F=0;
    int i;
    scanf("%s %s %s", s1,s2,s3);
    for(i=0;s1[i]!=NULL;i++) {
        s1F++;
    }
    for(i=0;s2[i]!=NULL;i++) {
        s2F++;
    }
    for(i=0;s3[i]!=NULL;i++) {
        s3F++;
    }

    if(s1[s1F-1] == s2[0] && s2[s2F-1] == s3[0] && s3[s3F-1] == s1[0]) {
        printf("good");
    }
    else {
        printf("bad");
    }
}