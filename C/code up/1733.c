#include <stdio.h>
int main(void)
{
    char str[101];
    int i;
    scanf("%s", str);
    if (str[0] == 'I' && str[1] == 'O' && str[2] == 'I' && str[3] == NULL)
    {
        printf("IOI is the International Olympiad in Informatics.");
    }
    else
    {
        printf("I don't care.");
    }
}