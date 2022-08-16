#include <stdio.h>
int main(void) {
    char str[101];
    gets(str);
    printf("welcome! %s", str);
}