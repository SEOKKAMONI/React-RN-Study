#include <stdio.h>
int main(void)
{
    char str[91];
    int i, j, count;
    gets(str);

    for (i = 'a'; i <= 'z'; i++)
    {
        count = 0;
        for (j = 0; str[j] != NULL; j++)
        {
            if (i == str[j])
            {
                count++;                
            }
        }
        printf("%c:%d\n", i, count);
    }
}