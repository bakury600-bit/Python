"use strict";

/* =========================================
   Python Study Hub
   Designed by: بكر جاسم
   Instagram: b9.is
========================================= */

const mcqQuestions = [
  {
    topic: "Variables",
    q: "Which function is used to display the data type of a variable?",
    options: ["print()", "type()", "input()", "str()"],
    answer: 1,
    explanation: "الدالة type() تُستخدم لمعرفة نوع البيانات المخزنة في المتغير. مثال: x = 10 ثم type(x) تعيد int."
  },
  {
    topic: "Variables",
    q: "What is the data type of x = 10.5?",
    options: ["int", "str", "float", "bool"],
    answer: 2,
    explanation: "القيمة 10.5 تحتوي على فاصلة عشرية، لذلك نوعها float وليس int."
  },
  {
    topic: "Variables",
    q: "Which function receives input from the user?",
    options: ["input()", "print()", "type()", "range()"],
    answer: 0,
    explanation: "input() تستقبل البيانات التي يدخلها المستخدم، وتعيدها كنص من النوع str حتى لو أدخل أرقاماً."
  },
  {
    topic: "Variables",
    q: "What is the result of int('25')?",
    options: ["'25'", "25", "25.0", "Error"],
    answer: 1,
    explanation: "int() تحول النص الرقمي '25' إلى عدد صحيح 25."
  },
  {
    topic: "Variables",
    q: "Which operator is used for exponentiation?",
    options: ["*", "//", "**", "%"],
    answer: 2,
    explanation: "العامل ** يُستخدم للأس، فمثلاً 2 ** 3 تساوي 8."
  },
  {
    topic: "Variables",
    q: "What is the result of 17 // 5?",
    options: ["3.4", "3", "2", "4"],
    answer: 1,
    explanation: "العامل // يقسم قسمة صحيحة، أي يحذف الجزء العشري من الناتج. 17 // 5 تساوي 3."
  },
  {
    topic: "Variables",
    q: "What does the % operator return?",
    options: ["The remainder", "The power", "The quotient", "The variable type"],
    answer: 0,
    explanation: "العامل % يعيد باقي القسمة. مثال: 17 % 5 يساوي 2 لأن باقي قسمة 17 على 5 هو 2."
  },
  {
    topic: "Variables",
    q: "What is the result of bool(0)?",
    options: ["True", "False", "0", "Error"],
    answer: 1,
    explanation: "القيمة العددية صفر تُعد False عند تحويلها إلى bool. أما الأعداد غير الصفرية فتُعد True."
  },
  {
    topic: "Variables",
    q: "Which symbol is used for a single-line comment in Python?",
    options: ["//", "#", "/*", "--"],
    answer: 1,
    explanation: "نستخدم الرمز # لكتابة تعليق في Python، ويتجاهل المفسر النص الموجود بعده في السطر."
  },
  {
    topic: "Variables",
    q: "What is the output of print(4 + 3 * 2)?",
    options: ["14", "10", "20", "9"],
    answer: 1,
    explanation: "تُنفذ عملية الضرب قبل الجمع. أولاً 3 * 2 = 6، ثم 4 + 6 = 10."
  },

  {
    topic: "Conditions",
    q: "Which keyword starts a condition in Python?",
    options: ["when", "if", "for", "check"],
    answer: 1,
    explanation: "الكلمة if تبدأ جملة شرطية، ويُنفذ الكود داخلها عندما يكون الشرط True."
  },
  {
    topic: "Conditions",
    q: "Which keyword is used when the previous if condition is False and we want to test another condition?",
    options: ["else if", "elseif", "elif", "another"],
    answer: 2,
    explanation: "نستخدم elif لاختبار شرط إضافي بعد if. ويمكن استخدام أكثر من elif قبل else."
  },
  {
    topic: "Conditions",
    q: "What does the == operator mean?",
    options: ["Assignment", "Equality comparison", "Not equal", "Greater than"],
    answer: 1,
    explanation: "العامل == يقارن قيمتين ويعيد True إذا كانتا متساويتين، ولا يغيّر قيمة المتغير."
  },
  {
    topic: "Conditions",
    q: "What is the result of 5 > 3 and 2 < 4?",
    options: ["True", "False", "5", "Error"],
    answer: 0,
    explanation: "الشرط الأول True والثاني True. العامل and يعيد True عندما يكون الشرطان صحيحين."
  },
  {
    topic: "Conditions",
    q: "Which logical operator returns True if at least one condition is True?",
    options: ["and", "not", "or", "=="],
    answer: 2,
    explanation: "العامل or يكفي أن يكون أحد الشرطين True حتى تكون النتيجة True."
  },
  {
    topic: "Conditions",
    q: "What is the purpose of else?",
    options: [
      "Repeat code",
      "Run when previous conditions are False",
      "Create a variable",
      "Convert data"
    ],
    answer: 1,
    explanation: "تُنفذ كتلة else عندما لا يتحقق أي شرط سابق في سلسلة if وelif."
  },
  {
    topic: "Conditions",
    q: "What is the result of not True?",
    options: ["True", "False", "None", "Error"],
    answer: 1,
    explanation: "العامل not يعكس القيمة المنطقية؛ لذلك not True تساوي False."
  },
  {
    topic: "Conditions",
    q: "Which operator means not equal?",
    options: ["==", "!=", ">=", "="],
    answer: 1,
    explanation: "العامل != يفحص ما إذا كانت القيمتان غير متساويتين."
  },

  {
    topic: "Loops",
    q: "Which loop is commonly used when the number of repetitions is known?",
    options: ["if", "for", "while", "else"],
    answer: 1,
    explanation: "غالباً نستخدم for عندما نريد المرور على عناصر أو تكرار عدد محدد من المرات."
  },
  {
    topic: "Loops",
    q: "What does range(5) generate?",
    options: ["1 to 5", "0 to 5", "0 to 4", "1 to 4"],
    answer: 2,
    explanation: "range(5) تبدأ من صفر وتتوقف قبل 5، لذلك القيم هي 0 و1 و2 و3 و4."
  },
  {
    topic: "Loops",
    q: "Which statement stops a loop immediately?",
    options: ["continue", "break", "pass", "stop"],
    answer: 1,
    explanation: "break تنهي الحلقة الحالية مباشرة، وينتقل البرنامج إلى أول تعليمة بعد الحلقة."
  },
  {
    topic: "Loops",
    q: "What does continue do?",
    options: [
      "Ends the program",
      "Skips to the next iteration",
      "Stops all loops",
      "Restarts Python"
    ],
    answer: 1,
    explanation: "continue تتجاوز بقية أوامر الدورة الحالية وتنتقل إلى الدورة التالية من الحلقة."
  },
  {
    topic: "Loops",
    q: "Which loop checks its condition before each iteration?",
    options: ["while", "if", "print", "input"],
    answer: 0,
    explanation: "حلقة while تفحص الشرط قبل تنفيذ جسم الحلقة. إذا كان الشرط False من البداية فلن تنفذ."
  },
  {
    topic: "Loops",
    q: "How many times does range(2, 6) iterate?",
    options: ["6", "5", "4", "3"],
    answer: 2,
    explanation: "القيم هي 2 و3 و4 و5. العدد 6 غير مشمول، لذلك عدد التكرارات أربعة."
  },
  {
    topic: "Loops",
    q: "What can cause an infinite while loop?",
    options: [
      "Updating the condition variable",
      "A condition that never becomes False",
      "Using print()",
      "Using int()"
    ],
    answer: 1,
    explanation: "إذا بقي شرط while صحيحاً ولم تتغير القيم التي يعتمد عليها، فقد تستمر الحلقة دون توقف."
  }
];

/* =========================================
   برامج Python مع شرح واضح
========================================= */

const programs = [
  {
    title: "برنامج جمع عددين",
    topic: "Variables",
    code: `num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

result = num1 + num2

print("Result =", result)`,
    explanation: [
      "السطر الأول يستقبل العدد الأول من المستخدم. استخدمنا int() لتحويل الإدخال من نص إلى عدد صحيح.",
      "السطر الثاني يستقبل العدد الثاني بالطريقة نفسها.",
      "السطر الثالث يجمع العددين ويخزن الناتج داخل المتغير result.",
      "السطر الأخير يطبع عبارة Result ثم قيمة الناتج."
    ],
    output: `Enter first number: 10
Enter second number: 5
Result = 15`
  },
  {
    title: "حساب مساحة المستطيل",
    topic: "Variables",
    code: `length = float(input("Enter length: "))
width = float(input("Enter width: "))

area = length * width

print("Area =", area)`,
    explanation: [
      "نستقبل الطول والعرض باستخدام input().",
      "استخدمنا float() للسماح بإدخال أعداد عشرية أيضاً.",
      "مساحة المستطيل تساوي الطول مضروباً في العرض.",
      "نطبع قيمة area للمستخدم."
    ],
    output: `Enter length: 5
Enter width: 3
Area = 15.0`
  },
  {
    title: "التحقق من العدد زوجي أم فردي",
    topic: "Conditions",
    code: `num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even")
else:
    print("Odd")`,
    explanation: [
      "نستقبل عدداً صحيحاً من المستخدم.",
      "نستخدم العامل % للحصول على باقي القسمة على 2.",
      "إذا كان الباقي يساوي صفر فهذا يعني أن العدد زوجي.",
      "إذا لم يكن الباقي صفراً فسيتم تنفيذ else وطباعة Odd."
    ],
    output: `Enter a number: 8
Even`
  },
  {
    title: "تحديد العدد الأكبر بين عددين",
    topic: "Conditions",
    code: `a = int(input("Enter A: "))
b = int(input("Enter B: "))

if a > b:
    print("A is greater")
elif b > a:
    print("B is greater")
else:
    print("Numbers are equal")`,
    explanation: [
      "نقرأ العددين ونخزنهما في a وb.",
      "يفحص if هل a أكبر من b.",
      "إذا لم يتحقق الشرط، ينتقل البرنامج إلى elif ويفحص هل b أكبر من a.",
      "إذا لم يتحقق الشرطان، فهذا يعني أن العددين متساويان، فينفذ else."
    ],
    output: `Enter A: 12
Enter B: 7
A is greater`
  },
  {
    title: "تحديد النجاح أو الرسوب",
    topic: "Conditions",
    code: `mark = float(input("Enter your mark: "))

if mark >= 50:
    print("Pass")
else:
    print("Fail")`,
    explanation: [
      "نستقبل درجة الطالب باستخدام float.",
      "يفحص البرنامج هل الدرجة أكبر من أو تساوي 50.",
      "عند تحقق الشرط تظهر Pass.",
      "إذا كانت الدرجة أقل من 50 تظهر Fail."
    ],
    output: `Enter your mark: 75
Pass`
  },
  {
    title: "طباعة الأعداد من 1 إلى 5",
    topic: "Loops",
    code: `for i in range(1, 6):
    print(i)`,
    explanation: [
      "تبدأ حلقة for بتحديد المتغير i.",
      "range(1, 6) تنتج الأعداد من 1 إلى 5.",
      "في كل دورة تأخذ i قيمة جديدة.",
      "ينفذ print(i) ويطبع قيمة i الحالية."
    ],
    output: `1
2
3
4
5`
  },
  {
    title: "حساب مجموع الأعداد من 1 إلى 5",
    topic: "Loops",
    code: `total = 0

for i in range(1, 6):
    total = total + i

print("Total =", total)`,
    explanation: [
      "نبدأ total بالقيمة صفر حتى نخزن فيه المجموع.",
      "تتكرر الحلقة للقيم 1 و2 و3 و4 و5.",
      "في كل دورة نضيف قيمة i إلى total.",
      "تتغير قيمة total تدريجياً: 1 ثم 3 ثم 6 ثم 10 ثم 15.",
      "بعد انتهاء الحلقة نطبع المجموع النهائي."
    ],
    output: `Total = 15`
  },
  {
    title: "جدول الضرب لعدد",
    topic: "Loops",
    code: `num = int(input("Enter a number: "))

for i in range(1, 11):
    print(num, "x", i, "=", num * i)`,
    explanation: [
      "نستقبل العدد الذي يريد المستخدم معرفة جدول ضربه.",
      "range(1, 11) تجعل الحلقة تتكرر عشر مرات.",
      "في كل مرة تتغير قيمة i من 1 إلى 10.",
      "نضرب العدد المدخل في i ونطبع العملية والناتج."
    ],
    output: `Enter a number: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 10 = 30`
  },
  {
    title: "استخدام while",
    topic: "Loops",
    code: `i = 1

while i <= 5:
    print(i)
    i = i + 1`,
    explanation: [
      "نبدأ المتغير i بالقيمة 1.",
      "يفحص while هل i أصغر من أو تساوي 5.",
      "إذا كان الشرط صحيحاً، يطبع البرنامج قيمة i.",
      "بعد الطباعة نزيد i بمقدار واحد.",
      "عندما تصبح i تساوي 6 يصبح الشرط False وتتوقف الحلقة."
    ],
    output: `1
2
3
4
5`
  },
  {
    title: "استخدام break",
    topic: "Loops",
    code: `for i in range(1, 10):
    if i == 5:
        break
    print(i)`,
    explanation: [
      "تبدأ الحلقة بالقيم من 1 إلى 9.",
      "يفحص if في كل دورة هل i تساوي 5.",
      "عندما تصل i إلى 5 ينفذ break.",
      "تنتهي الحلقة فوراً، لذلك لن تتم طباعة 5 أو أي رقم بعدها."
    ],
    output: `1
2
3
4`
  },
  {
    title: "استخدام continue",
    topic: "Loops",
    code: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)`,
    explanation: [
      "تتكرر الحلقة للقيم من 1 إلى 5.",
      "عندما تصبح i تساوي 3 يتحقق الشرط.",
      "ينفذ continue ويتجاوز أمر الطباعة في هذه الدورة فقط.",
      "تستمر الحلقة بعد ذلك مع الرقم 4 ثم 5."
    ],
    output: `1
2
4
5`
  },
  {
    title: "حساب عدد الأحرف في نص",
    topic: "Variables",
    code: `word = input("Enter a word: ")

length = len(word)

print("Length =", length)`,
    explanation: [
      "نستقبل كلمة من المستخدم ونخزنها في word.",
      "الدالة len() تحسب عدد الأحرف في النص.",
      "نخزن العدد داخل المتغير length.",
      "نطبع عدد الأحرف."
    ],
    output: `Enter a word: Python
Length = 6`
  }
];

/* =========================================
   توقع ناتج البرنامج
========================================= */

const outputQuestions = [
  {
    code: `x = 5
y = 3
print(x + y)`,
    answer: "8",
    explanation: "قيمة x هي 5 وقيمة y هي 3. عملية الجمع 5 + 3 تساوي 8."
  },
  {
    code: `x = 10
x = x + 2
print(x)`,
    answer: "12",
    explanation: "بدأ x بالقيمة 10، ثم أضفنا إليه 2 وخزّنا الناتج في x نفسه، فأصبحت قيمته 12."
  },
  {
    code: `print(10 // 3)`,
    answer: "3",
    explanation: "العامل // ينفذ القسمة الصحيحة ويحذف الجزء العشري. الناتج الرياضي 3.333، لكن الناتج هنا 3."
  },
  {
    code: `print(10 % 3)`,
    answer: "1",
    explanation: "العامل % يعيد باقي القسمة. عند قسمة 10 على 3 يكون الباقي 1."
  },
  {
    code: `x = 4
if x > 2:
    print("Yes")
else:
    print("No")`,
    answer: "Yes",
    explanation: "الشرط 4 > 2 صحيح، لذلك ينفذ البرنامج كتلة if ولا ينفذ else."
  },
  {
    code: `x = 7
if x < 5:
    print("A")
else:
    print("B")`,
    answer: "B",
    explanation: "الشرط 7 < 5 غير صحيح، لذلك ينتقل التنفيذ إلى else ويطبع B."
  },
  {
    code: `for i in range(3):
    print(i)`,
    answer: "0\n1\n2",
    explanation: "عند كتابة range(3) تبدأ القيم من صفر وتتوقف قبل 3، فتكون 0 و1 و2."
  },
  {
    code: `for i in range(2, 5):
    print(i)`,
    answer: "2\n3\n4",
    explanation: "تبدأ range من 2 وتتوقف قبل 5. لذلك تطبع الحلقة 2 ثم 3 ثم 4."
  },
  {
    code: `i = 1
while i <= 3:
    print(i)
    i += 1`,
    answer: "1\n2\n3",
    explanation: "تبدأ i من 1. بعد كل طباعة تزيد بمقدار واحد. عندما تصبح 4 يفشل الشرط وتتوقف الحلقة."
  },
  {
    code: `for i in range(1, 5):
    if i == 3:
        break
    print(i)`,
    answer: "1\n2",
    explanation: "تطبع الحلقة 1 و2. عندما تصل إلى 3 ينفذ break قبل أمر الطباعة، فتتوقف الحلقة."
  },
  {
    code: `for i in range(1, 5):
    if i == 2:
        continue
    print(i)`,
    answer: "1\n3\n4",
    explanation: "عندما تكون i تساوي 2 ينفذ continue ويتجاوز الطباعة. بقية القيم تُطبع بصورة طبيعية."
  },
  {
    code: `x = "5"
y = int(x)
print(y + 2)`,
    answer: "7",
    explanation: "المتغير x نص. الدالة int تحول النص الرقمي إلى العدد 5، ثم نجمع 5 + 2."
  },
  {
    code: `a = 6
b = 2
print(a * b + 1)`,
    answer: "13",
    explanation: "الأولوية للضرب قبل الجمع. أولاً 6 × 2 = 12 ثم نضيف 1 فيكون الناتج 13."
  },
  {
    code: `print(2 ** 3)`,
    answer: "8",
    explanation: "العامل ** يعني الأس. أي 2 مرفوع للقوة 3: 2 × 2 × 2 = 8."
  },
  {
    code: `name = "Ali"
print("Hello", name)`,
    answer: "Hello Ali",
    explanation: "تطبع print النص Hello ثم قيمة المتغير name. وتضع مسافة بين القيمتين عند الفصل بالفاصلة."
  }
];

/* =========================================
   اكتشاف الأخطاء وتصحيحها
========================================= */

const debugQuestions = [
  {
    title: "نسيان النقطتين بعد if",
    wrong: `x = 10
if x > 5
    print("Big")`,
    fixed: `x = 10
if x > 5:
    print("Big")`,
    explanation: "في Python يجب وضع النقطتين : في نهاية سطر if حتى يبدأ جسم الشرط. حذفها يسبب SyntaxError."
  },
  {
    title: "خطأ في المسافة البادئة",
    wrong: `if True:
print("Hello")`,
    fixed: `if True:
    print("Hello")`,
    explanation: "يجب إزاحة الأوامر التابعة للشرط إلى الداخل. استخدم أربع مسافات عادةً لتوضيح أن print داخل if."
  },
  {
    title: "استخدام = بدلاً من ==",
    wrong: `x = 5
if x = 5:
    print("Equal")`,
    fixed: `x = 5
if x == 5:
    print("Equal")`,
    explanation: "الرمز = لإسناد قيمة إلى متغير، أما == فللمقارنة بين قيمتين داخل الشرط."
  },
  {
    title: "نسيان تحويل input إلى رقم",
    wrong: `age = input("Enter age: ")
print(age + 1)`,
    fixed: `age = int(input("Enter age: "))
print(age + 1)`,
    explanation: "input تعيد نصاً. عند محاولة جمع نص وعدد قد يظهر TypeError. نحول الإدخال إلى int إذا كنا نريد إجراء عملية حسابية."
  },
  {
    title: "مدى range غير صحيح",
    wrong: `for i in range(1, 5):
    print(i)
# المطلوب طباعة 1 إلى 5`,
    fixed: `for i in range(1, 6):
    print(i)`,
    explanation: "القيمة الأخيرة في range لا تدخل ضمن النتائج. لذلك نكتب 6 حتى تظهر القيمة 5."
  },
  {
    title: "حلقة while لا تتقدم",
    wrong: `i = 1
while i <= 5:
    print(i)`,
    fixed: `i = 1
while i <= 5:
    print(i)
    i += 1`,
    explanation: "المتغير i لا يتغير في الكود الخطأ، لذلك يبقى الشرط صحيحاً باستمرار. نزيد i في كل دورة حتى تصل إلى قيمة تنهي الحلقة."
  },
  {
    title: "نسيان الأقواس في print",
    wrong: `print "Hello Python"`,
    fixed: `print("Hello Python")`,
    explanation: "في Python 3، print دالة ويجب وضع النص المراد طباعته داخل الأقواس."
  },
  {
    title: "كتابة elif بصورة خاطئة",
    wrong: `x = 10
if x > 10:
    print("A")
else if x == 10:
    print("B")`,
    fixed: `x = 10
if x > 10:
    print("A")
elif x == 10:
    print("B")`,
    explanation: "الصيغة الصحيحة في Python هي elif وليست else if."
  },
  {
    title: "مقارنة النص مع عدد",
    wrong: `age = input("Age: ")
if age >= 18:
    print("Adult")`,
    fixed: `age = int(input("Age: "))
if age >= 18:
    print("Adult")`,
    explanation: "القيمة التي ترجع من input نصية. نحولها إلى عدد صحيح باستخدام int قبل مقارنتها بعدد."
  },
  {
    title: "استخدام عامل إسناد داخل شرط",
    wrong: `mark = 90
if mark = 90:
    print("Excellent")`,
    fixed: `mark = 90
if mark == 90:
    print("Excellent")`,
    explanation: "نستخدم == للمقارنة. أما = فيُستخدم لإسناد قيمة إلى متغير."
  },
  {
    title: "كتابة اسم متغير مختلف",
    wrong: `total = 20
print(totla)`,
    fixed: `total = 20
print(total)`,
    explanation: "اسم المتغير في سطر الطباعة مكتوب بصورة مختلفة. Python تميز بين أسماء المتغيرات حرفاً بحرف."
  },
  {
    title: "نسيان تحويل ناتج الإدخال",
    wrong: `number = input("Number: ")
result = number * 2
print(result)`,
    fixed: `number = int(input("Number: "))
result = number * 2
print(result)`,
    explanation: "إذا أدخل المستخدم 5 كنص، فإن تكرار النص بالضرب يختلف عن الضرب الحسابي. نستخدم int للحصول على عدد صحيح."
  }
];

/* =========================================
   عرض الأسئلة
========================================= */

const mcqList = document.getElementById("mcqList");
const programList = document.getElementById("programList");
const outputList = document.getElementById("outputList");
const debugList = document.getElementById("debugList");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderMCQ() {
  const search = document.getElementById("mcqSearch").value.toLowerCase();
  const filter = document.getElementById("mcqFilter").value;

  const filtered = mcqQuestions.filter(item => {
    const matchesSearch =
      item.q.toLowerCase().includes(search) ||
      item.options.some(option => option.toLowerCase().includes(search));

    const matchesFilter = filter === "all" || item.topic === filter;
    return matchesSearch && matchesFilter;
  });

  mcqList.innerHTML = "";

  if (!filtered.length) {
    mcqList.innerHTML = `<p class="section-description">لم يتم العثور على أسئلة مطابقة.</p>`;
    return;
  }

  filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "item-card";

    card.innerHTML = `
      <span class="topic">${escapeHTML(item.topic)}</span>
      <h3>${index + 1}. ${escapeHTML(item.q)}</h3>
      <div class="options">
        ${item.options.map((option, i) => `
          <button class="option" data-option="${i}">
            ${String.fromCharCode(65 + i)}. ${escapeHTML(option)}
          </button>
        `).join("")}
      </div>
      <button class="action-btn check-answer">تحقق من الإجابة</button>
      <div class="answer-box">
        <strong class="result-title"></strong>
        <p class="correct-answer"></p>
        <p>${escapeHTML(item.explanation)}</p>
      </div>
    `;

    let selected = null;

    const optionButtons = card.querySelectorAll(".option");
    optionButtons.forEach(button => {
      button.addEventListener("click", () => {
        selected = Number(button.dataset.option);

        optionButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });

    card.querySelector(".check-answer").addEventListener("click", () => {
      const answerBox = card.querySelector(".answer-box");
      const resultTitle = card.querySelector(".result-title");
      const correctAnswer = card.querySelector(".correct-answer");

      if (selected === null) {
        resultTitle.textContent = "اختر إجابة أولاً";
        correctAnswer.textContent = "حدد أحد الخيارات ثم اضغط تحقق.";
        answerBox.classList.add("show");
        return;
      }

      optionButtons.forEach((btn, i) => {
        btn.classList.remove("correct", "wrong");
        if (i === item.answer) btn.classList.add("correct");
        if (i === selected && selected !== item.answer) {
          btn.classList.add("wrong");
        }
      });

      if (selected === item.answer) {
        resultTitle.textContent = "إجابة صحيحة!";
      } else {
        resultTitle.textContent = "إجابة غير صحيحة.";
      }

      correctAnswer.textContent =
        "الإجابة الصحيحة: " + item.options[item.answer];

      answerBox.classList.add("show");
    });

    mcqList.appendChild(card);
  });
}

/* =========================================
   عرض البرامج
========================================= */

function renderPrograms() {
  const search = document.getElementById("programSearch").value.toLowerCase();

  const filtered = programs.filter(program =>
    program.title.toLowerCase().includes(search) ||
    program.topic.toLowerCase().includes(search)
  );

  programList.innerHTML = "";

  filtered.forEach((program, index) => {
    const card = document.createElement("article");
    card.className = "item-card";

    card.innerHTML = `
      <span class="topic">${escapeHTML(program.topic)}</span>
      <h3>${index + 1}. ${escapeHTML(program.title)}</h3>
      <pre><code>${escapeHTML(program.code)}</code></pre>

      <div class="explanation">
        <b>شرح البرنامج خطوة بخطوة:</b>
        <ol>
          ${program.explanation.map(step => `<li>${escapeHTML(step)}</li>`).join("")}
        </ol>
      </div>

      <button class="action-btn show-program-output">إظهار الناتج</button>
      <div class="answer-box">
        <strong>الناتج المتوقع:</strong>
        <pre><code>${escapeHTML(program.output)}</code></pre>
      </div>
    `;

    card.querySelector(".show-program-output").addEventListener("click", event => {
      const box = card.querySelector(".answer-box");
      box.classList.toggle("show");
      event.target.textContent = box.classList.contains("show")
        ? "إخفاء الناتج"
        : "إظهار الناتج";
    });

    programList.appendChild(card);
  });
}

/* =========================================
   عرض أسئلة توقع النواتج
========================================= */

function renderOutputs() {
  outputList.innerHTML = "";

  outputQuestions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "item-card";

    card.innerHTML = `
      <h3>السؤال ${index + 1}: ما ناتج البرنامج؟</h3>
      <pre><code>${escapeHTML(item.code)}</code></pre>
      <button class="action-btn show-output-answer">عرض الإجابة والشرح</button>
      <div class="answer-box">
        <strong>الناتج الصحيح:</strong>
        <pre><code>${escapeHTML(item.answer)}</code></pre>
        <p>${escapeHTML(item.explanation)}</p>
      </div>
    `;

    card.querySelector(".show-output-answer").addEventListener("click", event => {
      const box = card.querySelector(".answer-box");
      box.classList.toggle("show");
      event.target.textContent = box.classList.contains("show")
        ? "إخفاء الإجابة"
        : "عرض الإجابة والشرح";
    });

    outputList.appendChild(card);
  });
}

/* =========================================
   عرض تمارين تصحيح الأخطاء
========================================= */

function renderDebug() {
  debugList.innerHTML = "";

  debugQuestions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "item-card";

    card.innerHTML = `
      <h3>${index + 1}. ${escapeHTML(item.title)}</h3>
      <p>اكتشف الخطأ الموجود في الكود التالي:</p>
      <pre><code>${escapeHTML(item.wrong)}</code></pre>

      <button class="action-btn show-debug-answer">عرض التصحيح</button>

      <div class="answer-box">
        <strong>الكود الصحيح:</strong>
        <pre><code>${escapeHTML(item.fixed)}</code></pre>
        <p><b>سبب الخطأ وطريقة التصحيح:</b></p>
        <p>${escapeHTML(item.explanation)}</p>
      </div>
    `;

    card.querySelector(".show-debug-answer").addEventListener("click", event => {
      const box = card.querySelector(".answer-box");
      box.classList.toggle("show");
      event.target.textContent = box.classList.contains("show")
        ? "إخفاء التصحيح"
        : "عرض التصحيح";
    });

    debugList.appendChild(card);
  });
}

/* =========================================
   البحث، اللغة، والثيم
========================================= */

document.getElementById("mcqSearch").addEventListener("input", renderMCQ);
document.getElementById("mcqFilter").addEventListener("change", renderMCQ);
document.getElementById("programSearch").addEventListener("input", renderPrograms);

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.getElementById("themeBtn").textContent =
    document.body.classList.contains("light") ? "☾" : "☀";
});

document.getElementById("langBtn").addEventListener("click", () => {
  alert("الواجهة التعليمية الحالية باللغة العربية. يمكن إضافة ترجمة كاملة للمحتوى الإنجليزي في إصدار ثنائي اللغة.");
});

window.addEventListener("scroll", () => {
  document.getElementById("backTop").style.display =
    window.scrollY > 400 ? "block" : "none";
});

document.getElementById("backTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================
   إحصائيات الموقع
========================================= */

document.getElementById("mcqCount").textContent = mcqQuestions.length;
document.getElementById("programCount").textContent = programs.length;
document.getElementById("outputCount").textContent = outputQuestions.length;
document.getElementById("debugCount").textContent = debugQuestions.length;

/* تشغيل الموقع */
renderMCQ();
renderPrograms();
renderOutputs();
renderDebug();
