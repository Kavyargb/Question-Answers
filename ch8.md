## NCERT Solutions for Class 11 Maths Chapter 8: Binomial Theorem

This document provides solutions to exercises from the NCERT textbook for Class 11 Maths, Chapter 8: Binomial Theorem. The solutions aim to explain each step in detail, ensuring a clear understanding of the concepts and their application.

**Exercise 8.2**

**Question 1:** Find the coefficient of $x^5$ in the expression $(x + 3)^8$.

**Explanation:** This question requires us to find the specific term in the binomial expansion of  $(x + 3)^8$ that contains  $x^5$.  We'll use the general term formula of a binomial expansion and then identify the value of 'r' that gives us the desired term.

**Solution:**

The general term ($T_{r+1}$) in the binomial expansion of $(a + b)^n$ is given by:

$T_{r+1} = ^nC_r * a^{n-r} * b^r$

In our case,  $a = x$, $b = 3$, and $n = 8$. We want the term with $x^5$, so we need to find 'r' such that the power of 'x' in the general term is 5:

$x^{8-r} = x^5$

This implies $8 - r = 5$, therefore $r = 3$.

Now, substitute $r = 3$ into the general term formula:

$T_{3+1} = T_4 = ^8C_3 * x^{8-3} * 3^3$

$T_4 = ^8C_3 * x^5 * 27$

The coefficient of $x^5$ is  $^8C_3 * 27$ which is:

$^8C_3 * 27 = (8 * 7 * 6)/(3 * 2) * 27 = 56 * 27 = 1512$ 

Therefore, the coefficient of $x^5$ in the expansion of $(x + 3)^8$ is **1512**.

**Question 2:** Find the coefficient of $a^5b^7$ in $(a - 2b)^{12}$.

**Explanation:**  Similar to the previous question, we need to find the specific term containing $a^5b^7$ in the expansion of  $(a - 2b)^{12}$. We'll again utilize the general term formula.

**Solution:**

Here, $a = a$, $b = -2b$, and $n = 12$. We want the term with $a^5b^7$.  Notice that we need $b^7$ which comes from $(-2b)^7$.  Therefore, we need to find 'r' such that: 

$a^{12-r} * (-2b)^r = a^5b^7$

This implies $12 - r = 5$ and $r = 7$.

Substituting $r = 7$ into the general term formula:

$T_{7+1} = T_8 = ^{12}C_7 * a^{12-7} * (-2b)^7$

$T_8 = ^{12}C_7 * a^5 * (-128)b^7$

The coefficient of $a^5b^7$ is  $^{12}C_7 * (-128)$ which is:

$^{12}C_7 * (-128) = (12*11*10*9*8)/(5*4*3*2) * (-128) = -101376$

Therefore, the coefficient of  $a^5b^7$ in the expansion of  $(a - 2b)^{12}$ is **-101376**.

**Question 3:** Write the general term in the expansion of $(x^2 - y)^6$.

**Explanation:** This question asks for the general term formula itself, but applied to the specific binomial $(x^2 - y)^6$.

**Solution:**

The general term ($T_{r+1}$) in the binomial expansion of $(a + b)^n$ is:

$T_{r+1} = ^nC_r a^{n-r} b^r$

In this case,  $a = x^2$, $b = -y$, and $n = 6$.  Substituting these values:

$T_{r+1} = ^6C_r (x^2)^{6-r} (-y)^r$

Simplifying further:

$T_{r+1} = (-1)^r * ^6C_r * x^{12-2r} * y^r$

Therefore, the general term in the expansion of $(x^2 - y)^6$ is  **(-1)^r * ^6C_r * x^(12-2r) * y^r**.


**Question 4:** Write the general term in the expansion of $(x^2 - xy)^{12}$, where $x ≠ 0$.

**Explanation:**  Similar to Question 3, we need to find the general term formula for the given binomial expression.

**Solution:**

Here,  $a = x^2$, $b = -xy$, and $n = 12$. Applying the general term formula:

$T_{r+1} = ^{12}C_r * (x^2)^{12-r} * (-xy)^r$

Simplifying:

$T_{r+1} =  (-1)^r * ^{12}C_r * x^{24-2r} * x^r * y^r$

$T_{r+1} = (-1)^r * ^{12}C_r * x^{24-r} * y^r$

Therefore, the general term in the expansion of $(x^2 - xy)^{12}$ is  **(-1)^r * ^{12}C_r * x^(24-r) * y^r**.

**Question 5:** Find the 4th term in the expansion of $(x - 2y)^{12}$.

**Explanation:** This question asks for a specific term (the 4th term) in the expansion. We'll again use the general term formula.

**Solution:**

For the 4th term, $r + 1 = 4$, so  $r = 3$. 

We have  $a = x$, $b = -2y$, and $n = 12$. Applying the formula:

$T_4 = T_{3+1} = ^{12}C_3 * x^{12-3} * (-2y)^3$

$T_4 = ^{12}C_3 * x^9 * (-8)y^3$

$T_4 = -8 * ^{12}C_3 * x^9 * y^3$

Calculating the coefficient:

$-8 * ^{12}C_3 = -8 * (12*11*10)/(3*2) = -1760$

Therefore, the 4th term in the expansion of  $(x - 2y)^{12}$ is **-1760x^9y^3**.

**Question 6:** Find the 13th term in the expansion of $\left(9x - \frac{1}{3\sqrt{x}}\right)^{18}$, where $x ≠ 0$.

**Explanation:**  We'll find the 13th term of the binomial expansion using the general term formula.

**Solution:**

For the 13th term,  $r + 1 = 13$, so $r = 12$.

We have $a = 9x$, $b = -\frac{1}{3\sqrt{x}}$, and $n = 18$.  Substituting into the formula:

$T_{13} = T_{12+1} = ^{18}C_{12} (9x)^{18-12} \left(-\frac{1}{3\sqrt{x}}\right)^{12}$

Simplifying:

$T_{13} = ^{18}C_{12} * 9^6 * x^6 * \frac{1}{3^{12} * x^6}$

$T_{13} = ^{18}C_{12}$

Calculating the coefficient:

$^{18}C_{12} = (18*17*16*15*14*13)/(6*5*4*3*2) = 18564$

Therefore, the 13th term in the expansion is **18564**.

**Question 7:** Find the middle terms in the expansion of $\left(3 - \frac{x^3}{6}\right)^7$.

**Explanation:** This question focuses on the middle term(s) of a binomial expansion. Recall that when the power 'n' is odd, there is only one middle term. If 'n' is even, there are two middle terms.

**Solution:** 

Since the power is 7 (odd), there is one middle term, which is:

$(n+1)/2 = (7+1)/2 = 4th$ term.

So, we need to find the 4th term in the expansion. 

We have  $a = 3$, $b = -\frac{x^3}{6}$, and $n = 7$.  Applying the general term formula with $r = 3$:

$T_4 = T_{3+1} = ^7C_3 * 3^{7-3} * \left(-\frac{x^3}{6}\right)^3$

Simplifying:

$T_4 = - ^7C_3 * 3^4 * \frac{x^9}{6^3}$

$T_4 = - \frac{35 * 81}{216} * x^9$

$T_4 = -\frac{105}{8}x^9$

Therefore, the middle term in the expansion of $\left(3 - \frac{x^3}{6}\right)^7$ is  **- (105/8)x^9**.

**Question 8:** Find 'n' if the ratio of the fifth term from the beginning to the fifth term from the end in the expansion of  $\left(\sqrt[4]{2} + \frac{1}{\sqrt[4]{3}}\right)^n$ is  √6 : 1.

**Explanation:** This question combines the concept of finding specific terms in a binomial expansion with ratios. We'll find the fifth terms from the beginning and end, form their ratio, and solve for 'n'.

**Solution:**

- **Fifth term from the beginning (T₅):**

 Using the general term formula with $r = 4$,  $a = \sqrt[4]{2}$, and $b = \frac{1}{\sqrt[4]{3}}$:

$T_5 = ^nC_4 * (\sqrt[4]{2})^{n-4} * \left(\frac{1}{\sqrt[4]{3}}\right)^4$

$T_5 = ^nC_4 * 2^{(n-4)/4} * 3^{-1}$

- **Fifth term from the end (T_{n-5}):**

 The fifth term from the end is the same as the sixth term from the beginning of the expansion of  $\left(\frac{1}{\sqrt[4]{3}} + \sqrt[4]{2}\right)^n$.  Therefore, using the general term formula with $r = 5$:

$T_{n-5} = ^nC_5 * \left(\frac{1}{\sqrt[4]{3}}\right)^{n-5} * (\sqrt[4]{2})^5$

$T_{n-5} = ^nC_5 * 3^{-(n-5)/4} * 2^{5/4}$

- **Forming the ratio:**

The given ratio is:

 $\frac{T_5}{T_{n-5}} = \frac{^nC_4 * 2^{(n-4)/4} * 3^{-1}}{^nC_5 * 3^{-(n-5)/4} * 2^{5/4}} = \sqrt{6}$

Simplifying the ratio:

$\frac{n!/(4!(n-4)!) * 2^{(n-4)/4} * 3^{-1}}{n!/(5!(n-5)!) * 3^{-(n-5)/4} * 2^{5/4}} = \sqrt{6}$

$\frac{5 * 2^{(n-4)/4} * 3^{(n-5)/4}}{ (n-4) * 2^{5/4}} = \sqrt{6}$

$\frac{5 * 2^{(n-9)/4} * 3^{(n-5)/4}}{(n-4)} = \sqrt{6}$

- **Solving for 'n':**

 To get  √6 on the right side, we need  $2^{(n-9)/4} * 3^{(n-5)/4} = 6$. This happens when n = 10.

Therefore, the value of 'n' is **10**.

**Question 9:** Expand $\left(1 + \frac{x}{2} - \frac{2}{x}\right)^4$, where $x ≠ 0$ using Binomial Theorem.

**Explanation:** This question involves expanding a trinomial using the binomial theorem. We can do this by grouping two of the terms and applying the binomial theorem twice.

**Solution:**

- **Grouping terms and applying binomial theorem (first time):**

  Group the first two terms:
  $\left(1 + \frac{x}{2} - \frac{2}{x}\right)^4 = \left[\left(1 + \frac{x}{2}\right) - \frac{2}{x}\right]^4$

  Now, apply the binomial theorem treating $\left(1 + \frac{x}{2}\right)$ as one term and $-\frac{2}{x}$ as the other:

   $\left[\left(1 + \frac{x}{2}\right) - \frac{2}{x}\right]^4 = ^4C_0 \left(1 + \frac{x}{2}\right)^4 + ^4C_1 \left(1 + \frac{x}{2}\right)^3 \left(-\frac{2}{x}\right) + ^4C_2 \left(1 + \frac{x}{2}\right)^2 \left(-\frac{2}{x}\right)^2 + ^4C_3 \left(1 + \frac{x}{2}\right) \left(-\frac{2}{x}\right)^3 + ^4C_4 \left(-\frac{2}{x}\right)^4$

- **Applying binomial theorem (second time):** 

   Now, expand the terms $\left(1 + \frac{x}{2}\right)^4$, $\left(1 + \frac{x}{2}\right)^3$, and $\left(1 + \frac{x}{2}\right)^2$ using the binomial theorem again.

   After expanding and simplifying, we get:

    $\left(1 + \frac{x}{2} - \frac{2}{x}\right)^4 = \frac{x^4}{16} + x^3 + \frac{2}{x^2} + \frac{8}{x} -\frac{32}{x^3} + \frac{16}{x^4}  -4x - 2 + \frac{24}{x^2} + 1 $

    $\left(1 + \frac{x}{2} - \frac{2}{x}\right)^4 =  \frac{16}{x^4} -\frac{32}{x^3} + \frac{26}{x^2} + \frac{8}{x} - 1 - 4x +  x^3 +  \frac{x^4}{16}$
Therefore, the expansion of $\left(1 + \frac{x}{2} - \frac{2}{x}\right)^4$ is $\frac{16}{x^4} -\frac{32}{x^3} + \frac{26}{x^2} + \frac{8}{x} - 1 - 4x +  x^3 +  \frac{x^4}{16}$.

**Question 10:** Find the expansion of  $(3x^2 - 2ax + 3a^2)^3$ using the binomial theorem.

**Explanation:**  Similar to Question 9, we'll expand a trinomial using the binomial theorem twice by grouping terms.

**Solution:** 

- **Grouping terms and applying binomial theorem (first time):**

   Group the first two terms:
  $(3x^2 - 2ax + 3a^2)^3 = [(3x^2 - 2ax) + 3a^2]^3$

  Now, apply the binomial theorem:

  $[(3x^2 - 2ax) + 3a^2]^3 = ^3C_0 (3x^2 - 2ax)^3 + ^3C_1 (3x^2 - 2ax)^2 (3a^2) + ^3C_2 (3x^2 - 2ax) (3a^2)^2 + ^3C_3 (3a^2)^3$

- **Applying binomial theorem (second time):**

    Expand the terms  $(3x^2 - 2ax)^3$, $(3x^2 - 2ax)^2$ using the binomial theorem.

    After expanding and simplifying, we get:

    $(3x^2 - 2ax + 3a^2)^3 = 27x^6 - 54ax^5 + 117a^2x^4 - 116a^3x^3 + 117a^4x^2 - 54a^5x + 27a^6$

Therefore, the expansion of  $(3x^2 - 2ax + 3a^2)^3$ is $27x^6 - 54ax^5 + 117a^2x^4 - 116a^3x^3 + 117a^4x^2 - 54a^5x + 27a^6$. 

**Question 11:** Prove that the coefficient of $x^n$ in the expansion of $(1 + x)^{2n}$ is twice the coefficient of $x^n$ in the expansion of $(1 + x)^{2n-1}$.

**Explanation:** We need to prove a relationship between specific terms in two different binomial expansions. We'll find the general term for both expansions, focus on the terms with $x^n$, and compare their coefficients.

**Solution:**

- **Finding the coefficient of $x^n$ in $(1 + x)^{2n}$ :**

   Using the general term formula with $a=1$, $b=x$ and replacing 'n' with '2n' and 'r' with 'n', we get:

   $T_{n+1} = ^{2n}C_n * 1^{2n-n} * x^n = ^{2n}C_n * x^n$

   Therefore, the coefficient of $x^n$ in $(1 + x)^{2n}$ is $^{2n}C_n$.

- **Finding the coefficient of $x^n$ in $(1 + x)^{2n-1}$ :**

   Again, using the general term formula with $a=1$, $b=x$, but this time replacing 'n' with '2n-1' and 'r' with 'n', we get:

  $T_{n+1} = ^{2n-1}C_n * 1^{2n-1-n} * x^n = ^{2n-1}C_n * x^n$

   Therefore, the coefficient of $x^n$ in $(1 + x)^{2n-1}$ is  $^{2n-1}C_n$.

- **Proving the relationship:**

   We need to prove that  $^{2n}C_n = 2 * ^{2n-1}C_n$.  Let's simplify the left side:

    $^{2n}C_n = \frac{(2n)!}{n!n!}$

    $^{2n}C_n =  \frac{2n * (2n-1)!}{n * (n-1)! * n!}$

    $^{2n}C_n = 2 * \frac{(2n-1)!}{(n-1)!n!} = 2 * ^{2n-1}C_n$

   Hence, we have proven that the coefficient of $x^n$ in the expansion of $(1 + x)^{2n}$ is twice the coefficient of $x^n$ in the expansion of  $(1 + x)^{2n-1}$.

**Question 12:** Find a positive value of 'm' for which the coefficient of $x^2$ in the expansion of $(1 + x)^m$ is 6.

**Explanation:**  We need to find the value of 'm' in the binomial expansion such that a specific term has a coefficient of 6. We'll use the general term formula and solve for 'm'.

**Solution:**

Using the general term formula with  $a=1$ and $b=x$, we need the term with  $x^2$, so  $r = 2$:

$T_{2+1} = T_3 = ^mC_2 * 1^{m-2} * x^2 = ^mC_2 * x^2$

The coefficient of $x^2$ is given as 6:

 $^mC_2 = 6$

Expanding the combination formula:

$\frac{m!}{2!(m-2)!} = 6$

Simplifying:

 $\frac{m(m-1)}{2} = 6$

 $m^2 - m - 12 = 0$

 $(m-4)(m+3) = 0$

This gives us  $m = 4$ or $m = -3$.  Since the question asks for a positive value,  $m = 4$.

Therefore, the positive value of 'm' is **4**.

**Miscellaneous Exercise**

**Question 1:** Find 'a', 'b', and 'n' in the expansion of $(a + b)^n$ if the first three terms of the expansion are 729, 7290, and 30375, respectively.

**Explanation:**  This problem requires us to work backwards from the first three terms of a binomial expansion to find the original values used in the binomial.

**Solution:**

- **Writing the first three terms:**

    The general binomial expansion of $(a + b)^n$ is:

    $(a + b)^n = ^nC_0 a^n b^0 + ^nC_1 a^{n-1} b^1 + ^nC_2 a^{n-2} b^2 + ... + ^nC_n a^0 b^n$

    This gives us the first three terms as:

     1.  $^nC_0 a^n = a^n = 729$
     2.  $^nC_1 a^{n-1} b = na^{n-1}b = 7290$ 
     3.  $^nC_2 a^{n-2} b^2 = \frac{n(n-1)}{2}a^{n-2}b^2 = 30375$

- **Solving for 'a', 'b', and 'n':**

    - From the first term, we get  $a^n = 729$.
    - Divide the second term by the first term: 
    
        $\frac{na^{n-1}b}{a^n} = \frac{7290}{729}$

        $\frac{nb}{a} = 10$ 

    - Divide the third term by the second term:

       $\frac{n(n-1)a^{n-2}b^2}{2na^{n-1}b} = \frac{30375}{7290}$

       $\frac{(n-1)b}{2a} = \frac{25}{6}$

    - Now we have two equations: 
        1. $\frac{nb}{a} = 10$
        2. $\frac{(n-1)b}{2a} = \frac{25}{6}$

   - Divide equation (2) by equation (1):

      $\frac{(n-1)}{2n} = \frac{5}{12}$
      
      $12n - 12 = 10n$

      $n = 6$

   - Substitute n = 6 in  $\frac{nb}{a} = 10$:
       
      $\frac{6b}{a} = 10$

       $6b = 10a$

   - Substitute $a^6 = 729$ (from the first term):

      $a = 3$ (taking the positive root)

   - Substitute  $a = 3$ in  $6b = 10a$:

       $b = 5$

Therefore,  $a = 3$, $b = 5$, and  $n = 6$. 

**Question 2:** Find 'a' if the coefficients of $x^2$ and $x^3$ in the expansion of $(3 + ax)^9$ are equal.

**Explanation:** This problem involves finding the value of a variable within the binomial that satisfies a given condition about the coefficients of two terms.

**Solution:**

- **Finding the coefficients of  $x^2$ and $x^3$:**

    - For the coefficient of $x^2$, we use  $r = 2$ in the general term formula:
        $T_{2+1} = T_3 = ^9C_2 * 3^{9-2} * (ax)^2 = ^9C_2 * 3^7 * a^2 * x^2$

       The coefficient of $x^2$ is  $^9C_2 * 3^7 * a^2$.

    - For the coefficient of  $x^3$, we use $r = 3$:
       $T_{3+1} = T_4 = ^9C_3 * 3^{9-3} * (ax)^3 = ^9C_3 * 3^6 * a^3 * x^3$

        The coefficient of $x^3$ is $^9C_3 * 3^6 * a^3$.

- **Equating the coefficients and solving for 'a':**

    We are given that the coefficients are equal:
     $^9C_2 * 3^7 * a^2 = ^9C_3 * 3^6 * a^3$

    Simplifying:

    $\frac{9!}{2!7!} * 3^7 * a^2 = \frac{9!}{3!6!} * 3^6 * a^3$

   $36 * 3 * a^2 = 84 * a^3$

   $108a^2 = 84a^3$

   $a = \frac{9}{7}$ (since a ≠ 0)

Therefore, the value of 'a' is $\frac{9}{7}$.

**Question 3:** Find the coefficient of $x^5$ in the product $(1 + 2x)^6 (1 - x)^7$ using the binomial theorem.

**Explanation:** This problem involves finding a specific term in the product of two binomial expansions. We'll expand both binomials individually and then identify the terms that multiply to give us $x^5$.

**Solution:**

- **Expanding the binomials:**

    -  Expand $(1 + 2x)^6$:
       $(1 + 2x)^6 = 1 + 12x + 60x^2 + 160x^3 + 240x^4 + 192x^5 + 64x^6$
    -  Expand $(1 - x)^7$:
       $(1 - x)^7 = 1 - 7x + 21x^2 - 35x^3 + 35x^4 - 21x^5 + 7x^6 - x^7$

- **Identifying the terms that contribute to $x^5$:**

     To get $x^5$ when multiplying the two expansions, we need to consider the terms whose powers of 'x' add up to 5. These combinations are:

     -  $1 * (-21x^5) = -21x^5$
     - $12x * (35x^4) = 420x^5$
     - $60x^2 * (-35x^3) = -2100x^5$
     - $160x^3 * (21x^2) = 3360x^5$
     - $240x^4 * (-7x) = -1680x^5$
     - $192x^5 * 1 = 192x^5$

- **Calculating the coefficient:**

     Adding the coefficients of the terms identified above:

    $-21 + 420 - 2100 + 3360 - 1680 + 192 = 171$

Therefore, the coefficient of $x^5$ in the expansion of $(1 + 2x)^6 (1 - x)^7$ is **171**.

**Question 4:** If 'g' and 'b' are distinct integers, prove that $a - b$ is a factor of  $a^n - b^n$, whenever 'n' is a positive integer. 
[Hint: write $a = (a - b) + b$ and expand]

**Explanation:** This question asks us to prove a divisibility rule using the binomial theorem.

**Solution:**

- **Rewriting 'a' and expanding:**

    Following the hint, we rewrite 'a' as $(a - b) + b$:

    $a^n - b^n = [(a - b) + b]^n - b^n$

    Now, expand $[(a - b) + b]^n$ using the binomial theorem:
   
    $[(a - b) + b]^n = ^nC_0 (a-b)^n + ^nC_1 (a-b)^{n-1}b + ^nC_2 (a-b)^{n-2}b^2 + ... + ^nC_{n-1} (a-b)b^{n-1} + ^nC_n b^n$

- **Simplifying and factoring:**

    Notice that the last term in the expansion is $^nC_n b^n = b^n$.  This cancels out with the $-b^n$  term in our original expression:

    $a^n - b^n =  ^nC_0 (a-b)^n + ^nC_1 (a-b)^{n-1}b + ^nC_2 (a-b)^{n-2}b^2 + ... + ^nC_{n-1} (a-b)b^{n-1}$

    We can factor out $(a - b)$ from each term:

    $a^n - b^n = (a-b)[^nC_0 (a-b)^{n-1} + ^nC_1 (a-b)^{n-2}b + ^nC_2 (a-b)^{n-3}b^2 + ... + ^nC_{n-1} b^{n-1}]$

- **Conclusion:**

    Since $a^n - b^n$ can be expressed as $(a-b)$ multiplied by another expression, we have proven that $(a - b)$ is a factor of $(a^n - b^n)$ for any positive integer 'n'.

**Question 5:** Evaluate $(\sqrt{3} + \sqrt{2})^6 - (\sqrt{3} - \sqrt{2})^6$.

**Explanation:** This question involves calculating the difference between two binomial expansions with radical terms. We can use the property  $(a + b)^n - (a - b)^n$ simplifies to an expression with fewer terms.

**Solution:**

- **Simplifying using binomial expansion properties:**

    Recall that in the expansions of $(a + b)^n$ and $(a - b)^n$, the terms with odd powers of 'b' have opposite signs. Therefore, when we subtract the expansions, only the terms with odd powers of 'b' remain.

    $(a + b)^n - (a - b)^n = 2 [^nC_1 a^{n-1}b + ^nC_3 a^{n-3}b^3 + ....]$ 

    Applying this to our problem where $a = \sqrt{3}$, $b = \sqrt{2}$, and $n = 6$:

     $(\sqrt{3} + \sqrt{2})^6 - (\sqrt{3} - \sqrt{2})^6 = 2[^6C_1 (\sqrt{3})^5 (\sqrt{2}) + ^6C_3 (\sqrt{3})^3 (\sqrt{2})^3 + ^6C_5 (\sqrt{3}) (\sqrt{2})^5]$

- **Calculating the expression:**

    Simplifying and calculating the remaining terms:

     $(\sqrt{3} + \sqrt{2})^6 - (\sqrt{3} - \sqrt{2})^6 = 2 [6 * 9\sqrt{3} * \sqrt{2} + 20 * 3\sqrt{3} * 2\sqrt{2} + 6 * \sqrt{3} * 4\sqrt{2}]$

    $(\sqrt{3} + \sqrt{2})^6 - (\sqrt{3} - \sqrt{2})^6 = 2 [54\sqrt{6} + 120\sqrt{6} + 24\sqrt{6}]$ 

    $(\sqrt{3} + \sqrt{2})^6 - (\sqrt{3} - \sqrt{2})^6 = 396\sqrt{6}$

Therefore, the value of $(\sqrt{3} + \sqrt{2})^6 - (\sqrt{3} - \sqrt{2})^6$ is $396\sqrt{6}$. 

**Question 6:** Find the value of $\left(a^2 + \sqrt{a^2 -1}\right)^4 + \left(a^2 - \sqrt{a^2 -1}\right)^4$.

**Explanation:** This question is similar to Question 5, involving the sum of two binomial expansions with radical terms. 

**Solution:**

- **Simplifying using binomial expansion properties:**

    Similar to Question 5, when we expand $(a + b)^n$ and $(a - b)^n$, terms with odd powers of 'b' have opposite signs. However, since we are adding the expansions this time, terms with odd powers of 'b' will cancel out.

    $(a + b)^n + (a - b)^n = 2[^nC_0 a^n + ^nC_2 a^{n-2}b^2 + ^nC_4 a^{n-4}b^4 + ...]$

    Applying this to our problem where $a = a^2$, $b = \sqrt{a^2 - 1}$, and  $n = 4$:
     $\left(a^2 + \sqrt{a^2 -1}\right)^4 + \left(a^2 - \sqrt{a^2 -1}\right)^4 = 2 [^4C_0 (a^2)^4 + ^4C_2 (a^2)^2 (\sqrt{a^2 - 1})^2 + ^4C_4 (\sqrt{a^2 - 1})^4]$ 

- **Calculating the expression:**

    Simplifying and calculating the remaining terms:

    $\left(a^2 + \sqrt{a^2 -1}\right)^4 + \left(a^2 - \sqrt{a^2 -1}\right)^4 = 2 [a^8 + 6a^4 (a^2 - 1) + (a^2 - 1)^2]$

    $\left(a^2 + \sqrt{a^2 -1}\right)^4 + \left(a^2 - \sqrt{a^2 -1}\right)^4 = 2[a^8 + 6a^6 - 6a^4 + a^4 - 2a^2 + 1]$

    $\left(a^2 + \sqrt{a^2 -1}\right)^4 + \left(a^2 - \sqrt{a^2 -1}\right)^4 = 2a^8 + 12a^6 - 10a^4 - 4a^2 + 2$

Therefore, the value of  $\left(a^2 + \sqrt{a^2 -1}\right)^4 + \left(a^2 - \sqrt{a^2 -1}\right)^4$ is $2a^8 + 12a^6 - 10a^4 - 4a^2 + 2$.

**Question 7:** Find an approximation of $(0.99)^5$ using the first three terms of its expansion.

**Explanation:** This question asks us to approximate a decimal power using the binomial theorem for a limited number of terms.

**Solution:**

- **Rewriting the expression and identifying terms:**

    We can rewrite 0.99 as  $(1 - 0.01)$. Now, using the binomial theorem for the first three terms:

   $(1 - 0.01)^5 ≈ ^5C_0 * 1^5 - ^5C_1 * 1^4 * 0.01 + ^5C_2 * 1^3 * (0.01)^2$

- **Calculating the approximation:**

    $(1 - 0.01)^5 ≈ 1 - 5 * 0.01 + 10 * 0.0001$

    $(1 - 0.01)^5 ≈ 1 - 0.05 + 0.001$

    $(1 - 0.01)^5 ≈ 0.951$

Therefore, the approximation of  $(0.99)^5$ using the first three terms of its binomial expansion is **0.951**. 

**Note:** The more terms we use from the binomial expansion, the more accurate our approximation will be.

**Question 8:** Find 'n' if the ratio of the fifth term from the beginning to the fifth term from the end in the expansion of $\left(\sqrt[4]{2} + \frac{1}{\sqrt[4]{3}}\right)^n$ is $\sqrt{6} : 1$.

**Explanation:** This question combines finding specific terms in a binomial expansion with ratios and solving equations. We'll find the required terms, set up the ratio, and solve for 'n'.

**Solution:**

- **Fifth term from the beginning (T₅):**

    Using the general term formula with $r = 4$, $a = \sqrt[4]{2}$, and $b = \frac{1}{\sqrt[4]{3}}$:

    $T_5 = ^nC_4 * (\sqrt[4]{2})^{n-4} * \left(\frac{1}{\sqrt[4]{3}}\right)^4$

    $T_5 = \frac{n!}{4!(n-4)!} * 2^{\frac{n-4}{4}}*3^{-1}$

- **Fifth term from the end (T_{n-4}):**

   The fifth term from the end is equivalent to the sixth term from the beginning of the expansion of $\left(\frac{1}{\sqrt[4]{3}} + \sqrt[4]{2}\right)^n$. Therefore, using the general term formula with $r=5$:

    $T_{n-4} = ^nC_5 * \left(\frac{1}{\sqrt[4]{3}}\right)^{n-5} * (\sqrt[4]{2})^5$

    $T_{n-4} = \frac{n!}{5!(n-5)!} * 3^{\frac{-n+5}{4}} * 2^{\frac{5}{4}}$

- **Forming the ratio:**

    The given ratio is:

     $\frac{T_5}{T_{n-4}} = \frac{^nC_4 * 2^{\frac{n-4}{4}} * 3^{-1}}{^nC_5 * 3^{\frac{-n+5}{4}} * 2^{\frac{5}{4}}} = \sqrt{6}$

    Simplifying the ratio by canceling out common factors and rearranging:

    $\frac{5 * 2^{\frac{n-9}{4}}*3^{\frac{n-5}{4}}}{(n-4)} = \sqrt{6}$

- **Solving for 'n':**

    To get  $\sqrt{6}$  on the right side, we need  $2^{\frac{n-9}{4}} * 3^{\frac{n-5}{4}} = 6$.  This happens when n = 10.

Therefore, the value of 'n' is  **10**.

**Question 9:**  In the expansion of $(1 + a)^{m+n}$, prove that coefficients of $a^m$ and $a^n$ are equal.

**Explanation:** This problem asks us to prove a relationship between specific coefficients in a binomial expansion. We'll use the general term formula to represent the terms containing $a^m$ and $a^n$ and show their coefficients are equal.

**Solution:**

- **Finding the coefficient of $a^m$:**

    Using the general term formula for $(1+a)^{m+n}$, for the term with $a^m$, we have $r=m$:

    $T_{m+1} = ^{m+n}C_m * 1^{m+n-m} * a^m = ^{m+n}C_m * a^m$

    Therefore, the coefficient of  $a^m$ is $^{m+n}C_m$.

- **Finding the coefficient of $a^n$:**

    Similarly, for the term with  $a^n$, we have $r = n$:

    $T_{n+1} = ^{m+n}C_n * 1^{m+n-n} * a^n = ^{m+n}C_n * a^n$

    Therefore, the coefficient of $a^n$ is  $^{m+n}C_n$.

- **Proving the equality:**

    Recall the property of combinations:  $^nC_r = ^nC_{n-r}$. Applying this to our coefficients:

    $^{m+n}C_m = ^{m+n}C_{(m+n)-m} = ^{m+n}C_n$

    This shows that the coefficient of $a^m$ is equal to the coefficient of  $a^n$.

Hence, we have proven that in the expansion of $(1 + a)^{m+n}$, the coefficients of $a^m$ and $a^n$ are equal.

**Question 10:** The coefficients of the $(r - 1)^{th}$, $r^{th}$, and $(r + 1)^{th}$ terms in the expansion of $(x + 1)^n$ are in the ratio 1 : 3 : 5. Find 'n' and 'r'.

**Explanation:** This question provides a ratio between consecutive coefficients in a binomial expansion and requires us to find the values of 'n' and 'r'. 

**Solution:**

- **Writing the coefficients:**

    Using the general term formula for $(x + 1)^n$, we can represent the coefficients as follows:
    - Coefficient of $(r-1)^{th}$ term:  $^nC_{r-2}$ 
    - Coefficient of $r^{th}$ term: $^nC_{r-1}$ 
    - Coefficient of $(r+1)^{th}$ term:  $^nC_r$

- **Forming equations using the ratio:**

    We are given the ratio of these coefficients as 1:3:5.  Therefore:

    $\frac{^nC_{r-2}}{^nC_{r-1}} = \frac{1}{3}$  ...(1)

    $\frac{^nC_{r-1}}{^nC_r} = \frac{3}{5}$  ...(2)

- **Solving for 'n' and 'r':**

    Simplify equation (1):
    $\frac{(r-1)}{(n-r+2)} = \frac{1}{3}$ 
    $3r - 3 = n - r + 2$ 
    $n - 4r = -5$ ...(3)

    Simplify equation (2): 
    $\frac{r}{(n-r+1)} = \frac{3}{5}$ 
    $5r = 3n - 3r + 3$
    $3n - 8r = -3$ ...(4)

    Now, solve the simultaneous equations (3) and (4).  Solving these equations gives us:

     n = 7 and r = 3

Therefore, the values of 'n' and 'r' are  **n = 7** and **r = 3**. 
