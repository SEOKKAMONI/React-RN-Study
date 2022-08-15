#include <stdio.h>
int main(void)
{
    int n, i, j;
    int num[100001];
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        scanf("%d", &num[i]);
    }
    for (i = 1; i <= n; i++)
    {
        printf("%d: ", i);
        for (j = 1; j <= n; j++)
        {
            if (i != j)
            {
                if (num[i] > num[j])
                {
                    printf("> ");
                }
                else if (num[i] == num[j])
                {
                    printf("= ");
                }
                else
                {
                    printf("< ");
                }
            }
        }
        printf("\n");
    }
}